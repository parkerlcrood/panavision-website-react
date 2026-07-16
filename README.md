# Panavision Website Frontend

Frontend application for **Panavision.band**, built with **React** and **Vite**. This application provides the user-facing website experience and communicates with an Express/PostgreSQL backend API for dynamic content.

> **Backend Repository:** *https://github.com/parkerlcrood/panavision-website-express/*

---

## Overview

The Panavision website was rebuilt as a full-stack application to replace hardcoded content with a dynamic system powered by an API.

The frontend handles:

* User-facing pages
* Dynamic rendering of website content
* Merch browsing
* Favorites and cart functionality
* Admin dashboard interface
* Authentication flows
* Responsive design

---

## Features

### Website Pages

* Home page
* Music page
* Videos page
* Shows page
* Merch store
* Merch detail pages
* About page
* Contact page

---

## Dynamic Content

Content is loaded from the backend API rather than being hardcoded.

Currently dynamic:

* Merchandise
* Music releases
* Videos
* Shows

This allows content to be updated through the admin panel without modifying frontend code.

---

## Merch Features

* Product listing
* Product detail pages
* Search functionality
* Price sorting
* Favorites system
* Shopping cart
* Responsive product displays

Favorites and cart data are currently stored locally using browser localStorage.

---

## Authentication

The frontend integrates with the backend authentication system.

Features:

* Admin login
* JWT access token handling
* Refresh token support
* Protected admin routes
* Admin-only content management

Authentication is handled through the backend rather than trusting frontend state.

---

## Admin Dashboard

Authenticated administrators can manage website content.

Current functionality:

* Add/edit/delete merch
* Add/edit/delete music
* Add/edit/delete videos
* Add/edit/delete shows
* Manage dynamic website content

The admin dashboard allows the band to update the website without requiring code changes.

---

## Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS
* React Router
* Fetch API

### Backend Integration

* Express API
* PostgreSQL database
* JWT authentication

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: Neon PostgreSQL

---

## Project Structure

```text
src/
├── components/
│   ├── Navbar
│   ├── Footer
│   ├── Product cards
│   └── Reusable UI components
│
├── pages/
│   ├── Home
│   ├── Merch
│   ├── Music
│   ├── Videos
│   ├── Shows
│   ├── About
│   ├── Contact
│   └── Admin
│
├── services/
│   └── API requests
│
├── css/
│   └── Styling
│
└── main.jsx
```

---

## Environment Variables

Create a `.env` file:

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

The application uses this variable to communicate with the deployed backend.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/panavision-website.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run locally at:

```text
http://localhost:5173
```

---

## Production Build

To create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Deployment

The frontend is deployed using Vercel.

Build settings:

```
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

Environment variables are configured through the Vercel dashboard.

---

## Future Improvements

* Full checkout/payment integration
* Order management
* Improved cart persistence
* Image optimization
* Automated testing
* More advanced admin controls
* Accessibility improvements

---

## License

This project was created as a portfolio project, spawning for my band's need for an official website.
