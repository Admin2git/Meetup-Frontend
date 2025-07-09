# Meetup App

The **Meetup App** is a full-stack application built with **React.js** for the frontend, consuming an **Express.js API backend** with **MongoDB** for event and speaker management. The app allows users to list, search, filter, and view detailed information about various events.

## Features

### 1. Event Listings
- A page that displays all events with the following key details:
  - **Event title**
  - **Event date**
  - **Type of event** (Online/Offline)
  - **Thumbnail** or image related to the event
- **Consistent layout** and design for a cohesive user experience.

### 2. Event Search and Filtering
- **Dropdown**: Filter events by type (Online/Offline/Both).
  - Default is to show both event types.
- **Search box**: Search events by title and tags.

### 3. Event Details and Descriptions
- Individual event pages that show comprehensive information:
  - Event **description**
  - **Session timings** and **speakers/presenters**
  - Event **pricing** (if it's a paid event)
  - **Venue** and **address**
  - Additional information such as **dress code**, **age restrictions**, etc.
  - **Tags** for categorization.

## Prerequisites

Ensure the following are installed on your local machine:

- **Node.js** (v14 or higher)
- **MongoDB** (local setup or using MongoDB Atlas)
- **React.js** (for the frontend)
- **Express.js** (for the backend)

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Bootstrap**: For responsive and modern UI components.
- **React Router**: For navigation and routing between pages.
- **Axios**: For making HTTP requests to the backend.
- **Node.js** (with backend integration): To handle server-side logic and data persistence.

## Preview Link

[live app](https://meetup-frontend-two.vercel.app/)


## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Admin2git/Meetup-Frontend.git
cd Meetup-Frontend
cd install
```

### 2.Start the frontend

```
# In the client directory
npm start or npm run dev
```
