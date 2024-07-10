package com.task.Task_Management_App.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.task.Task_Management_App.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
}