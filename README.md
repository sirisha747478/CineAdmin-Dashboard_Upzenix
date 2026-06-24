# CineAdmin Dashboard

## Overview

CineAdmin Dashboard is a React-based Admin Dashboard for a Movie Booking System. The application provides administrators with tools to monitor ticket sales, manage movies, track revenue, schedule events, analyze reports, and organize workflow through a Kanban board.

The project demonstrates React Routing, Context API, state management, responsive dashboard design, drag-and-drop functionality, data visualization, and calendar integration.

---

## Assignment

### Routing & Context API

Build a React Admin Dashboard for a Movie Booking System with:

* Dashboard Statistics Cards
* Calendar Integration
* Kanban Board
* Analytics Charts
* Dynamic Data Tables
* CRUD Operations
* Filters & Pagination
* Dark/Light Theme
* Sidebar Navigation
* Topbar Controls
* Responsive User Interface

---

## Features

### Dashboard Overview

Displays key business metrics:

* Total Users
* Tickets Sold
* Revenue
* Growth Percentage

Interactive analytics charts provide insights into booking trends and revenue performance.

---

### Movie Management

Manage movie records through:

* Search Functionality
* Status Filters
* Pagination
* Delete Operations
* CSV Export

Movie details include:

* Title
* Genre
* Tickets Sold
* Status
* Rating

---

### Calendar Management

Built using:

* react-big-calendar
* moment.js

Features:

* Movie Show Schedules
* Premiere Events
* Maintenance Events
* Monthly, Weekly, and Daily Views

---

### Kanban Board

Built using drag-and-drop functionality.

Workflow stages:

* To Do
* In Progress
* Review
* Completed

Users can drag tasks between columns and reorder tasks dynamically.

---

### Reports & Analytics

Provides:

* Revenue Analytics
* Ticket Sales Statistics
* Performance Reports
* Interactive Charts

Built using Recharts.

---

### Theme Management

Implemented using React Context API.

Features:

* Light Theme
* Dark Theme
* Theme Persistence using localStorage

---

### Navigation

Sidebar navigation includes:

* Dashboard
* Movies
* Reports
* Calendar
* Kanban

Topbar includes:

* Theme Toggle
* Notifications
* User Actions

---

## Technologies Used

### Frontend

* React
* TypeScript
* Tailwind CSS
* React Router DOM

### UI & Icons

* Lucide React

### Charts

* Recharts

### Calendar

* react-big-calendar
* moment

### Drag & Drop

* @hello-pangea/dnd

### State & Context

* React Hooks
* Context API

---

## Project Structure

```text
src/
│
├── components/
│   ├── Layout.tsx
│   ├── Sidebar.tsx
│   └── Topbar.tsx
│
├── context/
│   └── ThemeContext.tsx
│
├── pages/
│   ├── Dashboard.tsx
│   ├── MoviesTable.tsx
│   ├── ReportsView.tsx
│   ├── CalendarView.tsx
│   └── KanbanView.tsx
│
├── data/
│   └── mockData.ts
│
├── App.tsx
└── main.tsx
```

---

## React Concepts Demonstrated

### React Router

Routes implemented:

* /
* /movies
* /reports
* /calendar
* /kanban

### Context API

Theme management uses React Context API.

Features:

* Global Theme State
* Theme Switching
* localStorage Persistence

### State Management

React Hooks used:

* useState
* useEffect
* useContext

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project

```bash
cd cineadmin-dashboard
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Open Browser

```text
http://localhost:3000
```

---

## Screenshots

Include screenshots of:

1. Dashboard Overview
2. Movie Management Table
3. Reports & Analytics
4. Calendar View
5. Kanban Board
6. Dark Theme
7. Mobile Responsive Layout

---

## Future Enhancements

* Full Create/Edit Movie CRUD
* Authentication & Authorization
* Real Backend API Integration
* Role-Based Access Control
* Real-Time Notifications
* Ticket Booking Analytics

---

## Conclusion

CineAdmin Dashboard successfully demonstrates React Routing and Context API concepts through a real-world Movie Booking Administration System. The application integrates dashboards, charts, scheduling, drag-and-drop workflow management, theme switching, and responsive design into a modern admin experience.

---


