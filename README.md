# Express Starter

Express Starter is a boilerplate project for building web applications with Node.js and Express.js.

## Features

-   Modular file structure for improved organization
-   Integrated middleware for error handling, input validation, and authentication
-   Configuration setup for DB setup
-   Follows Model-View-Controller architectural pattern
-   Logging setup using Winston
-   Database interactions with Sequelize ORM
-   Centralized error handling setup
-   JWT-based cookie authentication and authorization
-   Test setup with Mocha

## Getting Started

To get started with Express Starter, follow these steps:

1. Clone the repository:

```bash
    git clone https://github.com/HanifNepali/express-starter.git
```

2. Navigate into the directory:

```bash
    cd express-starter
```

3. Install dependencies:

```bash
    npm install
```

4. Configure environment variables and customize it as needed:

    - Copy the .env.example file to .env.
    - Copy the dbConfig.example.json file to dbConfig.json

5. Start the server:

```bash
    npm start
```

6. Visit http://localhost:8000 in your web browser to access the server.

## Usage

-   Add routes and corresponding controllers in the routes and controllers directories, respectively.
-   For CRUD operation reference, please refer to user model and it's corresponding routes/controllers.
-   Add service functions in the service directory.
-   Define data models in the models directory.
-   Implement middleware functions in the middleware directory.
-   Write tests for your application components in the tests directory.

### Logger (Winston)

Winston is configured for logging. Logs are stored in the logs/ directory.

### ORM (Sequelize)

Sequelize ORM is used for interacting with the database. Database configuration is located in config/database.js.

### Error Handling Middleware

A centralized error-handling middleware is set up to catch and log errors.

### Authentication/Authorization (JWT-based cookie)

JWT-based cookie authentication and authorization are implemented. User authentication is handled through JWT tokens stored in cookies.

### Testing (Mocha)

Testing is set up with Mocha. You can write your tests in the test/ directory. Configuration is located in .mocharc.js

To run tests, please execute the following command:

```bash
    npm test
```
