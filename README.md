# Jiva Health - User Management Dashboard

This project is a modern, responsive single-page application (SPA) built to fulfill the Jiva Health User Management Dashboard requirements. 

## 🎯 Project Requirements & Tech Stack
The goal was to construct a pixel-perfect, interactive healthcare dashboard utilizing modern web technologies while strictly adhering to a detailed specification (fonts, specific hex codes, padding, and layout bounds). 

**Tech Stack Used:**
- **React 18 + Vite**: For a lightning-fast development environment and optimized production builds.
- **TypeScript**: Enforcing strict typing across `Users`, `FamilyMembers`, and component props to guarantee runtime safety.
- **Zustand**: A lightweight, fast global state manager.
- **React Router v6**: For seamless client-side routing.
- **Lucide React**: For scalable, clean SVG iconography.
- **Vanilla CSS**: Used via `index.css` leveraging CSS Variables for a custom design system without the bloat of external frameworks.

## 📱 The Interface & Screens
The dashboard encapsulates several dynamic views and interactive layers:

1. **User List Screen (`/users`)**
   The primary entry point. It features a header row, four dynamic statistic cards (calculating totals based on state), a search and filtering row, and complex User Cards displaying avatars, multiple role/status badges, contact info, and quick-action buttons.

2. **User Detail Screen (`/users/:id`)**
   Navigating to a specific user opens their dedicated profile. This view boasts a robust header with a large Avatar, dynamic upgrade actions, and custom tabs. The default **Overview** tab elegantly displays Personal Information and Addresses in well-spaced cards.

3. **Add New User Modal**
   Triggered from the User List page, this is a beautifully overlaid modal (`rgba(0,0,0,0.4)` backdrop) featuring a comprehensive two-column form for registering a new user (Full Name, Date of Birth, Gender, Blood Group, Address, etc.).

4. **Active/Inactive Status Selector**
   A specialized contextual dropdown built into the User Detail header. Clicking the user's current status opens a crisp menu allowing the admin to toggle between "Active" and "Inactive". 

5. **Sidebar & Layout Wrapper**
   The overarching Dashboard Layout provides the persistent `257px` left Sidebar containing navigation links, and a `64px` Top Header containing global search and notifications.

## 🧭 Why the Navigation Works Seamlessly
The application utilizes **React Router v6** wrapped around the global `DashboardLayout`. 
Because it is a Single Page Application (SPA), navigating from the User List to a specific User Detail profile (`/users/1`) does not require the browser to fetch a new HTML page. Instead, React Router simply unmounts the List component and mounts the Detail component in a fraction of a second. The Sidebar and Top Header remain perfectly persistent throughout this transition.

## ⚡ How the Active/Inactive Feature Works (State Management)
If you change a user's status to **Inactive** using the new dropdown in the User Detail page, and then click "Back to User Management", you will see their badge on the User List has instantly turned grey and says "Inactive". 

**How does this work?**
This instantaneous synchronization is handled by **Zustand**. We created a global store (`useAppStore.ts`) that holds the master array of all mock users. 
When you click "Inactive" in the dropdown, it fires the `updateUserStatus(userId, 'Inactive')` action. Zustand instantly updates the master array in memory. Because both the `UserList` and `UserDetail` components are "subscribed" to this global store, React automatically forces them to re-render with the new status, providing a completely reactive, bug-free user experience!
