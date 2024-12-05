# Technical Assessment: Full Stack Web Development

This technical assessment demonstrates the development of a full-stack web application showcasing proficiency in **React.js**, **Next.js**, **Node.js**, and **PostgreSQL**, along with essential concepts like API integration, middleware, database interaction, and authentication.

The application includes a **frontend**, **backend**, and **database** layer, with features designed to meet the specified requirements. Below is a detailed breakdown of the tasks, approach, and challenges addressed during the assessment.

---

## Objectives

1. Create a **React.js** component for dynamic interactions.
2. Implement **Next.js** routing with multiple pages.
3. Integrate a mock API using **JSON Server**.
4. Set up a **Node.js** server with routing and middleware.
5. Connect the backend to a **PostgreSQL** database and implement CRUD operations.
6. Design a relational **database schema** for a blogging platform.
7. Write **SQL queries** to retrieve and manipulate data.
8. Implement **user authentication** using Passport.js.

---

## Task Breakdown and Approach

### **Frontend (React.js and Next.js)**

#### 1. React.js Basics: To-Do List
- **Objective**: Create a React component to manage a to-do list.
- **Approach**: 
  - Used React functional components with hooks (`useState`) to manage the list's dynamic state.
  - Implemented features to add, display, and update items interactively.
- **Code Summary**:
  - A simple React app displays a list and dynamically updates as users add items.

#### 2. Next.js Routing
- **Objective**: Implement routing between two pages in a Next.js app.
- **Approach**:
  - Created a `pages/` directory with two components: a home page and a secondary page for additional functionality.
  - Used the `Link` component for client-side navigation to ensure efficiency.
- **Outcome**:
  - Seamless navigation between pages showcasing routing capabilities.

#### 3. API Integration
- **Objective**: Fetch data from a mock API (JSON Server) and display it in a Next.js page.
- **Approach**:
  - Set up a JSON Server to simulate a backend API serving weather data.
  - Fetched data using `fetch()` in a `useEffect` hook and displayed it in a responsive layout.
- **Challenge**: Familiarizing with JSON Server in a Next.js context but successfully integrated and debugged.

---

### **Backend (Node.js)**

#### 4. Node.js Server
- **Objective**: Create a basic server with Express.js.
- **Approach**:
  - Configured a `server.js` file with routes to handle requests.
  - Implemented a test route returning a simple JSON response (`/api/test`).
- **Outcome**:
  - A functional API server running on `localhost`.

#### 5. Middleware
- **Objective**: Implement request logging middleware.
- **Approach**:
  - Created middleware to log incoming requests, including the HTTP method, URL, and timestamp.
  - Integrated middleware globally for all routes.
- **Outcome**:
  - Logs enhanced debugging and monitoring capabilities.

#### 6. Database Interaction
- **Objective**: Connect to PostgreSQL and implement CRUD operations.
- **Approach**:
  - Used the `pg` library to connect to PostgreSQL.
  - Designed endpoints for creating, reading, updating, and deleting users, posts, and comments.
  - Validated input data using JSON Schema.
- **Outcome**:
  - Complete CRUD functionality integrated with a relational database.

---

### **Database (PostgreSQL)**

#### 7. Database Schema
- **Objective**: Design a schema for a blogging platform.
- **Approach**:
  - Created tables for `users`, `posts`, and `comments`, ensuring proper relationships between entities.
  - Included constraints like foreign keys to enforce data integrity.
- **Outcome**:
  - A well-structured relational database.

#### 8. SQL Queries
- **Objective**: Write SQL queries to retrieve and count data.
- **Approach**:
  - Wrote queries to fetch posts by a specific user and count comments on posts.
  - Tested queries directly in PostgreSQL and integrated them into backend logic.
- **Outcome**:
  - Demonstrated SQL proficiency and database interaction.

---

### **Additional Challenge: Authentication**

#### 9. Authentication
- **Objective**: Secure the API with user authentication.
- **Approach**:
  - Used `Passport.js` for authentication.
  - Protected sensitive API routes to ensure only authenticated users could access them.
  - Stored user credentials securely with password hashing.
- **Outcome**:
  - Authenticated API with secure user access.

---

## Challenges and Solutions

1. **Familiarizing with JSON Server**:
   - Initially challenging but overcame by thoroughly reviewing documentation.
   - Successfully simulated API behavior for the frontend.

2. **Database Integration**:
   - Debugging foreign key constraints required careful attention to table relationships.
   - Successfully resolved issues by adjusting schema order and constraints.

3. **Authentication**:
   - Balancing security and functionality was crucial.
   - Implemented hashed passwords and token-based authentication for best practices.

---

## See how to run each project by clicking their respective folders README

