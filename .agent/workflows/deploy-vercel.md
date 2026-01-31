---
description: How to deploy the application to Vercel
---

# Deploying to Vercel

Follow these steps to deploy your Prime Insurance Services website to Vercel.

1. **Verify Build Stability**
   // turbo
   Run `npm run build` to ensure the project is ready for production.

2. **Login to Vercel**
   If you aren't logged in, run:
   ```bash
   vercel login
   ```
   Follow the prompts in your browser.

3. **Initialize and Deploy Preview**
   Run the following command to link your project and create a preview deployment:
   ```bash
   vercel
   ```
   - *Set up and deploy?* Yes
   - *Which scope?* (Select your team/user)
   - *Link to existing project?* No
   - *What's your project's name?* prime-insurance-services
   - *In which directory?* ./

4. **Production Deployment**
   Once you're happy with the preview, push it to production:
   ```bash
   vercel --prod
   ```

Your site will be live at a `.vercel.app` domain!
