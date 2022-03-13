package com.example.falsarii.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.falsarii.backend.model.Groups;


@Repository
public interface GroupRepository extends JpaRepository<Groups, String> {

	//Native query with named param
	@Query(
			value = "select * from groups g where g.group_name = :groupName",
			nativeQuery = true)
	Groups findbyGroupName(String groupName);
}
