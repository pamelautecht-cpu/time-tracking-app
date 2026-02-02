# Deployment Guide

Your app is ready to deploy! Follow these steps to get a public URL that will work on your phone.

## ✅ Quick Deploy to Vercel (Recommended - 5 minutes)

### Method 1: Using Vercel Website (Easiest)

1. **Create a Vercel account** (if you don't have one):
   - Go to https://vercel.com
   - Click "Sign Up"
   - Sign up with GitHub, GitLab, or email

2. **Deploy your project**:
   - Click "Add New..." → "Project"
   - If your project is on GitHub:
     - Import your repository
     - Click "Deploy"
   - If not on GitHub:
     - Download this entire folder as a ZIP
     - Drag and drop the ZIP onto vercel.com
     - Click "Deploy"

3. **Wait 1-2 minutes** for deployment to complete

4. **Get your public URL**:
   - You'll get a URL like: `https://your-app-name.vercel.app`
   - This URL works on ANY device (phone, tablet, computer)!

### Method 2: Using Command Line

1. **Login to Vercel**:
   ```bash
   vercel login
   ```
   - Enter your email
   - Check your email and click the verification link

2. **Deploy**:
   ```bash
   vercel --prod
   ```

3. **Get your public URL** - it will be shown at the end!

---

## 🎯 After Deployment

Once you have your public URL (e.g., `https://your-app-name.vercel.app`):

1. **Open the app on your computer** using the Vercel URL
2. **Go to Manager view** → Add your employee info
3. **Click "Copy My Link"** button in the employee view
4. **Send the link to your phone** (email, text, etc.)
5. **Open the link on your phone** - it will auto-login directly to your time clock!

---

## 📱 Installing as Phone App

After deployment, you can install it as a real app:

### On iPhone:
1. Open the Vercel URL in Safari
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"
5. The app icon will appear on your home screen!

### On Android:
1. Open the Vercel URL in Chrome
2. Tap the three dots menu
3. Tap "Add to Home screen"
4. Tap "Add"
5. The app icon will appear on your home screen!

---

## ⚡ Alternative: Quick Local Network Test

If you want to test RIGHT NOW without deploying:

1. **On your computer**, run:
   ```bash
   npm run dev
   ```

2. **Find your computer's IP address**:
   - **Windows**: Open Command Prompt, type `ipconfig`, look for "IPv4 Address"
   - **Mac**: Open Terminal, type `ifconfig | grep "inet "`, look for one like `192.168.x.x`
   - **Linux**: Open Terminal, type `hostname -I`

3. **Make sure your phone is on the same WiFi as your computer**

4. **On your phone**, open browser and go to:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```
   Example: `http://192.168.1.100:3000`

⚠️ **Note**: This local method only works while your computer is running the app and you're on the same WiFi. For a permanent solution, use Vercel deployment above.

---

## 🆘 Troubleshooting

**404 Error on Phone?**
- Make sure you're using the Vercel URL (https://...), not localhost
- The local network test requires same WiFi network

**Link says "Expired Login"?**
- Make sure your employee info (name, phone, email) is saved in Manager view
- Click "Copy My Link" from the employee view after logging in

**App won't install on phone?**
- Make sure you're using Safari on iPhone or Chrome on Android
- The app must be deployed to a public URL (not localhost)

---

Need help? The app is fully built and ready to deploy! 🚀
