# Node.js Bookstore API

This project is a **Node.js bookstore API** built with **Express.js** for managing books in a PostgreSQL database. The application demonstrates foundational backend principles, including **server setup**, **middleware usage**, and **database interaction** with complete **CRUD operations** for book management.

---

## Features

1. **Node.js Server**:
   - A basic server setup using Express.js.
   - Routes for handling books with RESTful API endpoints.

2. **Middleware**:
   - A custom middleware function to log incoming requests for debugging and monitoring.

3. **Database Interaction**:
   - Integration with PostgreSQL for storing book data.
   - A `books` table with fields for ISBN, title, author, language, and more.
   - Fully implemented CRUD operations:
     - **Create**: Add new books.
     - **Read**: Retrieve all books or specific books by ISBN.
     - **Update**: Modify book details.
     - **Delete**: Remove books from the database.

---

## Technologies Used

- **Node.js**: Runtime environment for executing JavaScript on the server.
- **Express.js**: Framework for building the RESTful API.
- **PostgreSQL**: Relational database for storing book data.
- **Custom Middleware**: For request logging and debugging.
- **JSON Schema**: Used to validate API input data.
- **pg**: PostgreSQL client for Node.js.

---

### Installation

- If you want to test it out and send curl requests, make sure you have postgres installed.

1. Clone the Bizinc repository:
   - git clone repository_name
   - cd backend/nodejs_Bookstore(express, middleware, db)
2. Install dependencies:
   - npm install
3. Create the database and populate with these commands:
   - psql (to enter postgres CLI)
   - CREATE DATABASE books;
   - psql -U postgres -d books < data.sql (enter this back inside terminal)
4. Run the app:
   - npm start
5. Test with a curl request(copy and paste into terminal):
   - curl -X POST http://localhost:3000/books \
        -H "Content-Type: application/json" \
        -d '{
        "isbn": "978-0132350884",
        "amazon_url": "http://amazon.com/some-book",
        "author": "Robert C. Martin",
        "language": "English",
        "pages": 464,
        "publisher": "Prentice Hall",
        "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
        "year": 2008
    }'