
# Task Mate

Welcome to Task Mate! This project is a comprehensive task management solution designed to help users efficiently manage their tasks. With Task Mate, you can create and organize projects, manage tasks, and track your progress with a user-friendly interface.

## About

Task Mate is a full-stack web application that offers a complete solution for task management providing the tools you need to stay on top of your projects. Users can create an account, log in, and manage their projects by adding, editing, and categorizing them. Additionally they can add tasks needed to be done under the said project. The application also labels projects as important, completed, or incomplete, and provides a sleek and intuitive user interface to enhance the user experience.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Future Scope](#future-scope)
- [Badges](#badges)
- [Contributing](#contributing)

## Features

- **User Authentication:** Sign up and log in securely with your account.
- **Project Management:** Create, edit, and delete projects with ease.
- **Task Management:** Add, update, and organize tasks within your projects.
- **Categorization:** Label tasks as important, completed, or incomplete.
- **User-Friendly UI:** Enjoy a sleek, intuitive interface designed for efficient task management.
- **Responsive Design:** Works seamlessly on both desktop and mobile devices.

## Tech Stack

- **Backend:** Spring Boot
- **Frontend:** AngularJS
- **Database:** MySQL
- **Hosting:** Render (for backend and database), Netlify (for frontend)
- **Version Control:** Git and GitHub
- **Tools:** Maven, Docker

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ughrima/Task-Mate.git
   ```

2. **Backend Setup:**
   - Navigate to the `Task_Management_App` directory.
   - Ensure Maven and Java are installed.
   - Run the application:
     ```bash
     mvn spring-boot:run
     ```

3. **Frontend Setup:**
   - Navigate to the `Frontend` directory.
   - Ensure Node.js and Angular CLI are installed.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the Angular development server:
     ```bash
     ng serve
     ```

4. **Database Setup:**
   - MySQL is used as the database.
   - Ensure MySQL is running, and the required schema is created.
   - Update the `application.properties` file in the backend with your database credentials.

## Usage

- **Sign Up and Log In:** Create an account and log in to start managing your tasks.
- **Create Projects:** Add new projects, and edit or delete existing ones.
- **Manage Tasks:** Add tasks to your projects, mark them as important, complete, or incomplete.
- **Track Progress:** Use the intuitive UI to monitor your project's status.

## Future Scope

- **Progress Bar:** Add a visual progress bar for tracking task completion.
- **Statistical Analysis:** Incorporate data analytics to provide insights into user behavior and task management efficiency.
- **Machine Learning:** Implement ML algorithms to predict user habits and recommend task management strategies.
- **Personal vs. Team Use:** Introduce features tailored for personal use and collaborative team environments.
- **Commercialization:** Scale the project for commercial use, offering premium features and services.

## Badges

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
