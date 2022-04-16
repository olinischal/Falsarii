 package com.example.falsarii.backend.security.services;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import com.example.falsarii.backend.model.Users;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class MemberDetailsImpl implements UserDetails {

	private static final long serialVersionUID = 1L;

	private Long id;
	
	private String emailId;

	private String fname;
	
	private String lname;
	
	private String phoneNumber;
	
	@JsonIgnore
	private String password;

	private Collection<? extends GrantedAuthority> authorities;
	
	

//	public MemberDetailsImpl(Long id, String firstName, String maidenName, String lastName, String phoneNumber, String email,
//							 String password, String graduationDate, Collection<? extends GrantedAuthority> authorities) {
//		this.id = id;
//		this.firstName = firstName;
//		this.maidenName = maidenName;
//		this.lastName = lastName;
//		this.phoneNumber = phoneNumber;
//		this.email = email;
//		this.graduationDate = graduationDate;
//		this.password = password;
//
//		this.authorities = authorities;
//	}
	
	public MemberDetailsImpl(Long id, String emailId, String fname, String lname, String password, String phoneNum,Collection<? extends GrantedAuthority> authorities) {
		this.id = id;
		this.emailId = emailId;
		this.fname = fname;
		this.lname=lname;
		this.password=password;
		this.phoneNumber= phoneNum;
		this.authorities=authorities;
	}
	
//	public static MemberDetailsImpl build(Member member) {
//	    List<GrantedAuthority> authorities = member.getRoles().stream()
//	        .map(role -> new SimpleGrantedAuthority(role.getName().name()))
//	        .collect(Collectors.toList());
//
//	    return new MemberDetailsImpl(
//	        member.getId(), 
//	        member.getFirstName(),
//				member.getMaidenName(),
//				member.getLastName(),
//	        member.getPhoneNumber(),
//	        member.getEmail(),
//				member.getPassword(),
//				member.getGraduationDate(),
//
//	        authorities);
//	  }
	
	
	public static MemberDetailsImpl build(Users member) {
	    List<GrantedAuthority> authorities = member.getRoles().stream()
	        .map(role -> new SimpleGrantedAuthority(role.getName().name()))
	        .collect(Collectors.toList());

	    return new MemberDetailsImpl(
	    		member.getUserId(),
	    		member.getEmailId(),
	    		member.getFname(),
				member.getLname(),
	        member.getPhoneNum(),
				member.getPassword(),
				authorities);
	  }

	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
		this.authorities = authorities;
	}

//	

	@Override
	  public boolean equals(Object o) {
	    if (this == o)
	      return true;
	    if (o == null || getClass() != o.getClass())
	      return false;
	    MemberDetailsImpl member = (MemberDetailsImpl) o;
	    return Objects.equals(id, member.id);
	  }


	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return emailId;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	
	
	
}

	