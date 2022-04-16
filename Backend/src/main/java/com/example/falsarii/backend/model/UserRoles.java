package com.example.falsarii.backend.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


	@Table(name = "user_roles")
	public class UserRoles {
		
		@CreationTimestamp
	    @Temporal(TemporalType.TIMESTAMP)
	    @Column(name = "create_date")
	    private Date createDate;

	    @UpdateTimestamp
	    @Temporal(TemporalType.TIMESTAMP)
	    @Column(name = "modify_date")
	    private Date modifyDate;

}
