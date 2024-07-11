package com.task.Task_Management_App.service;
import java.util.*;
import org.springframework.security.core.userdetails.UserDetails;

public interface JWTService {
    String generateToken(UserDetails userDetails);
    String extractUsername(String token);
    boolean isTokenValid(String token, UserDetails userDetails);
    <T> T extractClaim(String token, java.util.function.Function<io.jsonwebtoken.Claims, T> claimsResolver);
    String generateRefreshToken(Map<String,Object> extraClaims, UserDetails userDetails);
}
