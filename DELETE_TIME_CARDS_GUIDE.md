# 🗑️ How to Delete Time Card Records

## Quick Answer

**To delete a time card record:**
1. Log in as a **Manager**
2. Click the **"Time Cards"** tab
3. Find the time card you want to delete
4. Click the **red trash icon (🗑️)** next to it
5. Confirm the deletion

---

## ✅ Step-by-Step Instructions

### Step 1: Log in as Manager
- Only **managers** can delete time card records
- Select a manager account from the user selector at the top
- Employees cannot delete time cards

### Step 2: Go to Time Cards Tab
- Click the **"Time Cards"** tab in the navigation
- You'll see a list of all employee time cards

### Step 3: Find the Time Card
You can filter to find the specific time card:
- **Filter by Employee:** Select employee from dropdown
- **Filter by Date:** Choose a specific date
- Or scroll through the list to find it

### Step 4: Delete the Time Card
```
1. Locate the time card in the table
2. In the "Actions" column, you'll see two buttons:
   - "Edit" button (for editing)
   - Red trash icon 🗑️ (for deleting)
3. Click the red trash icon (🗑️)
4. A confirmation dialog will appear
5. Click "OK" or "Delete" to confirm
6. ✅ Time card is permanently deleted!
```

---

## ⚠️ Important Warnings

### Deletion is Permanent!
- ⚠️ **Cannot be undone** - Once deleted, the time card is gone forever
- ⚠️ **No recovery** - There's no "trash bin" or way to restore it
- ⚠️ **Data loss** - All information in that time card (clock in/out, location, work description, lunch breaks) will be lost

### When to Delete vs Edit
```
✅ EDIT instead of delete when:
   - Wrong clock in/out time
   - Incorrect location
   - Missing work description
   - Wrong lunch break times
   - Any correctable mistake

🗑️ DELETE only when:
   - Duplicate time card entry
   - Test/practice entry
   - Completely wrong day/employee
   - Entry created by mistake
```

---

## 🎯 Common Scenarios

### Scenario 1: Duplicate Time Card
**Problem:** Employee clocked in twice by accident

**Solution:**
```
1. Go to "Time Cards" tab
2. Find the duplicate entry
3. Compare the two entries
4. Delete the incorrect one (usually the second one)
5. Keep the accurate entry
```

### Scenario 2: Test Entry
**Problem:** Created a test time card during setup

**Solution:**
```
1. Go to "Time Cards" tab
2. Filter by employee if needed
3. Find the test entry
4. Click trash icon 🗑️
5. Confirm deletion
```

### Scenario 3: Wrong Employee
**Problem:** Time card created for wrong employee

**Solution:**
```
Option A: Delete and recreate
1. Delete the incorrect time card
2. Add a new manual entry for correct employee

Option B: Better solution - edit the entry
(Note: Current system doesn't support changing employee,
so you must delete and recreate)
```

### Scenario 4: Wrong Date Entirely
**Problem:** Time card created for completely wrong date

**Solution:**
```
1. Delete the incorrect time card
2. Add a new manual entry with correct date
3. Use "Add Time Card" button in Time Cards tab
```

---

## 📋 What Gets Deleted

When you delete a time card, you lose:
- ❌ Clock in timestamp
- ❌ Clock out timestamp
- ❌ Location information
- ❌ Work description
- ❌ Lunch break start/end times
- ❌ Lunch duration
- ❌ Total hours worked
- ❌ All associated data

**The employee record stays** - only the specific time card is deleted.

---

## 💡 Best Practices

### Before Deleting:
1. **Double-check** - Make sure you have the right time card
2. **Consider editing** - Can you fix it instead of deleting?
3. **Take a note** - Write down the details if you need to recreate it
4. **Check with employee** - Verify it's okay to delete
5. **Export data** - If you need a record, export the report first

### After Deleting:
1. **Verify it's gone** - Check the time cards list
2. **Update reports** - Weekly reports will automatically update
3. **Notify employee** - Let them know if it affects their hours
4. **Recreate if needed** - Add manual entry with correct information

---

## 🔄 Alternative to Deletion: Editing

**Instead of deleting, consider editing:**

To edit a time card:
```
1. Go to "Time Cards" tab
2. Find the time card
3. Click "Edit" button
4. Modify any fields:
   - Clock in time
   - Clock out time
   - Location
   - Work description
   - Lunch break times
5. Click "Save Changes"
```

**Benefits of editing over deleting:**
- ✅ Preserves the time card ID
- ✅ No data loss
- ✅ Can correct mistakes
- ✅ Keeps audit trail
- ✅ No need to recreate

---

## 🆘 Troubleshooting

### "I don't see the delete button!"
**Solution:** You must be logged in as a **Manager**. Employees cannot delete time cards.

### "I deleted the wrong time card!"
**Solution:**
1. Unfortunately, there's no undo
2. You'll need to recreate it manually
3. Use "Add Time Card" button
4. Enter all the information from memory/notes
5. In the future, double-check before deleting!

### "The delete button doesn't work!"
**Solution:**
1. Make sure you're a manager
2. Try refreshing the page
3. Check your internet connection
4. Try a different browser

### "I want to delete multiple time cards at once"
**Solution:** Currently, you must delete them one at a time. There's no bulk delete feature for safety reasons.

### "Can I delete time cards for reports I already exported?"
**Solution:** Yes, but:
- The exported report won't change (it's already saved)
- Future reports won't include the deleted time card
- If you regenerate the report for that week, the deleted time card won't appear

---

## 🎨 Visual Guide

### What the Time Cards Tab Looks Like:

```
┌─────────────────────────────────────────────────────────────────┐
│ Time Cards                                  [+ Add Time Card]   │
├─────────────────────────────────────────────────────────────────┤
│ Filter by Employee: [All ▼]  Filter by Date: [____]            │
├─────────────────────────────────────────────────────────────────┤
│ Employee   Clock In      Clock Out    Hours   Status   Actions │
│ ─────────────────────────────────────────────────────────────── │
│ John Smith 1/27 8:00 AM  1/27 5:00PM  8.50   Complete  [Edit] 🗑️│
│ Maria G.   1/27 9:00 AM  —            —       Active   [Edit] 🗑️│
│                                                           ↑    ↑  │
│                                                         Edit Delete│
└─────────────────────────────────────────────────────────────────┘
```

### Delete Confirmation Dialog:

```
┌──────────────────────────────────────────┐
│  ⚠️ Confirm Deletion                     │
│                                          │
│  Are you sure you want to delete this   │
│  time card? This action cannot be       │
│  undone.                                 │
│                                          │
│         [Cancel]        [Delete] ←Click │
└──────────────────────────────────────────┘
```

---

## 📊 Deletion Impact on Reports

### Weekly Reports
- Deleted time cards are **immediately removed** from reports
- Total hours recalculated automatically
- Overtime adjusts accordingly

### Example Impact:
```
Before deletion:
Employee: John Smith
Total hours: 45 hours
Regular: 40 hours
Overtime: 5 hours

Delete a 5-hour time card ↓

After deletion:
Employee: John Smith
Total hours: 40 hours
Regular: 40 hours
Overtime: 0 hours
```

### Historical Reports
- If you already **printed** a report, the paper copy won't change
- If you already **exported CSV**, that file won't change
- If you **regenerate** the report, deleted time cards won't appear

---

## ✅ Deletion Checklist

Before deleting a time card:
- [ ] I'm logged in as a Manager
- [ ] I found the correct time card
- [ ] I verified it's the right employee
- [ ] I verified it's the right date
- [ ] I checked if I can edit instead of delete
- [ ] I noted the time card details (in case I need to recreate)
- [ ] I'm sure this time card should be removed
- [ ] I understand this cannot be undone

After deleting:
- [ ] Time card is removed from the list
- [ ] Weekly report updated (if applicable)
- [ ] Employee notified (if needed)
- [ ] Manual entry created if needed to replace it

---

## 📞 Need Help?

**For more information, see:**
- **QUICK_REFERENCE.md** - Daily operations guide
- **USER_GUIDE.md** - Complete user manual
- **EMPLOYEE_MANAGEMENT_GUIDE.md** - How to manage employees

**Common questions:**
- How to edit time cards? → See USER_GUIDE.md
- How to add manual entries? → See QUICK_REFERENCE.md
- How to manage employees? → See EMPLOYEE_MANAGEMENT_GUIDE.md

---

## 🎯 Quick Summary

**To delete a time card:**
```
Manager login → Time Cards tab → Find time card → Click 🗑️ → Confirm
```

**Remember:**
- ⚠️ Deletion is permanent
- ✅ Only managers can delete
- 💡 Consider editing instead
- 📝 Take notes before deleting
- 🔄 Check reports after deletion

---

**Version 1.0** | **Updated: January 2026** | **Production Ready ✅**
