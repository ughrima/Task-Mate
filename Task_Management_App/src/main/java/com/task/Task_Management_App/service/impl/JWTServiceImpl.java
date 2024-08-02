// package com.task.Task_Management_App.service.impl;

// import java.security.Key;
// import java.util.Date;
// import java.util.Map;
// import java.util.function.Function;

// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.stereotype.Service;

// import com.task.Task_Management_App.service.JWTService;

// import io.jsonwebtoken.Claims;
// import io.jsonwebtoken.Jwts;
// import io.jsonwebtoken.SignatureAlgorithm;
// import io.jsonwebtoken.io.Decoders;
// import io.jsonwebtoken.security.Keys;

// @Service
// public class JWTServiceImpl implements JWTService { 
//     private static final String SECRET_KEY = "R99jONu6LpHhSkQ+XhplnU+B7hmivQMabtgykUKdoHk=";

//     @Override
//     public String generateToken(UserDetails userDetails) {
//         return Jwts.builder()
//               .setSubject(userDetails.getUsername())
//               .setIssuedAt(new Date(System.currentTimeMillis()))
//               .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24)) // 24 hours
//               .signWith(getSigninKey(), SignatureAlgorithm.HS256)
//               .compact();
//     }

//     @Override
//     public String generateRefreshToken(Map<String, Object> extraClaims, UserDetails userDetails) {
//         return Jwts.builder()
//               .setClaims(extraClaims)
//               .setSubject(userDetails.getUsername())
//               .setIssuedAt(new Date(System.currentTimeMillis()))
//               .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24 * 7)) // 7 days
//               .signWith(getSigninKey(), SignatureAlgorithm.HS256)
//               .compact();
//     }

//     @Override
//     public String extractUsername(String token) {
//         return extractClaim(token, Claims::getSubject);
//     }

//     @Override
//     public boolean isTokenValid(String token, UserDetails userDetails) {
//         final String username = extractUsername(token);
//         return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
//     }

//     @Override
//     public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
//         final Claims claims = extractAllClaims(token);
//         return claimsResolver.apply(claims);
//     }

//     private Key getSigninKey() {
//         byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
//         return Keys.hmacShaKeyFor(keyBytes);
//     }

//     private Claims extractAllClaims(String token) {
//         return Jwts.parserBuilder()
//         .setSigningKey(getSigninKey())
//         .build()
//         .parseClaimsJws(token)
//         .getBody();
//     }

//     private boolean isTokenExpired(String token) {
//         return extractClaim(token, Claims::getExpiration).before(new Date());
//     }
// }
package com.task.Task_Management_App.service.impl;

import java.security.Key;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.task.Task_Management_App.service.JWTService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;


@Service
public class JWTServiceImpl implements JWTService { 
    private static final String SECRET_KEY = "R99jONu6LpHhSkQ+XhplnU+B7hmivQMabtgykUKdoHk=";

    @Override
    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
              .setSubject(userDetails.getUsername())
              .setIssuedAt(new Date(System.currentTimeMillis()))
              .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24)) // 24 hours
              .signWith(getSigninKey(), SignatureAlgorithm.HS256)
              .compact();
    }

    @Override
    public String generateRefreshToken(Map<String, Object> extraClaims, UserDetails userDetails) {
        return Jwts.builder()
              .setClaims(extraClaims)
              .setSubject(userDetails.getUsername())
              .setIssuedAt(new Date(System.currentTimeMillis()))
              .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24 * 7)) // 7 days
              .signWith(getSigninKey(), SignatureAlgorithm.HS256)
              .compact();
    }

    @Override
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    @Override
    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    @Override
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Key getSigninKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
        .setSigningKey(getSigninKey())
        .build()
        .parseClaimsJws(token)
        .getBody();
    }

    private boolean isTokenExpired(String token) {
        return extractClaim(token, Claims::getExpiration).before(new Date());
    }
}
