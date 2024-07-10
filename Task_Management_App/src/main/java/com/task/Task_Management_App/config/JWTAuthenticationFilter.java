package com.task.Task_Management_App.config;

import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.task.Task_Management_App.service.JWTService;
import com.task.Task_Management_App.service.UserService;

import io.micrometer.common.util.StringUtils;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

// This class is a custom filter that intercepts incoming HTTP requests and extracts and validates JWT tokens.
@Component
@RequiredArgsConstructor
public class JWTAuthenticationFilter extends OncePerRequestFilter { // This filter checks every request once
    
    // The JWTService is used to check if the token is real and to extract the username from the token
    private final JWTService jwtService;

    // The UserService is used to load user details by username
    private final UserService userService;

    // This method intercepts each request, extracts the token from the Authorization header, validates it,
    // and sets the authentication in the security context if the token is valid
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        // Extract the Authorization header from the request
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String username;

        // If the Authorization header is empty or does not start with "Bearer ", continue the filter chain
        if (StringUtils.isEmpty(authHeader) || !org.apache.commons.lang3.StringUtils.startsWith(authHeader, "Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        // Extract the JWT token from the Authorization header (remove "Bearer " prefix)
        jwt = authHeader.substring(7);

        // Extract the username from the JWT token using the JWTService
        username = jwtService.extractUsername(jwt);

        // Check if the username is not empty and the user is not already authenticated
        if (StringUtils.isNotEmpty(username) && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userService.userDetailsService().loadUserByUsername(username);

            if (jwtService.isTokenValid(jwt, userDetails)) {
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                    userDetails, null, userDetails.getAuthorities()
                );
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }

        filterChain.doFilter(request, response);
    }
}
