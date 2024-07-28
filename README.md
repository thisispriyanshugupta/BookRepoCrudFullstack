# Book Manager Fullstack CRUD Application

Welcome to the **Book Manager Fullstack CRUD Application**! This project is a full-stack web application that allows users to manage a collection of books. It is built using Spring Boot for the backend and React for the frontend.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Description

The Book Manager Fullstack CRUD Application is designed to demonstrate a complete web application using modern technologies. It provides a simple interface for adding, updating, viewing, and deleting books from a database.

## Features

- **Create**: Add new books to the collection.
- **Read**: View details of all books in the collection.
- **Update**: Modify details of existing books.
- **Delete**: Remove books from the collection.

## Installation

To run this project locally, follow these steps:

### Backend (Spring Boot)

1. Clone the repository:
    ```sh
    git clone https://github.com/thisispriyanshugupta/BookRepoCrudFullstack.git
    cd BookRepoCrudFullstack/backend
    ```

2. Build the project:
    ```sh
    mvn clean install
    ```

### Database Setup

1. Set up your database (e.g., MySQL, PostgreSQL). Create a new database for the application.

2. Update the `application.properties` file located in `src/main/resources/` with your database configuration:
    ```properties
    spring.datasource.url=jdbc:your_database_url
    spring.datasource.username=your_username
    spring.datasource.password=your_password
    spring.jpa.hibernate.ddl-auto=update
    ```

### Frontend (React)

1. Navigate to the frontend directory:
    ```sh
    cd ../book-crud-frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the backend server by running the Spring Boot application:
    ```sh
    mvn spring-boot:run
    ```

2. Start the React application:
    ```sh
    npm start
    ```

3. Open your browser and go to `http://localhost:3000` to access the frontend.

4. Use the interface to add, view, update, and delete books.

## Technologies Used

- **Backend**: Spring Boot, Maven
- **Frontend**: React, Node.js, npm
- **Database**: (Specify your database here, e.g., MySQL, PostgreSQL)
- **Version Control**: Git, GitHub

## Contributing

Contributions are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
    ```sh
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```sh
    git commit -m "Description of your changes"
    ```
4. Push to the branch:
    ```sh
    git push origin feature-name
    ```
5. Create a pull request on GitHub.

---

*Happy Coding!*
