# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy this project with serverless functions.

### Step 1: Prepare Your Code

Make sure `.env.local` is NOT committed to git:
```bash
git status
# Should NOT see .env.local in the list
```

### Step 2: Deploy via GitHub

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add secure chatbot"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects the Vite configuration

3. **Add Environment Variable:**
   - In Vercel dashboard → Settings → Environment Variables
   - Add: `OPENAI_API_KEY` = `your-actual-api-key`
   - Apply to: Production, Preview, Development

4. **Deploy:**
   - Click "Deploy"
   - Wait ~2 minutes
   - Your site is live! 🎉

### Step 3: Verify

Visit your deployed site and test the chatbot. Check browser DevTools:
- Network tab should show requests to `/api/chat`
- No requests to `api.openai.com` from browser
- No API keys visible anywhere

---

## Alternative: Deploy to Railway

Railway is another free option for deploying Node.js apps.

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy on Railway:**
   - Go to https://railway.app
   - Create new project from GitHub repo
   - Railway auto-detects Node.js

3. **Add Environment Variables:**
   - Go to Variables tab
   - Add: `OPENAI_API_KEY`
   - Add: `PORT` = `3001`

4. **Deploy:**
   - Railway automatically deploys
   - Get your public URL

5. **Update Frontend:**
   - No changes needed - `/api/chat` works automatically

---

## Alternative: Deploy to Render

1. **Create Web Service:**
   - Go to https://render.com
   - New → Web Service
   - Connect GitHub repository

2. **Configure:**
   - Build Command: `npm install`
   - Start Command: `npm run server`
   - Add environment variable: `OPENAI_API_KEY`

3. **Deploy Static Site (Frontend):**
   - New → Static Site
   - Build Command: `npm run build`
   - Publish Directory: `dist`

---

## Environment Variables (All Platforms)

Always set these in your deployment platform:

```
OPENAI_API_KEY=sk-proj-your-actual-key-here
```

**Never hardcode these in your code!**

---

## Security Checklist Before Deploy

- [ ] `.env.local` is in `.gitignore`
- [ ] No API keys in source code
- [ ] Environment variables set in deployment platform
- [ ] Test chatbot on deployed site
- [ ] Check browser DevTools (no API keys visible)
- [ ] Run `.\verify-security.ps1` before pushing

---

## Post-Deployment

### Monitor Usage:
- Check OpenAI usage dashboard
- Monitor API costs
- Set usage limits in OpenAI dashboard

### Updates:
```bash
git add .
git commit -m "Update feature"
git push
# Vercel/Railway auto-deploys
```

---

## Troubleshooting

**Chatbot not working after deploy?**
- Check environment variable is set
- Check function logs in platform dashboard
- Verify API key is valid and has credits

**CORS errors?**
- Already handled in `server.js`
- Vercel functions have CORS by default

**Build fails?**
- Check Node.js version (should be 18+)
- Verify all dependencies in `package.json`

---

## Cost Estimate

- **Vercel**: Free tier (100GB bandwidth, serverless functions)
- **Railway**: Free tier ($5 credit/month)
- **Render**: Free tier (750 hours/month)
- **OpenAI**: Pay per token usage

**Total**: Can run completely free on small traffic! 🎉
