package com.task.Task_Management_App.controller;

import com.task.Task_Management_App.entities.User;
import com.task.Task_Management_App.service.AuthenticationService;
import com.task.Task_Management_App.dto.SignUpRequest;
import com.task.Task_Management_App.dto.SignInRequest;
import com.task.Task_Management_App.dto.JwtAuthenticationResponse;
import com.task.Task_Management_App.dto.RefreshTokenRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

// @RestController
// @RequestMapping("/api/v1/auth")
// @RequiredArgsConstructor
// public class AuthenticationController {

//     private final AuthenticationService authenticationService;

//     @PostMapping("/signup")
//     public ResponseEntity<User> signup(@RequestBody SignUpRequest signUpRequest) {
//         return ResponseEntity.ok(authenticationService.signup(signUpRequest));
//     }

//     @PostMapping("/signin")
//     public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SignInRequest signInRequest) {
//         return ResponseEntity.ok(authenticationService.signin(signInRequest));
//     }

//     @PostMapping("/refresh")
//     public ResponseEntity<JwtAuthenticationResponse> refresh(@RequestBody RefreshTokenRequest refreshTokenRequest) {
//         return ResponseEntity.ok(authenticationService.refreshToken(refreshTokenRequest));
//     }
// }

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody SignUpRequest signUpRequest) {
        return ResponseEntity.ok(authenticationService.signup(signUpRequest));
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SignInRequest signInRequest) {
        return ResponseEntity.ok(authenticationService.signin(signInRequest));
    }

    @PostMapping("/refresh")
    public ResponseEntity<JwtAuthenticationResponse> refresh(@RequestBody RefreshTokenRequest refreshTokenRequest) {
        return ResponseEntity.ok(authenticationService.refreshToken(refreshTokenRequest));
    }
}

