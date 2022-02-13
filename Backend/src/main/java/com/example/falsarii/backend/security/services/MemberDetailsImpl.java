package com.example.falsarii.backend.security.services;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import com.example.falsarii.backend.model.Member;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class MemberDetailsImpl implements UserDetails {

	private static final long serialVersionUID = 1L;

	private Long id;
	
	private String firstName;
	
	private String lastName;
	
	private String phoneNumber;

	private String email;
	
	@JsonIgnore
	private String password;

	private Collection<? extends GrantedAuthority> authorities;
	
	

	public MemberDetailsImpl(Long id, String firstName, String lastName, String phoneNumber, String email,
			String password, Collection<? extends GrantedAuthority> authorities) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.password = password;
		this.authorities = authorities;
	}
	
	public static MemberDetailsImpl build(Member member) {
	    List<GrantedAuthority> authorities = member.getRoles().stream()
	        .map(role -> new SimpleGrantedAuthority(role.getName().name()))
	        .collect(Collectors.toList());

	    return new MemberDetailsImpl(
	        member.getId(), 
	        member.getFirstName(), 
	        member.getLastName(),
	        member.getPhoneNumber(),
	        member.getEmail(),
	        member.getPassword(), 
	        authorities);
	  }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
		this.authorities = authorities;
	}

	

	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return email;
	}

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
	
	 @Override
	  public boolean equals(Object o) {
	    if (this == o)
	      return true;
	    if (o == null || getClass() != o.getClass())
	      return false;
	    MemberDetailsImpl member = (MemberDetailsImpl) o;
	    return Objects.equals(id, member.id);
	  }

}