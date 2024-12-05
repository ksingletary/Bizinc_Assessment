# Blogger Backend Project

The **Blogger Backend Project** is a Node.js and Express-based application designed to provide RESTful API functionality for managing blog posts, comments, users, and tags. It integrates with a PostgreSQL database for data persistence and demonstrates a range of backend development practices including routing, middleware implementation, and robust database interaction.

---

## Features

1. **User Management**:
   - Create, retrieve, update, and delete users.
   - User roles include authors and administrators.

2. **Blog Post Management**:
   - Create, retrieve, update, and delete blog posts.
   - Associate posts with authors and tags.

3. **Comment System**:
   - Add, retrieve, and delete comments linked to blog posts.

4. **Tags**:
   - Add tags to posts to enable categorization.

5. **Database Integration**:
   - PostgreSQL used for relational data management with a comprehensive schema.


---

## Technologies Used

- **Node.js**: Runtime environment for backend development.
- **Express.js**: Framework for building RESTful APIs.
- **PostgreSQL**: Relational database for storing structured data.
- **JSON Schema**: Schema-based validation for API inputs.
- **pg**: PostgreSQL client for Node.js.
- **dotenv**: For environment variable management.

---

## Installation

1. Clone the Repository:
  - git clone repository_name 
  - cd database/blogger-backend
2. Install dependencies:
  - npm install
3. Start server:
  - npm run dev
4. Test with curl request to create new user:
  - curl -X POST http://localhost:3000/users \
      -H "Content-Type: application/json" \
      -d '{
            "username": "jane_doe",
            "password": "mypassword456",
            "first_name": "Jane",
            "last_name": "Doe",
            "email": "jane.doe@example.com"
      }'