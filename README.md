# Employee Time Tracking App

A mobile-friendly time tracking application for employees to clock in/out and managers to track hours and calculate pay.

## 🚀 Your App is Built and Ready!

✅ **Production files are in the `dist/` folder - ready to deploy!**

## 📱 Deploy NOW - Get Your Phone App Working (No More 404!)

### **⚡ Easiest Way: Vercel (5 minutes)**

1. Go to **https://vercel.com** and sign up (free)
2. Click **"Add New..." → "Project"**
3. **Drag and drop this entire folder** onto the Vercel website
4. Click **"Deploy"**
5. **Done!** You'll get a URL like `https://time-track.vercel.app`

**That URL will work on your phone with NO 404 errors!**

👉 **See [DEPLOY.md](./DEPLOY.md) for detailed step-by-step instructions**

---

## 🎯 Current Features

- ✅ Real-time time tracking
- ✅ Manager and employee dashboards
- ✅ Weekly reports with pay calculations
- ✅ Print and CSV export for payroll
- ✅ Bilingual support (English/Spanish)
- ✅ Mobile-responsive design
- ✅ PWA support (installable as phone app)

## 📚 Documentation

### For Companies & Managers
📖 **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Complete deployment and setup instructions
- How to deploy the app
- Initial setup for companies
- System overview and architecture
- Data persistence information

### For All Users
📱 **[USER_GUIDE.md](./USER_GUIDE.md)** - Comprehensive user instructions
- Step-by-step guides for employees and managers
- How to clock in/out
- Managing time cards
- Generating payroll reports
- Troubleshooting common issues

## 🚀 Quick Start

### Accessing Your App

1. **Open the app URL** (provided by your Creao platform dashboard)
2. **Select language** (EN/ES) in the top right corner
3. **Choose your user account** from the selector
4. **Start tracking time!**

### First-Time Setup (Managers)

```
1. Access the application
2. Add yourself as a manager (Employees tab → Add Employee)
3. Add all employees with their details
4. Brief employees on how to use the system
5. Start tracking time!
```

### Daily Use (Employees)

```
1. Select your account
2. Click "Clock In" to start your shift
3. Add location and work description
4. Use lunch break buttons as needed
5. Click "Clock Out" when done
```

## ✨ Key Features

### For Employees
- ⏰ **Real-time Clock In/Out** - Automatic time tracking with live timer
- 🍽️ **Lunch Break Tracking** - Automatically deducted from total hours
- 📍 **Location Logging** - Record where you worked each day
- 📝 **Work Descriptions** - Document daily activities
- 📊 **Time Card History** - View your recent time entries
- 🌐 **Bilingual** - Full English and Spanish support

### For Managers
- 👥 **Employee Management** - Add, edit, delete employees
- 📋 **All Time Cards View** - See everyone's time entries
- ✏️ **Edit Time Cards** - Fix mistakes or add missing entries
- ➕ **Manual Entry** - Add time cards for employees who forgot to clock in
- 📊 **Weekly Reports** - Summary with overtime calculations
- 🖨️ **Print Reports** - Professional formatted reports for payroll
- 📄 **CSV Export** - Export data for payroll systems
- 📈 **Detailed Reports** - See every time card with location and work description

## 🛠️ Technical Stack

- **Frontend**: React 19 with TypeScript
- **Routing**: TanStack Router
- **UI Components**: shadcn/ui (Tailwind CSS v4)
- **Database**: Creao Platform Persistent Database
- **State Management**: React Hooks + TanStack Query
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 Project Structure

```
/home/user/vite-template/
├── src/
│   ├── routes/
│   │   ├── index.tsx              # Main application (all features)
│   │   └── __root.tsx             # Root layout
│   ├── sdk/
│   │   └── database/
│   │       └── orm/
│   │           ├── orm_user.ts    # User/Employee data model
│   │           └── orm_time_card_entry.ts  # Time card data model
│   ├── components/               # UI components (shadcn/ui)
│   ├── styles.css                # Global styles + print styles
│   └── main.tsx                  # App entry point
├── index.html                    # HTML template
├── DEPLOYMENT_GUIDE.md          # Deployment & setup guide
├── USER_GUIDE.md                # User instructions
└── README.md                    # This file
```

## 📊 Data Models

### User Model
```typescript
{
  id: string
  name: string
  email: string
  phone?: string | null
  role: "Manager" | "Employee"
  create_time: string
  update_time: string
}
```

### Time Card Entry Model
```typescript
{
  id: string
  user_id: string
  clock_in_timestamp: string
  clock_out_timestamp?: string | null
  location?: string | null
  work_description?: string | null
  lunch_start_timestamp?: string | null
  lunch_end_timestamp?: string | null
  lunch_duration_minutes?: number | null
  total_hours?: number | null
}
```

## 🔒 Data Persistence

**All data is automatically saved** to the Creao platform's persistent database:
- Employee records
- Time card entries
- All edits and updates
- Historical data

**Data survives:**
- Browser refreshes
- App restarts
- Session changes
- System updates

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Support

Fully responsive design works on:
- 📱 Smartphones (iOS, Android)
- 📱 Tablets (iPad, Android tablets)
- 💻 Desktop computers
- 🖥️ Large displays

**Add to Home Screen** supported on iOS and Android for app-like experience.

## 🌍 Language Support

Complete translations for:
- 🇺🇸 English (en)
- 🇪🇸 Spanish (es)

Switch anytime using the language selector in the top right corner.

## 📈 Reports & Exports

### Weekly Summary Report
- Employee totals for the week (Monday-Sunday)
- Regular hours (first 40 hours)
- Overtime hours (beyond 40 hours)
- Overtime alerts

### Detailed Time Card Report
- Every time card entry for the week
- Employee name, date, day of week
- Clock in/out times
- Location and work description
- Lunch duration
- Hours worked

### Export Options
1. **Print** - Clean, formatted report for physical copies
2. **CSV Export** - Spreadsheet-compatible file for payroll systems

## 🔧 Development

### Available Scripts

```bash
# Type checking and validation (safe for E2B environment)
npm run check:safe

# Build for production
npm run build

# Development server (local only - NOT for E2B)
npm run dev
```

### Important Notes
- **Always use `npm run check:safe`** for validation in E2B environment
- **Never run `npm run dev`** in E2B containers (will fail)
- All development is done in `src/routes/index.tsx`
- Database changes use the `database-administrator` subagent

## 💼 Use Cases

This system is perfect for:
- Small to medium businesses
- Construction companies
- Retail stores
- Service companies
- Remote teams
- Hourly employees
- Companies needing bilingual support
- Businesses with mobile workers

## 🎯 How Companies Can Use This

1. **Access the App**: Open the provided URL
2. **Set Up Users**: Add managers and employees
3. **Daily Tracking**: Employees clock in/out each day
4. **Weekly Payroll**: Managers generate reports for payroll processing
5. **Export Data**: Print or export CSV for payroll systems
6. **Track Productivity**: Review locations and work descriptions

## 📞 Support

### For Users
- See **[USER_GUIDE.md](./USER_GUIDE.md)** for detailed instructions
- Contact your manager for time card issues
- Contact system administrator for technical issues

### For Companies
- See **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** for deployment options
- Refer to technical documentation in this README
- Contact Creao platform support for hosting issues

## ✅ Features Checklist

- [x] Real-time clock in/out tracking
- [x] Automatic elapsed time calculation
- [x] Lunch break tracking with automatic deduction
- [x] Location logging
- [x] Work description logging
- [x] Employee and manager roles
- [x] User management (add/edit/delete employees)
- [x] View all time cards (manager)
- [x] Edit time cards (manager)
- [x] Manual time card entry (manager)
- [x] Filter time cards by employee and date
- [x] Weekly reports with summary
- [x] Overtime calculation (40+ hours)
- [x] Detailed time card reports
- [x] Print functionality
- [x] CSV export
- [x] Bilingual (English/Spanish)
- [x] Mobile responsive
- [x] Persistent database
- [x] Phone number field for employees

## 📝 License

This application is built on the Creao platform and uses various open-source libraries.

## 🙏 Credits

Built with:
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- TanStack Router
- TanStack Query
- Lucide Icons
- Creao Platform

---

**Version:** 1.0.0
**Last Updated:** January 2026
**Status:** ✅ Production Ready
**Platform:** Creao (Web-based)

For detailed instructions, see:
- 📖 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Deployment & setup
- 📱 [USER_GUIDE.md](./USER_GUIDE.md) - User instructions
