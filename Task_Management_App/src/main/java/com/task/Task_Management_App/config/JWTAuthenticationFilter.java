package com.task.Task_Management_App.config;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.task.Task_Management_App.service.JWTService;

import io.micrometer.common.util.StringUtils;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

//class is a custom filter that inctercepts incoming HTTP request and extracts andvalidates JWT tokens.
@Component
@RequiredArgsConstructor
public class JWTAuthenticationFilter  extends OncePerRequestFilter{ //checks every request once
    
    private final JWTService JWTService; //checks is the token is real and extracts username 
    private final UserService Userservice;

    @Override
	public void doFilter(HttpServletRequest request, HTTPServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
        final String authHeader=request.getHeader("Authorization"); 
        final String jwt;
        final String username;

        if (StringUtils.isEmpty(authHeader) || !org.apache.commons.lang3.StringUtils.startsWith(authHeader, "Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        jwt = authHeader.substring(7);
        username = jwtService.extractUserName(jwt);

        if (StringUtils.isNotEmpty(username) && SecurityContextHolder.getContext().getAuthentication() == null) {
        UserDetails userDetails = userService.userDetailsService().loadUserByUsername(username);
        
}
        
}
}
