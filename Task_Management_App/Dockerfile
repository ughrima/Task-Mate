FROM maven:3.8.1-openjdk-17-slim AS build
WORKDIR /Task-Management-App
COPY Task_Management_App .
RUN mvn clean package -DskipTests

FROM openjdk:17.0-jdk-slim
WORKDIR /Task_Management_App
COPY --from=build Task_Management_App/target/Task_Management_App-0.0.1-SNAPSHOT.jar Task_Management_App.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar",""]ENTRYPOINT ["java", "-jar", "Task_Management_App.jar"]