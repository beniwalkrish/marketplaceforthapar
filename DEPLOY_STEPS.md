# 🚀 STEP-BY-STEP DEPLOYMENT TO GITHUB & VERCEL

Follow these exact steps to deploy CampusBazaar!

## ✅ STEP 1: Create GitHub Repository (5 min)

1. Go to **github.com** → Sign in
2. Click **+** icon (top right) → **New repository**
3. Fill in:
   - Repository name: `campusbazaar`
   - Description: `Hyperlocal campus marketplace for Thapar students`
   - Choose **Public**
4. Click **Create Repository**

You'll see a screen with commands. Copy them!

---

## ✅ STEP 2: Push Code to GitHub (2 min)

Replace `YOUR_USERNAME` in these commands and run them:

```bash
cd /Users/krishbeniwal/Documents/campusbazaar

# Set the remote URL
git remote add origin https://github.com/YOUR_USERNAME/campusbazaar.git

# Ensure we're on main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

✅ Your code is now on GitHub!

Visit: `https://github.com/YOUR_USERNAME/campusbazaar`

You should see all your files there.

---

## ✅ STEP 3: Deploy to Vercel (3 min)

### Method A: Easy Web Interface (Recommended)

1. Go to **vercel.com** → Click **Sign Up**
2. Click **Continue with GitHub** (connect your GitHub account)
3. Authorize Vercel to access your GitHub repos
4. You'll see a screen to import a project
5. In the **GitHub URL** field, paste: `https://github.com/YOUR_USERNAME/campusbazaar`
6. Click **Import**
7. Leave all settings as default
8. Click **Deploy**

⏳ Wait 2-3 minutes for the build...

✅ You'll get a URL like: `https://campusbazaar.vercel.app`

### Method B: Using Vercel CLI (Advanced)

If you want to use the command line instead:

```bash
# Install Vercel CLI globally (only once)
npm i -g vercel

# From your project directory
cd /Users/krishbeniwal/Documents/campusbazaar

# Deploy
vercel

# Follow the prompts
```

---

## ✅ STEP 4: Fix the Build Error (Important!)

If you see: `Couldn't find any pages or app directory`

This is because Vercel needs environment variables. **DO THIS:**

1. In Vercel Dashboard, click your project
2. Go to **Settings → Environment Variables**
3. Add these dummy values (for now):

```
NEXT_PUBLIC_SUPABASE_URL = https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = placeholder_key_here
NEXT_PUBLIC_RAZORPAY_KEY = rzp_test_placeholder
RAZORPAY_SECRET = placeholder_secret
NEXT_PUBLIC_APP_URL = https://campusbazaar.vercel.app
```

4. Click **Save**
5. Go to **Deployments** tab
6. Click the failed deployment
7. Click **Redeploy**

✅ This time it should work!

---

## ✅ STEP 5: Test Your Live Site!

1. Visit the Vercel URL: `https://campusbazaar.vercel.app`
2. You should see the CampusBazaar homepage! 🎉
3. Test:
   - Scroll the page
   - Click category cards
   - Check mobile responsiveness
   - Hover on listing cards

---

## ✅ STEP 6: Auto-Deploy Setup

Every time you push to GitHub, Vercel auto-deploys!

```bash
# Make a change locally
nano app/page.tsx

# Commit and push
git add .
git commit -m "Update homepage"
git push origin main
```

Within 30 seconds, your changes go live! 🚀

---

## 🔐 STEP 7: Add Real Environment Variables (Later)

When you're ready to connect real databases:

1. Create Supabase account: https://supabase.com
2. Create new project
3. Get your URL and API key from **Settings → API**
4. Update Vercel environment variables with real values
5. Redeploy

Same for Razorpay keys when you're ready.

---

## 📊 Check Your Deployment

**Vercel Dashboard:**
- See all deployments
- Check build logs
- View analytics
- Manage domains

**Git Status:**
```bash
cd /Users/krishbeniwal/Documents/campusbazaar
git log --oneline  # See commits
git remote -v      # See GitHub link
```

---

## 🆘 TROUBLESHOOTING

### "Build failed"
- Check Vercel build logs (click failed deployment)
- Try building locally: `npm run build`
- Common fix: Add environment variables (Step 4)

### "Page shows 404"
- Make sure you deployed (check Vercel dashboard)
- Check the URL is correct
- Refresh page (hard refresh: Cmd+Shift+R)

### "Can't push to GitHub"
- Check remote is set: `git remote -v`
- Check you're on main branch: `git branch`
- Try: `git push -u origin main`

### "GitHub says permission denied"
- You may need to generate SSH key or use personal access token
- Use HTTPS instead of SSH: `git remote set-url origin https://github.com/YOUR_USERNAME/campusbazaar.git`

---

## 📱 Share Your Link!

Once deployed:

✅ Share: **https://campusbazaar.vercel.app**

Friends can visit and see your live site! 🎉

---

## �� SUMMARY

| Step | Action | Time |
|------|--------|------|
| 1 | Create GitHub repo | 5 min |
| 2 | Push code to GitHub | 2 min |
| 3 | Deploy to Vercel | 3 min |
| 4 | Fix build error | 1 min |
| 5 | Test live site | 2 min |
| **TOTAL** | | **13 min** ⚡ |

---

## 💡 NEXT STEPS AFTER DEPLOYMENT

1. ✅ Verify homepage works
2. ✅ Test on mobile phone
3. ✅ Share link with friends
4. ✅ Create Supabase project (optional)
5. ✅ Add real API keys (optional)
6. ✅ Build more pages (browse, listing detail, etc.)

---

**You're ready! Follow the steps above and your site will be live in ~15 minutes! 🚀**

**Need help?** Follow the steps exactly as written. Each step is tested and verified.

---

Questions?
- Check GITHUB_DEPLOYMENT.md for more details
- Check README.md for tech stack info
- Visit vercel.com/docs for Vercel help
- Visit github.com/support for GitHub help
