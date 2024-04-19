# Calisthenics App Server

The Calisthenics App Server is the backend component of the Calisthenics App, responsible for handling user authentication, managing data storage, and providing an API for the frontend application.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Endpoints](#api-endpoints)
5. [Database](#database)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

The Calisthenics App Server serves as the backbone of the application, providing essential functionality such as user registration and login, generating workout plans, and storing user data securely.

## Installation

To get started with the Calisthenics App Server, follow these steps:

1. Clone this repository to your local machine using `git clone https://github.com/MariaRosenova/calisthenics-app.git`
2. Navigate to the server directory: `cd server`
3. Install dependencies using npm: `npm install`
4. Set up the environment variables. Refer to the `.env.example` file for guidance.
5. Start the server: `npm start`
6. The server will run on the specified port (default is 3000).

## Usage

Once the server is running, it will provide the necessary APIs for the frontend application to interact with. Users can sign up, log in, set goals, and receive personalized workout plans through the API endpoints provided by the server.

## API Endpoints

The Calisthenics App Server exposes the following API endpoints:

- `/api/auth/signup`: Register a new user
- `/api/auth/login`: Authenticate and log in a user
- `/api/auth/logout`: Log out a user
- `/api/workouts`: Retrieve workout plans based on user goals
- `/api/exercises`: Retrieve exercise information and technique guides
- `/api/users`: Retrieve or update user information

Refer to the API documentation or codebase for detailed information on each endpoint.

## Database

The Calisthenics App Server uses MongoDB as its database management system. Ensure that MongoDB is installed and running on your system or specify the connection string to an existing MongoDB instance in the environment variables.

## Technologies Used

The Calisthenics App Server is built using the following technologies:

- Node.js: Backend runtime environment for server-side JavaScript execution
- Express.js: Web application framework for Node.js used to build APIs
- MongoDB: NoSQL database used to store application data
- JWT (JSON Web Tokens): Used for user authentication and session management

## Contributing

Contributions to the Calisthenics App Server project are welcome! To contribute, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
