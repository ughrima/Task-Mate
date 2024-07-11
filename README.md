
# Task Management Application

Welcome to the Task Management Application! This project is a Spring Boot-based application designed to help users manage their tasks efficiently. It includes features for user authentication, task creation, and task management, providing a comprehensive solution for organizing and tracking tasks.

## Current Folder Structure

```
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
```

### TaskManagementAppApplication.java

- **Location**: `src/main/java/com/task/Task_Management_App/TaskManagementAppApplication.java`
- **Description**: Contains the `main` method which serves as the entry point for the application.

### config Folder

- **Location**: `src/main/java/com/task/Task_Management_App/config/`
- **Description**: Contains configuration classes such as security configurations, database configurations, etc.

### controller Folder

- **Location**: `src/main/java/com/task/Task_Management_App/controller/`
- **Description**: Contains controller classes that handle HTTP requests and map them to specific service methods.

### dto Folder

- **Location**: `src/main/java/com/task/Task_Management_App/dto/`
- **Description**: Contains Data Transfer Objects (DTOs) which are used to transfer data between layers of the application.

### entities Folder

- **Location**: `src/main/java/com/task/Task_Management_App/entities/`
- **Description**: Contains JPA entity classes which map to the database tables.

### repositories Folder

- **Location**: `src/main/java/com/task/Task_Management_App/repositories/`
- **Description**: Contains repository interfaces which extend `JpaRepository` or `CrudRepository` to perform CRUD operations on the entities.

### service Folder

- **Location**: `src/main/java/com/task/Task_Management_App/service/`
- **Description**: Contains service interfaces that define the business logic.

### service/impl Folder

- **Location**: `src/main/java/com/task/Task_Management_App/service/impl/`
- **Description**: Contains the implementations of the service interfaces defined in the `service` folder.

### resources Folder

- **Location**: `src/main/resources/`
- **Description**: Contains application configuration files such as `application.properties`.

### test Folder

- **Location**: `src/test/`
- **Description**: Contains test cases for the application.

### pom.xml

- **Location**: Project root
- **Description**: Maven configuration file which manages project dependencies and builds configuration.
