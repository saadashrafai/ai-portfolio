# AI Portfolio with Secure Chatbot

A React portfolio website with an integrated AI chatbot powered by OpenAI, featuring secure API key management.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your OpenAI API Key
Create or edit `.env.local` and add your API key:
```
OPENAI_API_KEY=sk-proj-your-actual-key-here
```

Get your API key from: https://platform.openai.com/api-keys

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
│   │   ├── Chatbot.jsx      # AI chatbot (calls /api/chat)
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   └── ...
│   └── App.jsx
├── api/
│   └── chat.js              # Vercel serverless function
├── server.js                # Local Express server
├── .env.local               # Your API key (gitignored)
└── .env.example             # Template
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
2. Import project on [Vercel](https://vercel.com)
3. Add environment variable: `OPENAI_API_KEY`
4. Deploy

### Option 2: Other Platforms
Deploy `server.js` as a Node.js app and set the `OPENAI_API_KEY` environment variable.

---

## 🔧 Tech Stack

- **Frontend**: React, Vite, TailwindCSS
- **Backend**: Node.js, Express
- **AI**: OpenAI GPT-3.5 Turbo
- **Deployment**: Vercel / Any Node.js host

---

## 📚 Documentation

- **Quick Start**: See `QUICK_START.md`
- **Security Guide**: See `SECURITY_SETUP.md`
- **Verify Security**: Run `.\verify-security.ps1`

---

## ⚠️ Important Notes

- **Never commit `.env.local`** - It contains your secret API key
- **Always use environment variables** - Never hardcode keys
- **Test with `npm run dev`** - Ensures backend is running

---

## 📄 License

MIT
