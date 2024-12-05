# Next.js Application: NFT Account and Weather App

This project demonstrates a **Next.js application** with **two main features**:
1. Allow users to create a **mock NFT account** through next-auth twitter provider.
2. Display **weather information** fetched from a mock API created with JSON Server.

This application highlights the core features of **Next.js**, including **client-side routing**, **API integration**, and efficient **frontend-backend interaction**. While building this project, I encountered minor challanges with integrating JSON Server, as it was relatively new for me in a Next.js context, but I successfully overcame these hurdles to deliver a functional and efficient application.

---

## Features

- **Client-Side Navigation**:
  - Navigate seamlessly between the NFT account creation page, and the home page where the weather information is using Next.js routing.

- **Mock API Integration**:
  - JSON Server provides mock endpoints for weather data, which are consumed by the weather page.
  - User account creation data is managed through next-auth for demonstration purposes.

- **Interactive User Experience**:
  - Responsive design ensures smooth operation on devices of various screen sizes.

---


## Technologies Used

- **Next.js**: Framework for server-rendered and static web applications.
- **TypeScript**: Static typing for better maintainability.
- **JSON Server**: Mock API server to simulate backend functionality.
- **Tailwind CSS**: For rapid and responsive UI design.
- **Next-Auth**: For authentication and session management in the application. 

---

### Installation

1. Clone the Bizinc repository
   - git clone respository_link (enter in terminal)
   - cd frontend/nextjsapp
2. Install dependencies
   - npm install
3. Start servers
   - **npx json-server --watch db.json --port 3001** (this starts the JSON server at port 3001)
   - **npm run dev** (this starts the frontend where it consumes the backend)

