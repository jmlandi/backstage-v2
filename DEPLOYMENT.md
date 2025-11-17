# Deployment Guide - Backstage Website

## Prerequisites

Before deploying, ensure you have:

- ✅ GitHub account
- ✅ Netlify account (free tier works great)
- ✅ Neon Database account
- ✅ All required assets (fonts and images) in the `public` folder

## Step-by-Step Deployment

### 1. Prepare Your Repository

#### Initialize Git

```bash
cd /Users/marcos/Projects/backstage-website-v2
git init
git add .
git commit -m "Initial commit: Backstage website v2"
```

#### Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `backstage-website-v2`
3. Don't initialize with README (we already have one)

#### Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/backstage-website-v2.git
git branch -M main
git push -u origin main
```

### 2. Setup Neon Database

Follow the detailed instructions in `DATABASE_SETUP.md`:

1. Create a Neon account at https://neon.tech
2. Create a new project
3. Run the SQL schema from `database/schema.sql`
4. Copy your database connection string

### 3. Deploy to Netlify

#### Option A: Netlify Dashboard (Recommended for First Deploy)

1. **Login to Netlify**
   - Go to https://app.netlify.com
   - Sign in with GitHub

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Authorize Netlify to access your repositories
   - Select `backstage-website-v2`

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - (These should be auto-detected from `netlify.toml`)

4. **Add Environment Variables**
   - Before deploying, click "Advanced build settings"
   - Or go to Site settings → Environment variables
   - Add:
     - **Key**: `DATABASE_URL`
     - **Value**: Your Neon database connection string

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete (usually 1-2 minutes)
   - Your site will be live at a Netlify subdomain

#### Option B: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize the project
netlify init

# Follow prompts:
# - Create & configure a new site
# - Build command: npm run build
# - Publish directory: dist

# Set environment variable
netlify env:set DATABASE_URL "your_neon_connection_string"

# Deploy
netlify deploy --prod
```

### 4. Custom Domain (Optional)

#### Using Netlify Domain

1. Go to Site settings → Domain management
2. Click "Options" → "Edit site name"
3. Change from random name to `backstage-produtora` (or your preference)
4. Your site will be at `backstage-produtora.netlify.app`

#### Using Your Own Domain

1. Purchase a domain (GoDaddy, Namecheap, etc.)
2. In Netlify: Site settings → Domain management → Add custom domain
3. Follow DNS configuration instructions:
   - Add A record: `75.2.60.5`
   - Add CNAME record: `www` → `your-site.netlify.app`
4. Enable HTTPS (automatic with Let's Encrypt)

### 5. Post-Deployment Checks

#### Test All Features

- [ ] Hero carousel auto-rotates and manual controls work
- [ ] Navigation scrolls smoothly to sections
- [ ] Mobile menu opens and closes properly
- [ ] All images load correctly
- [ ] Contact form submits successfully
- [ ] Contact data appears in Neon database
- [ ] All links work (social media, etc.)
- [ ] Responsive design works on mobile/tablet/desktop

#### Performance Checks

Use these tools to verify performance:

1. **Lighthouse** (Chrome DevTools)
   - Open DevTools → Lighthouse tab
   - Run audit
   - Aim for 90+ scores

2. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Enter your URL
   - Check both mobile and desktop scores

3. **GTmetrix**
   - https://gtmetrix.com/
   - Analyze your site
   - Check loading times

### 6. Continuous Deployment

Once connected to GitHub, Netlify will automatically deploy when you push changes:

```bash
# Make changes to your code
git add .
git commit -m "Update: description of changes"
git push origin main
```

Netlify will:
1. Detect the push
2. Build your site
3. Deploy automatically
4. Notify you via email

### 7. Monitoring & Maintenance

#### Netlify Analytics (Optional, Paid)

- Site settings → Analytics
- Get detailed visitor stats
- No cookies or tracking scripts needed

#### Free Alternatives

- Google Analytics
- Plausible Analytics
- Umami

#### Database Monitoring

Check Neon dashboard for:
- Database usage
- Query performance
- Storage limits

### 8. Troubleshooting

#### Build Fails

Check Netlify deploy logs:
1. Go to Deploys tab
2. Click on failed deploy
3. Check build logs for errors

Common issues:
- Missing dependencies: Run `npm install` locally
- Environment variables: Verify `DATABASE_URL` is set
- Asset paths: Ensure all images exist

#### Function Errors

Check function logs:
1. Functions tab in Netlify
2. Click on `save-contact`
3. View logs for errors

Common issues:
- Database connection: Verify connection string
- CORS errors: Check Netlify headers in `netlify.toml`
- Missing packages: Ensure `@neondatabase/serverless` is in dependencies

#### Images Not Loading

- Check file paths are correct
- Verify images are in `/public/images/`
- Ensure file names match exactly (case-sensitive)
- Check image file sizes (should be optimized)

### 9. Environment-Specific Configuration

#### Development

```bash
# Local development with Netlify functions
netlify dev
# Access at http://localhost:8888
```

#### Staging (Optional)

Create a staging branch:
```bash
git checkout -b staging
git push origin staging
```

In Netlify:
- Add branch deploy for `staging`
- Use different environment variables if needed

### 10. Backup Strategy

#### Code Backup
- ✅ Automatically backed up on GitHub
- Consider enabling GitHub Actions for automated tests

#### Database Backup
- Neon provides automatic backups
- Check Neon dashboard → Backup settings
- Consider exporting data periodically:

```bash
# Export database
pg_dump $DATABASE_URL > backup.sql

# Import backup (if needed)
psql $DATABASE_URL < backup.sql
```

## Security Best Practices

1. **Never commit sensitive data**
   - `.env` is in `.gitignore`
   - Use Netlify environment variables

2. **Keep dependencies updated**
   ```bash
   npm audit
   npm update
   ```

3. **Enable HTTPS** (automatic on Netlify)

4. **Set up security headers** (already configured in `netlify.toml`)

5. **Validate all form inputs** (already implemented)

## Support & Resources

- **Netlify Docs**: https://docs.netlify.com/
- **Neon Docs**: https://neon.tech/docs
- **Vue 3 Docs**: https://vuejs.org/
- **Vite Docs**: https://vitejs.dev/

## Need Help?

Check these resources:
- Netlify Community: https://answers.netlify.com/
- Neon Discord: https://discord.gg/neon
- Vue Discord: https://discord.com/invite/vue

---

🎉 **Congratulations!** Your Backstage website is now live!

Your site should be accessible at:
- `https://your-site-name.netlify.app`
- Or your custom domain if configured
