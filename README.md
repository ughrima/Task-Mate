# Task Management Application
Welcome to the Task Management Application! This project is a Spring Boot-based application designed to help users manage their tasks efficiently. It includes features for user authentication, task creation, and task management, providing a comprehensive solution for organizing and tracking tasks.


## Current Folder Structure

Task_Management_App/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── com/task/Task_Management_App/
│   │   │   │   ├── config/
│   │   │   │   ├── controller/
│   │   │   │   ├── dto/
│   │   │   │   ├── entities/
│   │   │   │   ├── repositories/
│   │   │   │   ├── service/
│   │   │   │   ├── service/impl/
│   │   │   │   └── TaskManagementAppApplication.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── ...
│   └── test/
│       └── ...
├── pom.xml
└── ...



### TaskManagementAppApplication.java
It contains the main method which serves as the entry point for the application.

### config Folder
It contains configuration classes.

### controller Folder
This folder contains controller classes that handle our HTTP requests and map them to specific methods.

### dto Folder
This folder contains Data Transfer Objects (DTOs) which are used to transfer data between layers of the application.

### entities Folder
This folder contains JPA entity classes which map to the databse tables.

### repositories Folder
This folder contains repository interfaces which extend the JpaRepository or CrudRepository to perfom CRUD operations on entities.

### service Folder
THis folder contains service interfaces that define the business logic.
 
#### service/impl folder
This contains implementation of the service interfaces defined in the /service' folder
