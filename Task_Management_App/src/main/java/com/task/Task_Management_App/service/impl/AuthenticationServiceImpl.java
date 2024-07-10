package com.task.Task_Management_App.service.impl;

import com.task.Task_Management_App.entities.User;
import com.task.Task_Management_App.repositories.UserRepository;
import com.task.Task_Management_App.service.AuthenticationService;
import com.task.Task_Management_App.dto.SignUpRequest;
import com.task.Task_Management_App.entities.Role;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public User signup(SignUpRequest signUpRequest) {
        User user = new User();

        user.setEmail(signUpRequest.getEmail());
        user.setUsername(signUpRequest.getUsername());
        user.setRole(Role.USER);
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));

        return userRepository.save(user);
    }
}
