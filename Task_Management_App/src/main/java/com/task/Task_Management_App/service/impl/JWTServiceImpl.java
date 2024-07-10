package com.task.Task_Management_App.service.impl;

import java.security.Key;
import java.util.Date;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

//to create and read tokens - special tickets to prove user
@Service
public class JWTServiceImpl { 
    private static final String SECRET_KEY = "R99jONu6LpHhSkQ+XhplnU+B7hmivQMabtgykUKdoHk=";

    //generate a token that has the username, time of creationg, expiration and also signed with a special key
    public String generateToken(UserDetails userDetails){
        return Jwts.builder()
              .setSubject(userDetails.getUsername())
              .setIssuedAt(new Date(System.currentTimeMillis()))
              .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24)) // 24 hours
              .signWith(getSigninKey(), SignatureAlgorithm.HS256)
              .compact();
    }

    //to get username from the token
    public String extractUsername(String token){
        return extractClaim(token, Claims::getSubject);
    }

    //reads  and extracts different parts(claims) of the token
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    
    //used to decode the secret key and converts it to a key used for signing token
    private Key getSigninKey(){
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    //reads everything inside the token
    private Claims extractAllClaims(String token){
        return Jwts.parserBuilder()
        .setSigningKey(getSigninKey())
        .build()
        .parseClaimsJws(token)
        .getBody();
    }
}
