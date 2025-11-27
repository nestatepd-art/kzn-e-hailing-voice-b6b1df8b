# Cybersmart Hosting Deployment Checklist

## Pre-Deployment Preparation

### 1. Code Review & Testing
- [ ] Test all pages and routes locally (`npm run dev`)
- [ ] Verify all forms work correctly (Membership Form, Contact Form)
- [ ] Test responsive design on mobile, tablet, and desktop
- [ ] Check all links and navigation work properly
- [ ] Verify images load correctly
- [ ] Test dark/light mode if applicable

### 2. Build Optimization
- [ ] Run production build: `npm run build`
- [ ] Check build output for errors or warnings
- [ ] Verify build size is reasonable (check `dist` folder)
- [ ] Test production build locally: `npm run preview`

### 3. SEO & Meta Tags
- [ ] Verify `index.html` has proper meta tags
- [ ] Check page title and description
- [ ] Ensure Open Graph tags are set
- [ ] Add favicon (already in `public/favicon.ico`)
- [ ] Verify `robots.txt` is configured (`public/robots.txt`)

### 4. Performance Optimization
- [ ] Compress images (use WebP format where possible)
- [ ] Minimize CSS and JavaScript (done automatically by Vite)
- [ ] Enable lazy loading for images
- [ ] Remove unused dependencies
- [ ] Check bundle size and optimize if needed

## File Preparation

### 5. Apache Configuration
- [ ] Ensure `.htaccess` file is in `public` folder
- [ ] Backup `.htaccess` file (`.htaccess.bak` created)
- [ ] Verify rewrite rules are correct for React Router
- [ ] Check compression settings are enabled
- [ ] Verify caching rules are appropriate

### 6. Environment Variables
- [ ] Create `.env.production` file if needed
- [ ] Remove any sensitive development keys
- [ ] Ensure production API endpoints are configured
- [ ] Verify all environment variables are set correctly

## Upload to Cybersmart

### 7. File Transfer
- [ ] Connect to Cybersmart hosting via FTP/SFTP or cPanel File Manager
- [ ] Navigate to public_html or www directory
- [ ] Upload entire contents of `dist` folder (not the folder itself)
- [ ] Upload `.htaccess` file to root directory
- [ ] Verify all files uploaded successfully
- [ ] Check file permissions (755 for directories, 644 for files)

### 8. Directory Structure on Server
```
public_html/
├── assets/           (CSS, JS, images from build)
├── .htaccess        (Apache configuration)
├── index.html       (Main entry point)
├── robots.txt       (SEO configuration)
└── favicon.ico      (Site icon)
```

## Server Configuration

### 9. Cybersmart cPanel Settings
- [ ] Set PHP version (if required by backend)
- [ ] Enable mod_rewrite (Apache module)
- [ ] Enable mod_deflate for compression
- [ ] Enable mod_expires for caching
- [ ] Configure error pages (404, 500)
- [ ] Set up SSL certificate (HTTPS)

### 10. SSL/HTTPS Setup
- [ ] Install SSL certificate (Let's Encrypt or purchased)
- [ ] Force HTTPS redirect (add to `.htaccess` if needed)
- [ ] Verify HTTPS works without errors
- [ ] Update any hard-coded HTTP URLs to HTTPS

## Testing & Verification

### 11. Functional Testing
- [ ] Visit your domain and verify homepage loads
- [ ] Test all navigation links
- [ ] Test Membership Form submission
- [ ] Test Contact Form submission
- [ ] Verify all routes work (refresh on any page)
- [ ] Check 404 page displays correctly
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

### 12. Mobile Testing
- [ ] Test on actual mobile devices
- [ ] Verify touch interactions work
- [ ] Check responsive layouts
- [ ] Test forms on mobile

### 13. Performance Testing
- [ ] Run Google PageSpeed Insights
- [ ] Check GTmetrix performance score
- [ ] Verify page load time is under 3 seconds
- [ ] Test with slow 3G connection

### 14. SEO Testing
- [ ] Verify Google can crawl the site
- [ ] Check robots.txt is accessible
- [ ] Verify sitemap (create if needed)
- [ ] Test meta tags with social media preview tools
- [ ] Submit to Google Search Console

## Security Checklist

### 15. Security Measures
- [ ] Verify `.htaccess` prevents directory browsing
- [ ] Ensure no sensitive files are accessible
- [ ] Check HTTPS is enforced
- [ ] Verify forms have CSRF protection
- [ ] Set up security headers (CSP, X-Frame-Options)

## Post-Launch

### 16. Monitoring & Maintenance
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure Google Analytics or analytics tool
- [ ] Set up error tracking (Sentry, LogRocket)
- [ ] Create backup schedule
- [ ] Document server credentials securely
- [ ] Set up domain email forwarding if needed

### 17. Marketing & Launch
- [ ] Announce launch on social media
- [ ] Notify stakeholders
- [ ] Update business listings with new URL
- [ ] Share with KZN E-Hailing community

## Emergency Rollback Plan

### 18. Backup & Rollback
- [ ] Keep backup of previous version
- [ ] Document rollback procedure
- [ ] Keep `.htaccess.bak` for quick restoration
- [ ] Note hosting support contact details

## Common Cybersmart Hosting Issues & Solutions

### Issue 1: 404 Errors on Page Refresh
**Solution**: Ensure `.htaccess` is in root directory with correct rewrite rules

### Issue 2: White Screen / Blank Page
**Solution**: Check browser console for errors, verify all assets uploaded correctly

### Issue 3: Slow Loading
**Solution**: Enable compression in `.htaccess`, optimize images, check server resources

### Issue 4: Forms Not Working
**Solution**: Verify backend API endpoints, check CORS settings, ensure HTTPS

## Support Contacts

- **Cybersmart Support**: [Your hosting support email/phone]
- **Developer**: [Your contact information]
- **Domain Registrar**: [Domain provider contact]

## Notes
- Always test in staging environment if available
- Keep local backup before making server changes
- Document any custom configurations
- Schedule deploys during low-traffic periods

---

**Last Updated**: November 2025  
**Project**: KwaZulu-Natal E-Hailing Council Website  
**Hosting Provider**: Cybersmart
