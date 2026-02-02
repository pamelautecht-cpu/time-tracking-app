#!/bin/bash

echo "========================================="
echo "  DEPLOY TO VERCEL - AUTOMATED SCRIPT"
echo "========================================="
echo ""
echo "This script will help you deploy your app to Vercel."
echo ""
echo "You'll need to:"
echo "1. Have a Vercel account (or create one)"
echo "2. Verify your email when prompted"
echo ""
echo "Ready? Let's go!"
echo ""
echo "========================================="
echo ""

# Make sure we're in the right directory
cd /home/user/vite-template

# Step 1: Login
echo "STEP 1: Login to Vercel"
echo "------------------------"
echo "Enter your email when prompted."
echo "Then check your email and click the verification link."
echo ""

vercel login

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Login failed. Please try again."
    echo ""
    echo "Manual steps:"
    echo "1. Run: vercel login"
    echo "2. Enter your email"
    echo "3. Check your email for verification link"
    echo "4. Click the link"
    echo "5. Run this script again"
    exit 1
fi

echo ""
echo "✅ Login successful!"
echo ""

# Step 2: Deploy
echo "STEP 2: Deploy your app"
echo "------------------------"
echo "Deploying to production..."
echo ""

vercel --prod --yes

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Deployment failed."
    echo ""
    echo "Try manual deployment:"
    echo "1. Run: vercel --prod"
    echo "2. Follow the prompts"
    exit 1
fi

echo ""
echo "========================================="
echo "  ✅ DEPLOYMENT SUCCESSFUL!"
echo "========================================="
echo ""
echo "Your app is now live on the internet!"
echo ""
echo "Next steps:"
echo "1. Copy your Vercel URL (shown above)"
echo "2. Open it on your phone"
echo "3. Install as app (Safari: Share → Add to Home Screen)"
echo "4. Get your employee link and send to your phone"
echo ""
echo "🎉 Congratulations! No more 404 errors!"
echo ""
