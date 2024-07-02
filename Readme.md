# Task Manager App
The Task Manager App is a full-stack application that allows users to manage their tasks efficiently. Users can sign up, log in, create, update, delete, and view their tasks. The app implements JWT-based authentication for secure access.

# Features
1. User Authentication: Secure sign-up and login functionality using JWT.
2. Task Management: Create, update, delete, and view tasks.
3. User-Specific Data: Each user has their own set of tasks.
4. Responsive Design: Optimized for both desktop and mobile devices.
# Technologies Used
## Frontend
1. React.js: For building the user interface.
2. CSS: For styling the application.
## Backend
1. Node.js
2. Express
3. MongoDB
4. Mongoose
## Authentication
JWT (JSON Web Tokens)
# Installation
To get started with the Task Manager App, follow these steps:

Clone the repository and install dependencies

```
git clone https://github.com/yourusername/task-manager-app.git
cd task-manager-app
```
# Backend Setup:

1. Create 'config' folder inside root folder
2. Create 'dev.env' file inside 'config' folder
3. Add following details to 'dev.env' file
   ```
   PORT=//Server port number
   JWT_SECRET=//JWS secert
   MONGODB_URL=// mongodb url
   ```
```
npm install
npm start
```

# Frontend Setup:
Install dependencies.

```
cd task-management
npm install
npm start
```
