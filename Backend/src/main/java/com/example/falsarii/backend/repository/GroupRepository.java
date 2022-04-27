package com.example.falsarii.backend.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.falsarii.backend.model.Groups;


@Repository
public interface GroupRepository extends JpaRepository<Groups, Long> {

	//Fing group by groupId
		@Query(
				value = "select * from groups where group_id = :groupId",
				nativeQuery = true)
		Groups findByGroupId(Long groupId);
	
	
//	//Native query with named param
//	@Query(
//			value = "select * from groups g where g.group_name = :groupName",
//			nativeQuery = true)
//	Groups findbyGroupName(String groupName);
	
	@Transactional
	@Modifying
	@Query(
			value = "Delete from group_on where user_id = :userId and group_id in :groupId",
			nativeQuery = true)
	int removeUserFromGroup(@Param("userId") Long userId, @Param("groupName") Long groupId);

	//GetSelectedGroup
	@Query(
			value = "select * from groups g where g.group_id in :groupIdList",
			nativeQuery = true)
	List<Groups> findAllByGroupId(@Param("groupIdList") List<Long> groupIdList);
}