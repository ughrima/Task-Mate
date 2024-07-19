package com.task.Task_Management_App.entities;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import java.util.*;

@Data //automatically creates useful methods like getters, setters etc
@Entity
@Table(name="user") //means that class can be stored in the db
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;
    private String username;
    private String password;
    private String email;
    private Role role;
    
    //shows us the users power that is role
    @Override
	public Collection <?extends GrantedAuthority > getAuthorities() {
		return List.of(new SimpleGrantedAuthority(role.name()));
	}

    // shows user's username
	@Override
	public String getUsername() {
		return username;
	}

    //rest of these tell us different things about wether the user's account is still good and can be used
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
    @Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

    @Override
	public boolean isEnabled() {
		return true;
	}


}
