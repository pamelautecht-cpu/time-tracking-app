#!/bin/bash

echo "=========================================="
echo "  AUTOMATIC DEPLOYMENT TO VERCEL"
echo "=========================================="
echo ""
echo "I'll help you deploy your app step by step!"
echo ""

# Change to project directory
cd /home/user/vite-template

echo "Step 1: Logging in to Vercel..."
echo "-------------------------------"
echo ""
echo "You'll need to enter your email address."
echo "Then check your email for a verification link."
echo ""
read -p "Press Enter to continue..."

# Login to Vercel
vercel login

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Login failed or was cancelled."
    echo ""
    echo "To try again, run: ./auto-deploy.sh"
    exit 1
fi

echo ""
echo "✅ Login successful!"
echo ""
echo "Step 2: Deploying your app..."
echo "-------------------------------"
echo ""
echo "This will take 1-2 minutes. Please wait..."
echo ""

# Deploy to production
vercel --prod

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Deployment failed."
    echo ""
    echo "Common fixes:"
    echo "1. Make sure you're logged in: vercel login"
    echo "2. Check your internet connection"
    echo "3. Try again: ./auto-deploy.sh"
    exit 1
fi

echo ""
echo "=========================================="
echo "  ✅ SUCCESS! YOUR APP IS DEPLOYED!"
echo "=========================================="
echo ""
echo "Your app is now live on the internet!"
echo ""
echo "NEXT STEPS:"
echo ""
echo "1. Look at the URL shown above (starts with https://)"
echo "2. Copy that URL"
echo "3. Open it on your phone's browser"
echo "4. NO MORE 404 ERRORS! ✅"
echo ""
echo "5. To install as phone app:"
echo "   - iPhone: Safari → Share → Add to Home Screen"
echo "   - Android: Chrome → Menu → Add to Home screen"
echo ""
echo "6. To get your employee link:"
echo "   - Open the URL → Manager → Add employee"
echo "   - Switch to Employee → Click 'Copy My Link'"
echo "   - Send to your phone → Auto-login!"
echo ""
echo "🎉 Congratulations! You did it!"
echo ""
