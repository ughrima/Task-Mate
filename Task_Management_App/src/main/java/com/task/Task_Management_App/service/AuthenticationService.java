package com.task.Task_Management_App.service;

import com.task.Task_Management_App.entities.User;
import com.task.Task_Management_App.dto.JwtAuthenticationResponse;
import com.task.Task_Management_App.dto.RefreshTokenRequest;
import com.task.Task_Management_App.dto.SignInRequest;
import com.task.Task_Management_App.dto.SignUpRequest;

public interface AuthenticationService {
    User signup(SignUpRequest signUpRequest);
    JwtAuthenticationResponse signin(SignInRequest signInRequest);
    JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
