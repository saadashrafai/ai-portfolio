# 🚀 Quick Start Guide

## What Changed?

Your portfolio is now **100% SECURE**! The OpenAI API key is protected and never exposed to browsers.

### Before → After
```
❌ Before: Browser → OpenAI (API key exposed)
✅ After:  Browser → Your Backend → OpenAI (API key hidden)
```

---

## 📋 Setup (3 Steps)

### 1️⃣ Add Your API Key
Edit `.env.local` and add your OpenAI API key:
```
OPENAI_API_KEY=sk-proj-your-actual-key-here
```

Get your key: https://platform.openai.com/api-keys

### 2️⃣ Test Locally
```bash
cd ai-portfolio
vercel dev
```

Open http://localhost:3000 and test the chatbot.

### 3️⃣ Deploy to Vercel

See detailed deployment instructions in `DEPLOYMENT.md`

**Quick version:**
1. Push code to GitHub
2. Go to vercel.com → Import Repository
3. Add environment variable: `OPENAI_API_KEY`
4. Click Deploy

**Or deploy to Railway, Render, or any Node.js host** - See `DEPLOYMENT.md`

---

## ✅ Security Verification

Run this command to verify everything is secure:
```bash
.\verify-security.ps1
```

All checks should pass with ✅

---

## 📁 New Files Created

```
api/
  └── chat.js              ← Backend API (has the key securely)
.env.local                 ← Your API key (DO NOT commit)
.env.example               ← Template for setup
vercel.json                ← Deployment config
SECURITY_SETUP.md          ← Full documentation
verify-security.ps1        ← Security check script
```

---

## 🔧 Files Modified

```
src/components/Chatbot.jsx ← Now calls /api/chat (no key)
vite.config.js             ← Proxy for local dev
.gitignore                 ← Protects .env files
package.json               ← Added dev:vercel script
```

---

## 🎯 Commands

| Command | Purpose |
|---------|---------|
| `vercel dev` | Run locally with API |
| `npm run build` | Build for production |
| `.\verify-security.ps1` | Check security |
| `vercel --prod` | Deploy to production |

---

## ❓ Troubleshooting

**Chatbot not working locally?**
- Make sure you're using `vercel dev` (not `npm run dev`)
- Check `.env.local` has your API key
- Verify OpenAI account has credits

**Deploy issues?**
- Add `OPENAI_API_KEY` in Vercel dashboard
- Check function logs in Vercel dashboard
- Verify `api/chat.js` was deployed

---

## 🔐 Security Confirmed

✅ No API key in frontend bundle  
✅ No direct OpenAI calls from browser  
✅ API key only in environment variables  
✅ `.env.local` protected by `.gitignore`  
✅ Backend handles all OpenAI requests  

**Your setup is production-ready and secure!**

---

## 📚 Documentation

- Full Guide: `SECURITY_SETUP.md`
- Security Check: `verify-security.ps1`
- Environment Template: `.env.example`

Need help? Check the full documentation in `SECURITY_SETUP.md`
