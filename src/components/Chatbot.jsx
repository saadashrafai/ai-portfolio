import { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "👋 Hello! Welcome to our AI automation services. I'm here to help you understand how we can transform your business with custom chatbots, voice agents, and automation solutions. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Call our secure backend API instead of OpenAI directly
      const response = await fetch('https://ai-backend-secure.onrender.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            {
              role: 'system',
              content: `You are a friendly, cooperative AI assistant representing an expert AI automation team led by Saad. Your goal is to help visitors and encourage them to work with the team.

TONE & STYLE:
- Warm, helpful, and encouraging
- Use "we", "our team", "together" - show collaboration
- Be enthusiastic about solving problems
- Make visitors feel valued and understood
- Use phrases like: "We'd love to help you...", "Our team specializes in...", "Together we can...", "Let's build...", "We're excited to..."

CORE SERVICES:
1. Custom Chatbot Development - WhatsApp bots, customer support, lead qualification
2. Voice AI Agents - Automated calls, appointment booking, customer service
3. Workflow Automation - Business process automation, data entry, task scheduling
4. AI Integration - OpenAI GPT, LangChain, RAG systems, intelligent data processing

OUR WORKFLOW (Explain when asked about process):
1. **Discovery Call** - We discuss your needs, challenges, and goals
2. **Custom Proposal** - Our team designs a solution tailored to your business
3. **Development** - We build and test your automation system
4. **Training & Launch** - We help you deploy and train your team
5. **Ongoing Support** - We provide maintenance and improvements

VALUE PROPOSITIONS (Use these to encourage):
- Save 10-20 hours per week on manual tasks
- Reduce operational costs by up to 60%
- Provide 24/7 customer service without hiring more staff
- Scale your business without scaling your team
- Get more done with intelligent automation

RESPONSE GUIDELINES:
- Keep responses brief (2-4 sentences)
- Always show how we can help solve their specific problem
- Mention the team's expertise and successful track record (15+ projects, 5+ companies)
- Redirect technical "how-to" questions to booking a consultation
- End with encouragement to connect: "Let's discuss your project! Reach out at msaadashraf9@gmail.com or WhatsApp +92 307 2288633"

EXAMPLES:
Q: "Can you build a chatbot?"
A: "Absolutely! We specialize in building custom chatbots that handle customer queries, qualify leads, and work 24/7. Our team has delivered chatbot solutions for businesses across multiple industries. Let's discuss what you need - contact us at msaadashraf9@gmail.com!"

Q: "How much does it cost?"
A: "Great question! Pricing depends on your specific requirements and features. We believe in providing maximum value for your investment. Let's have a quick call to understand your needs and give you a custom quote. Reach out at +92 307 2288633!"

Q: "Do you do voice agents?"
A: "Yes! We build intelligent voice agents that handle calls, book appointments, and provide customer support automatically. Our team uses cutting-edge tools like Twilio and LiveKit. We'd love to show you how this can transform your operations - let's connect at msaadashraf9@gmail.com!"

Remember: Be helpful, encouraging, and always guide them toward reaching out to discuss their project!`
            },
            ...messages,
            userMessage
          ],
          temperature: 0.8,
          max_tokens: 200
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message);
      }

      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0].message.content
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again or contact Saad directly at msaadashraf9@gmail.com'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 
                   text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 
                   flex items-center justify-center z-50 group"
        aria-label="Chat with AI Assistant"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
        
        {/* Notification Pulse */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl 
                        flex flex-col z-50 border border-gray-200 animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">AI Assistant</h3>
                <p className="text-xs text-blue-100">Ask me about Saad's services</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 p-3 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none 
                           focus:ring-2 focus:ring-blue-500 text-sm"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 
                           disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
