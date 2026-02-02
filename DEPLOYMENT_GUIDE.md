# Employee Time Tracking System - Deployment & Usage Guide

## 📋 Table of Contents
1. [System Overview](#system-overview)
2. [For Companies: How to Deploy](#for-companies-how-to-deploy)
3. [For Users: How to Use the App](#for-users-how-to-use-the-app)
4. [Features Overview](#features-overview)
5. [Data Persistence](#data-persistence)
6. [Support & Troubleshooting](#support--troubleshooting)

---

## 🎯 System Overview

This is a comprehensive employee time tracking system with:
- **Real-time clock in/out tracking**
- **Lunch break management**
- **Location and work description logging**
- **Weekly reports with overtime calculations**
- **Manual time card entry and editing**
- **Print and CSV export for payroll**
- **Bilingual support (English/Spanish)**
- **User management (Managers and Employees)**

---

## 🚀 For Companies: How to Deploy

### Option 1: Deploy on Creao Platform (Recommended)

**Your app is currently hosted on the Creao platform and includes:**
- ✅ Persistent database (your data is saved automatically)
- ✅ Secure user management
- ✅ No setup required - ready to use immediately
- ✅ Automatic backups

**Access your app:**
1. Navigate to your Creao platform dashboard
2. Your app is already deployed and running
3. Share the app URL with your team
4. **Important:** Your database persists across sessions - all employee data and time cards are saved permanently

### Option 2: Self-Host (Advanced Users)

If you want to host this on your own infrastructure:

**Requirements:**
- Node.js 18+ installed
- npm or yarn package manager

**Installation Steps:**

```bash
# 1. Clone or download the project
cd /path/to/vite-template

# 2. Install dependencies
npm install

# 3. Build the application
npm run build

# 4. Deploy the 'dist' folder to your web server
# Examples:
# - Netlify: drag and drop the 'dist' folder
# - Vercel: connect your git repository
# - Traditional server: copy 'dist' to your web root
```

**Note:** When self-hosting, you'll need to configure your own database backend. The current version uses the Creao platform's database service.

---

## 👥 For Users: How to Use the App

### First Time Setup (Manager)

1. **Access the Application**
   - Open the app URL in your web browser
   - Works on desktop, tablet, and mobile devices

2. **Select Language**
   - Choose English or Spanish from the language selector in the top right

3. **Initial Login**
   - The first user created is automatically a Manager
   - Click "Select User" and choose your account
   - If no users exist, you'll need to be added by the system administrator

4. **Add Employees (Manager Only)**
   - Click on the "Employees" tab
   - Click "Add Employee" button
   - Enter employee details:
     - Name
     - Email
     - Phone number (optional)
     - Role (Manager or Employee)
   - Click "Save"

### For Employees: Daily Time Tracking

#### Clocking In
1. **Login**: Select your name from the user selector
2. **Clock In**:
   - Click the "Clock In" button on the dashboard
   - Your start time is recorded automatically
   - You'll see a live timer showing elapsed time

#### During Your Shift
3. **Update Location & Work Description**:
   - Fill in "Where did you work?" (e.g., Office, Remote, Client Site)
   - Fill in "What did you do today?" (describe your work activities)
   - These fields update automatically as you type

4. **Taking Lunch Break**:
   - Click "Start Lunch" when beginning your break
   - Click "End Lunch" when returning from break
   - Lunch time is automatically deducted from your total hours

#### Clocking Out
5. **Clock Out**:
   - Click the "Clock Out" button when ending your shift
   - Your total hours are calculated automatically
   - Lunch break time is deducted from total hours

### For Managers: Managing Time Cards

#### View All Time Cards
1. **Navigate to "Time Cards" tab**
2. **Filter options**:
   - Filter by specific employee
   - Filter by date range
   - Click "Clear Filters" to see all records

#### Edit Time Cards
1. **Find the time card** you want to edit
2. **Click the "Edit" button** (pencil icon)
3. **Modify** clock in/out times, location, or work description
4. **Save Changes**

#### Add Manual Time Cards
- If an employee forgets to clock in/out:
1. Click "Add Time Card" button
2. Select the employee
3. Enter clock in and clock out times
4. Add location and work description
5. Optionally add lunch break times
6. Click "Save"

### For Managers: Weekly Reports & Payroll

#### Generate Weekly Reports
1. **Navigate to "Reports" tab**
2. **Select Week**: Choose the Monday of the week you want to report on
3. **View Summary**: See total hours, regular hours, and overtime for each employee
   - Regular hours: First 40 hours of the week
   - Overtime: Hours beyond 40 hours/week (highlighted in orange)

#### Print Reports for Payroll
1. **Click "Print Report" button**
   - Opens print dialog
   - Shows both summary and detailed time card report
   - Formatted for easy reading
   - Includes all employee details, times, locations, and work descriptions

2. **Export to CSV**
   - Click "Export to CSV" button
   - Downloads a CSV file named `weekly-report-YYYY-MM-DD.csv`
   - Can be opened in Excel, Google Sheets, or any spreadsheet software
   - Perfect for payroll processing systems

---

## 📊 Features Overview

### Dashboard (Employee View)
- **Live clock status**: Shows if you're clocked in or out
- **Elapsed time timer**: Real-time display of hours worked
- **Quick clock in/out buttons**
- **Recent time card history**: See your last 10 time cards
- **Location and work description fields**: Update throughout the day

### Time Cards Management (Manager View)
- **View all employee time cards**
- **Filter and search capabilities**
- **Edit existing time cards**
- **Add manual entries for missed clock ins**
- **See status (Active/Completed) for each time card**

### Reports (Manager View)
- **Weekly summary** with overtime calculations
- **Detailed time card table** showing:
  - Employee name
  - Date and day of week
  - Clock in/out times
  - Location worked
  - Work description
  - Lunch duration
  - Total hours
- **Print functionality** for physical copies
- **CSV export** for digital payroll systems

### Employee Management (Manager View)
- **Add new employees**
- **Edit employee information** (name, email, phone, role)
- **Delete employees** (with confirmation)
- **View employee roster**

---

## 💾 Data Persistence

### How Your Data is Saved

**On Creao Platform:**
- All data is automatically saved to a persistent database
- Time cards, employee records, and all edits are stored permanently
- Data survives browser refreshes and app restarts
- Regular automatic backups

**What Data is Stored:**
- Employee profiles (name, email, phone, role)
- Time card entries (clock in/out, location, work description, lunch breaks)
- All timestamps and calculations
- User preferences (language selection)

**Data Security:**
- Data is tied to your specific project/company instance
- Each company has isolated data (no cross-contamination)
- Secure authentication through the Creao platform

---

## 🔧 Support & Troubleshooting

### Common Questions

**Q: I forgot to clock in. What do I do?**
A: Ask your manager to add a manual time card entry for you.

**Q: I need to correct my time. Can I edit it?**
A: Only managers can edit time cards. Contact your manager with the correct times.

**Q: How is overtime calculated?**
A: Any hours beyond 40 hours in a week (Monday-Sunday) are marked as overtime.

**Q: Can I access this from my phone?**
A: Yes! The app is fully responsive and works on mobile devices, tablets, and desktops.

**Q: What if I accidentally clock out?**
A: Contact your manager to edit your time card and add the missing clock out time.

**Q: How do I switch between English and Spanish?**
A: Click the language selector (EN/ES) in the top right corner of the app.

### Technical Support

**Browser Compatibility:**
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers supported

**Best Practices:**
- Keep your browser updated
- Use a stable internet connection
- Don't close the browser while clocked in (the timer will continue in the background)
- Review your time cards regularly for accuracy

**For Additional Help:**
- Contact your system administrator
- Refer to the in-app tooltips and labels
- All features have descriptive labels in your chosen language

---

## 📱 Mobile Usage Tips

1. **Add to Home Screen** (iOS/Android):
   - Open the app in your mobile browser
   - Use "Add to Home Screen" option
   - Access the app like a native mobile app

2. **Mobile-Optimized Features**:
   - Large touch-friendly buttons
   - Responsive tables (scroll horizontally if needed)
   - Phone number field uses mobile-optimized keyboard

3. **Best Practices**:
   - Enable notifications in your browser for reminders
   - Keep the app tab open while working for accurate timing
   - Bookmark the app URL for quick access

---

## 🎯 Quick Start Checklist

### For Companies/Managers:
- [ ] Access the application URL
- [ ] Set preferred language (EN/ES)
- [ ] Add yourself as the first manager
- [ ] Add all employees with their information
- [ ] Brief employees on how to clock in/out
- [ ] Test the system with a few sample time cards
- [ ] Review the weekly report features
- [ ] Test print and CSV export functionality

### For Employees:
- [ ] Get app URL from your manager
- [ ] Bookmark the app on your device
- [ ] Practice clocking in and out
- [ ] Understand lunch break procedures
- [ ] Know how to add location and work description
- [ ] Review your time card history regularly
- [ ] Contact manager if you need time corrections

---

**Version:** 1.0
**Last Updated:** January 2026
**Language Support:** English, Spanish
**Platform:** Web-based (Desktop, Tablet, Mobile)

For questions or issues, contact your system administrator or Creao platform support.
