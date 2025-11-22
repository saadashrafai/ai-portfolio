import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint - same as Vercel serverless function
app.post('/api/chat', async (req, res) => {
  try {
    // Get API key from environment variable (NEVER expose this)
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      console.error('OPENAI_API_KEY is not set in environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Get messages from request body
    const { messages, model = 'gpt-4o', temperature = 0.8, max_tokens = 200 } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request: messages array is required' });
    }

    // Forward request to OpenAI API
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}` // API key stays on server only
      },
      body: JSON.stringify({
        model,
        messages,
        temperature,
        max_tokens
      })
    });

    const data = await openaiResponse.json();

    // Handle OpenAI API errors
    if (!openaiResponse.ok) {
      console.error('OpenAI API error:', data);
      return res.status(openaiResponse.status).json({ 
        error: data.error?.message || 'Error communicating with OpenAI' 
      });
    }

    // Return the response to frontend
    return res.status(200).json(data);

  } catch (error) {
    console.error('Server error:', error.message);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: process.env.NODE_ENV === 'development' ? error.message : 'An error occurred'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Backend server is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`✅ API endpoint: http://localhost:${PORT}/api/chat`);
  console.log(`🔒 API key is secure and loaded from .env.local\n`);
});
