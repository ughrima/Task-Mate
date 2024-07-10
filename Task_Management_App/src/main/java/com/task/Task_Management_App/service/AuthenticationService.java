package com.task.Task_Management_App.service;

import com.task.Task_Management_App.entities.User;
import com.task.Task_Management_App.dto.SignUpRequest;

public interface AuthenticationService {
    User signup(SignUpRequest signUpRequest);
}
