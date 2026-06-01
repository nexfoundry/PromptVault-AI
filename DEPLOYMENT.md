# Deployment Guide for PromptVault AI

## Prerequisites

- Supabase account with database set up
- Vercel account (or other hosting provider)
- GitHub account with the repository

## Deploy to Vercel

### Step 1: Prepare Your Repository

Ensure your code is pushed to GitHub:
```bash
git add .
git commit -m "Initial commit for production deployment"
git push origin main
```

### Step 2: Import Project to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select the repository and click "Import"

### Step 3: Configure Environment Variables

In Vercel dashboard:
1. Go to Settings → Environment Variables
2. Add the following variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_APP_URL` (your production domain)

### Step 4: Deploy

1. Click "Deploy"
2. Wait for the build to complete
3. Your site will be live at `https://your-project.vercel.app`

## Custom Domain Setup

### Add Custom Domain to Vercel

1. In Vercel dashboard, go to Domains
2. Click "Add Domain"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Vercel will automatically provide SSL certificate

### Update Supabase Redirect URLs

1. Go to Supabase dashboard
2. Settings → Authentication → URL Configuration
3. Add your production URL to allowed redirect URLs:
   - `https://yourdomain.com/auth/callback`

## Database Backups

### Enable Backups in Supabase

1. Go to Supabase dashboard
2. Settings → Database → Backups
3. Enable automatic daily backups
4. Download backups regularly for additional safety

## Monitoring

### Vercel Analytics

- Monitor performance metrics in Vercel dashboard
- Enable Web Analytics for real user monitoring
- Check error logs in Functions tab

### Supabase Monitoring

- Monitor database performance in Supabase dashboard
- Set up alerts for unusual activity
- Review audit logs regularly

## Security Checklist

- [ ] Environment variables are not committed to GitHub
- [ ] API keys are rotated regularly
- [ ] Database backups are enabled
- [ ] Row-level security (RLS) is enabled in Supabase
- [ ] HTTPS is enabled (automatic with Vercel)
- [ ] Content Security Policy is configured
- [ ] Rate limiting is implemented for APIs
- [ ] Input validation is in place

## Performance Optimization

### Enable Vercel Edge Caching

Add caching headers to `next.config.ts`:
```typescript
headers: async () => [
  {
    source: '/:path*',
    headers: [
      {
        key: 'Cache-Control',
        value: 'public, max-age=3600, stale-while-revalidate=86400',
      },
    ],
  },
],
```

### Database Query Optimization

- Add indexes to frequently queried columns
- Use pagination for large result sets
- Implement query caching where appropriate

### Image Optimization

- Use Next.js Image component for optimization
- Serve images from CDN
- Use WebP format with fallbacks

## Troubleshooting

### Build Fails

1. Check build logs in Vercel
2. Ensure all environment variables are set
3. Verify TypeScript compilation
4. Check for missing dependencies

### Database Connection Issues

1. Verify Supabase URL and keys
2. Check network connectivity
3. Ensure IP whitelist is configured
4. Review Supabase error logs

### Performance Issues

1. Check Vercel analytics
2. Review database query performance
3. Enable Vercel Edge Caching
4. Optimize images and assets

## Scaling Considerations

- Monitor database connections
- Implement caching for frequently accessed data
- Use Supabase Row-Level Security for data isolation
- Consider implementing a CDN for static assets
- Monitor API rate limits and adjust if needed

## Maintenance

### Regular Tasks

- [ ] Review and rotate security keys monthly
- [ ] Check database backups weekly
- [ ] Monitor error logs daily
- [ ] Update dependencies monthly
- [ ] Review analytics and performance metrics

### Updates

To deploy updates:
1. Make changes locally
2. Test thoroughly
3. Push to GitHub
4. Vercel automatically deploys (if auto-deploy enabled)

## Rollback

If deployment issues occur:
1. Go to Vercel dashboard → Deployments
2. Click "..." on previous successful deployment
3. Click "Promote to Production"

## Need Help?

- Vercel Documentation: [https://vercel.com/docs](https://vercel.com/docs)
- Supabase Documentation: [https://supabase.com/docs](https://supabase.com/docs)
- Next.js Documentation: [https://nextjs.org/docs](https://nextjs.org/docs)
