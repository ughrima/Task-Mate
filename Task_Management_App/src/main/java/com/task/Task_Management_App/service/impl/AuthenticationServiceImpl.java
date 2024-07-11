package com.task.Task_Management_App.service.impl;

import com.task.Task_Management_App.entities.User;
import com.task.Task_Management_App.repositories.UserRepository;
import com.task.Task_Management_App.service.AuthenticationService;
import com.task.Task_Management_App.service.JWTService;
import com.task.Task_Management_App.dto.JwtAuthenticationResponse;
import com.task.Task_Management_App.dto.RefreshTokenRequest;
import com.task.Task_Management_App.dto.SignInRequest;
import com.task.Task_Management_App.dto.SignUpRequest;
import com.task.Task_Management_App.entities.Role;

import java.util.HashMap;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JWTService jwtService;
    
    @Override
    public User signup(SignUpRequest signUpRequest) {
        User user = new User();
        user.setEmail(signUpRequest.getEmail());
        user.setUsername(signUpRequest.getUsername());
        user.setRole(Role.USER);
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public JwtAuthenticationResponse signin(SignInRequest signInRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
            signInRequest.getUsername(), signInRequest.getPassword()
        ));
        
        // Retrieve the user by username
        var user = userRepository.findByUsername(signInRequest.getUsername())
            .orElseThrow(() -> new IllegalArgumentException("Invalid username"));

        var jwt = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(new HashMap<>(),user);

        JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();
        jwtAuthenticationResponse.setToken(jwt);
        jwtAuthenticationResponse.setRefreshToken(refreshToken);

        return jwtAuthenticationResponse;
    }

    public JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest){
        String userName=jwtService.extractUsername(refreshTokenRequest.getToken());
        User user=userRepository.findByUsername(userName).orElseThrow();
        if(jwtService.isTokenValid(refreshTokenRequest.getToken(),user)){
            var jwt=jwtService.generateToken(user);

            JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();
            jwtAuthenticationResponse.setToken(jwt);
            jwtAuthenticationResponse.setRefreshToken(refreshTokenRequest.getToken());
    
            return jwtAuthenticationResponse;
        }
        return null;
    }
}
