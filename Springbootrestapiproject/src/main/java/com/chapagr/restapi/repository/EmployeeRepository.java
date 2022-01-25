package com.chapagr.restapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chapagr.restapi.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{
	

}
