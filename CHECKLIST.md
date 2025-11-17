# 🚀 Pre-Launch Checklist

Use this checklist before deploying your Backstage website to production.

## 📦 Development Setup

- [ ] Node.js 18+ installed
- [ ] Project dependencies installed (`npm install`)
- [ ] Development server runs without errors (`npm run dev`)
- [ ] All Vue components render correctly

## 🎨 Assets

### Fonts
- [ ] SpaceGrotesk-Regular.woff2 added to `/public/fonts/`
- [ ] SpaceGrotesk-Bold.woff2 added to `/public/fonts/`
- [ ] Fonts load correctly in browser (check DevTools Network tab)

### Images
- [ ] Hero carousel images (hero-1.jpg, hero-2.jpg, hero-3.jpg)
- [ ] Show images (show-1.jpg through show-6.jpg)
- [ ] About team image (about-team.jpg)
- [ ] Milestone images (milestone-1.jpg through milestone-6.jpg)
- [ ] Team member photos (team-1.jpg through team-4.jpg)
- [ ] All images optimized (< 300KB for hero, < 150KB for others)
- [ ] Consider WebP format for better compression
- [ ] All images display correctly with no 404 errors

## 💾 Database

- [ ] Neon Database account created
- [ ] Database project created in Neon
- [ ] SQL schema executed (`database/schema.sql`)
- [ ] Database table `contatos` exists
- [ ] Connection string copied
- [ ] `.env` file created with `DATABASE_URL`
- [ ] Test database connection (submit contact form locally with `netlify dev`)
- [ ] Verify data appears in Neon database

## 🔐 Environment Variables

### Local (.env file)
- [ ] `.env` file created (not committed to Git!)
- [ ] `DATABASE_URL` set in `.env`
- [ ] Local testing works with Netlify CLI

### Production (Netlify)
- [ ] Netlify environment variable `DATABASE_URL` configured
- [ ] Environment variable is accessible to functions

## 🎯 Content Review

- [ ] Hero carousel: Real event data or placeholder?
- [ ] Upcoming Shows: Real events or sample data?
- [ ] About section: Company description updated
- [ ] Bio timeline: Real company milestones
- [ ] Team members: Real team information and photos
- [ ] Contact info: Email, phone, address correct
- [ ] Social media links: All URLs updated (or removed if not ready)
- [ ] Footer links: Privacy policy, Terms of Use (create or link)

## 🧪 Testing

### Functionality
- [ ] Hero carousel auto-rotates (5 seconds)
- [ ] Hero carousel manual controls work (arrows + dots)
- [ ] Header navigation scrolls smoothly to sections
- [ ] Active section highlights correctly in nav
- [ ] Mobile hamburger menu opens/closes
- [ ] Mobile menu closes when clicking a link
- [ ] Contact form validation works (try invalid inputs)
- [ ] Contact form submits successfully
- [ ] Success toast appears after submission
- [ ] Data saved to database
- [ ] Error handling works (test with invalid data)
- [ ] All external links open in new tab

### Responsive Design
- [ ] Test on mobile (375px, 390px, 414px widths)
- [ ] Test on tablet (768px, 834px, 1024px widths)
- [ ] Test on desktop (1280px, 1440px, 1920px widths)
- [ ] All text is readable at all sizes
- [ ] No horizontal scrolling
- [ ] Images scale appropriately
- [ ] Touch targets are at least 44x44px on mobile

### Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Performance
- [ ] Run Lighthouse audit (target: 90+ all categories)
- [ ] Check PageSpeed Insights
- [ ] Images lazy load correctly
- [ ] Fonts load without FOUT (Flash of Unstyled Text)
- [ ] No console errors
- [ ] No console warnings (check DevTools)
- [ ] Network tab shows no 404s

## 🔍 SEO & Accessibility

- [ ] Page title is descriptive
- [ ] Meta description added (add to index.html if needed)
- [ ] Open Graph tags (for social sharing)
- [ ] Favicon present
- [ ] All images have alt text
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA standards

## 📱 Social Media

- [ ] Instagram link updated (or removed)
- [ ] Facebook link updated (or removed)
- [ ] Twitter/X link updated (or removed)
- [ ] YouTube link updated (or removed)
- [ ] LinkedIn link added if relevant
- [ ] All social links tested

## 🚀 Deployment

### Git & GitHub
- [ ] Git repository initialized
- [ ] `.gitignore` includes `.env`, `node_modules`, `dist`
- [ ] Initial commit made
- [ ] GitHub repository created
- [ ] Code pushed to GitHub

### Netlify
- [ ] Netlify account created
- [ ] Site connected to GitHub repository
- [ ] Build settings configured (build: `npm run build`, publish: `dist`)
- [ ] Environment variables set in Netlify
- [ ] First deployment successful
- [ ] Site is live and accessible
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled (automatic on Netlify)

### Post-Deployment
- [ ] Test live site thoroughly
- [ ] Submit test contact form on live site
- [ ] Verify data in database
- [ ] Check all external links work
- [ ] Test on real mobile devices
- [ ] Share site URL with stakeholders

## 📊 Analytics (Optional)

- [ ] Google Analytics configured
- [ ] Netlify Analytics enabled (paid)
- [ ] Or alternative analytics (Plausible, Umami)
- [ ] Conversion tracking for contact form

## 🔒 Security

- [ ] Environment variables not in repository
- [ ] Database connection uses SSL
- [ ] HTTPS enabled on domain
- [ ] Security headers configured (check netlify.toml)
- [ ] Form validation on client and server
- [ ] No sensitive data in console logs
- [ ] Dependencies up to date (`npm audit`)

## 📞 Launch Support

- [ ] Documentation reviewed (README, guides)
- [ ] Contact form tested with real email
- [ ] Email notifications working (if configured)
- [ ] Stakeholders informed of launch
- [ ] Backup of database taken
- [ ] Backup of repository on GitHub

## 🎯 Post-Launch

### Week 1
- [ ] Monitor form submissions
- [ ] Check for any errors in Netlify logs
- [ ] Review analytics data
- [ ] Gather user feedback
- [ ] Fix any reported issues

### Month 1
- [ ] Update content as needed
- [ ] Add new events to carousel/shows
- [ ] Review database storage
- [ ] Check performance metrics
- [ ] Plan improvements based on data

## ✅ Final Check

Before announcing launch:
- [ ] Everything on this checklist is complete
- [ ] Site is fully functional
- [ ] Content is accurate and current
- [ ] All stakeholders have reviewed
- [ ] Backup and rollback plan in place

---

## 🎉 Ready to Launch!

Once all items are checked, you're ready to go live!

**Remember:**
- Keep this checklist for future updates
- Review periodically for maintenance
- Update content regularly to keep site fresh

**Good luck with your launch! 🚀**
