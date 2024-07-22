package com.task.Task_Management_App.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import com.task.Task_Management_App.entities.User;

public interface UserService extends UserDetailsService {
    User findByUsername(String username);
    User findById(Long id);

}
