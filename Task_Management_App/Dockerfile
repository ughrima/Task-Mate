FROM maven:3.8.1-openjdk-17-slim AS build
WORKDIR /build
COPY Task_Management_App /build
RUN mvn clean package -DskipTests

FROM openjdk:17.0-jdk-slim
WORKDIR /app
COPY --from=build /build/target/Task_Management_App-0.0.1-SNAPSHOT.jar /app/Task_Management_App.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "Task_Management_App.jar"]
