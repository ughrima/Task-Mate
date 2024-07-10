package com.task.Task_Management_App.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.task.Task_Management_App.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    
}

