# 🚀 GitHub & Vercel Deployment Guide

Deploy CampusBazaar to production in 5 minutes!

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click **+** (top right) → **New Repository**
3. Name it: `campusbazaar`
4. Description: "A hyperlocal campus marketplace for Thapar Institute students"
5. Make it **Public** (for free GitHub Pages & easier deployment)
6. Click **Create Repository**

---

## Step 2: Connect Local Git to GitHub

Copy-paste this into your terminal:

```bash
cd /Users/krishbeniwal/Documents/campusbazaar

# Replace YOUR_USERNAME with your GitHub username
git remote set-url origin https://github.com/YOUR_USERNAME/campusbazaar.git
git branch -M main
git push -u origin main
```

That's it! Your code is now on GitHub. ✅

---

## Step 3: Deploy to Vercel (Easiest!)

### Via Vercel Website (No CLI needed)

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** and choose **Continue with GitHub**
3. Authorize Vercel to access your GitHub account
4. Click **Import Project**
5. Paste: `https://github.com/YOUR_USERNAME/campusbazaar`
6. Click **Import**
7. Leave settings as default
8. Click **Deploy**

**Done!** 🎉 Vercel will:
- Build your project
- Deploy automatically
- Give you a live URL like `https://campusbazaar.vercel.app`

### Add Environment Variables (Important!)

1. In Vercel Dashboard, go to **Settings → Environment Variables**
2. Add these (replace with your real values):

```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: your_supabase_url_here

Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: your_supabase_anon_key_here

Name: NEXT_PUBLIC_RAZORPAY_KEY
Value: your_razorpay_public_key_here

Name: RAZORPAY_SECRET
Value: your_razorpay_secret_key_here

Name: NEXT_PUBLIC_APP_URL
Value: https://campusbazaar.vercel.app
```

3. Click **Save**
4. Go to **Deployments** and click **Redeploy on main**

✅ Live!

---

## Step 4: Enable Auto-Deploy

Vercel already auto-deploys on every push!

Just do this locally to update live site:

```bash
cd /Users/krishbeniwal/Documents/campusbazaar

# Make your changes
nano app/page.tsx

# Commit and push
git add .
git commit -m "Update: add new feature"
git push origin main
```

Vercel automatically deploys within 30 seconds! 🚀

---

## 📊 Monitor Your Deployment

**Vercel Dashboard:**
- Check deployment status
- View build logs
- See analytics
- Manage domains

**Git Commits:**
```bash
# See commit history
git log --oneline

# View commits on GitHub
https://github.com/YOUR_USERNAME/campusbazaar/commits/main
```

---

## 🌐 Add Custom Domain (Optional)

1. **Buy domain** from [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), etc.
2. In Vercel: **Settings → Domains**
3. Add your domain
4. Update DNS records at your registrar following Vercel's instructions
5. Done! Your site is at `campusbazaar.com` 🎉

---

## 🔐 Important: Never Commit Secrets!

Check `.gitignore` has these:

```bash
cat /Users/krishbeniwal/Documents/campusbazaar/.gitignore
```

Should include:
```
.env.local
.env.*.local
node_modules/
.next/
```

**Why?** Anyone can see public GitHub repos including secrets!

---

## 📱 Test Your Live Site

After deployment:

1. Visit your Vercel URL
2. Check homepage loads
3. Click around and test
4. Check mobile on phone
5. Share the link! 🎉

---

## 🔄 Automatic Updates

Every time you push to GitHub:

```
git push origin main
    ↓
GitHub receives code
    ↓
Vercel webhook triggered
    ↓
Vercel pulls latest code
    ↓
Builds Next.js project
    ↓
Deploys to global CDN
    ↓
Live at https://campusbazaar.vercel.app ✅
```

All automatic - just push! ⚡

---

## 🚨 Rollback if Something Breaks

Oops! Made a mistake?

1. Vercel Dashboard → **Deployments**
2. Find the previous working deployment
3. Click **...** → **Promote to Production**
4. Live on old version again! ✅

Or use git:
```bash
git log --oneline
git revert <commit_hash>
git push origin main
```

---

## 📚 Quick Commands

```bash
# Clone someone else's repo
git clone https://github.com/USERNAME/campusbazaar.git

# Check status
git status

# See all commits
git log --oneline

# See current branch
git branch

# Switch branch
git checkout -b feature/new-feature

# Merge branch
git checkout main
git merge feature/new-feature

# Delete local branch
git branch -d feature/new-feature
```

---

## 💡 Pro Tips

1. **Use meaningful commit messages**:
   ```bash
   ✅ git commit -m "Add listing detail page with image gallery"
   ❌ git commit -m "fix stuff"
   ```

2. **Commit often, push regularly**:
   ```bash
   git add .
   git commit -m "WIP: building search filter"
   git push
   ```

3. **Protect main branch** (in GitHub Settings):
   - Require pull request reviews
   - Prevent direct pushes
   - Require status checks

4. **Use GitHub Issues** to track feature requests and bugs

---

## ❓ FAQ

**Q: Do I need to pay for Vercel?**
A: No! Free tier is generous (100GB bandwidth, unlimited deployments)

**Q: Can I use my own domain?**
A: Yes! Add it in Vercel Settings for free

**Q: How do I add team members?**
A: GitHub: Add collaborators. Vercel: Add team members in settings

**Q: What if Vercel goes down?**
A: Extremely rare (99.95% uptime). Can always re-deploy to another platform

**Q: How do I see my site's analytics?**
A: Vercel Dashboard → Analytics tab

---

## 🎯 You're Ready!

✅ Project on GitHub
✅ Deployed to Vercel  
✅ Auto-deploys on push
✅ Live & shareable!

**Share your link:** https://campusbazaar.vercel.app

---

**Need help? Open an issue on GitHub or contact support. Happy deploying! 🚀**
