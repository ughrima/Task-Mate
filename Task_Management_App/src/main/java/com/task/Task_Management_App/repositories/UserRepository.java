package com.task.Task_Management_App.repositories;

import com.task.Task_Management_App.entities.User;
import com.task.Task_Management_App.entities.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{

    Optional<User> findByUsername(String username);

    User findByRole(Role role);
}
