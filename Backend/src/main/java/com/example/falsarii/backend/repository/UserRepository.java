package com.example.falsarii.backend.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.falsarii.backend.model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long>{
	
	Optional<Users> findByEmailId(String email);
//	Users findByEmailId(String email);
	Boolean existsByEmailId(String email);
	
	@Query("SELECT m FROM Users m WHERE CONCAT(m.fname, ' ', m.lname, ' ', m.phoneNum,' ',m.emailId) LIKE %?1%")
	List<Users> searchMember(String keyword);
	
	
	//Find user_id using emailId
	@Query("select userId from Users u where u.emailId=?1")
	Long findUserId(String emailId);
	
	
	//Find user by userId
	@Query(
			value = "select * from users where user_id = :userId",
			nativeQuery = true)
	Users findByUserId(Long userId);
	
	
	//Find the groups that user is in
	@Query(
			value="Select group_id from group_on where user_id = :userId",
			nativeQuery = true)
	List<String> getUserGroups(@Param("userId") String emailId);
	
	//Removes user from a group
	@Modifying
	@Transactional
	@Query(
			value = "Delete from group_on where user_id = :userId and group_id in :groupList",
			nativeQuery = true)
	int removeGroup(@Param("userId") String emailId, @Param("groupList") List<String> groupNameList);
	
	//Find family information
	//Find parent information
	//Should return a list of parent user ids
	@Query(
			value = "Select parents_user_id from users_parents where users_user_id = :userId",
			nativeQuery = true)
	List<Long> findParentIds(@Param("userId") Long userId);
	
	//Find child information
	@Query(
			value = "Select children_user_id from users_children where users_user_id = :userId",
			nativeQuery = true)
	List<Long> findchildIds(@Param("userId") Long userId);
	
	//Find sibling information
	@Query(
			value = "Select siblings_user_id from users_siblings where users_user_id = :userId",
			nativeQuery = true)
	List<Long> findSiblingIds(@Param("userId") Long userId);
	
	
	//Find spouse information
	@Query(
			value = "Select spouse_user_id from users where user_id = :userId",
			nativeQuery = true)
	Long findSpouseId(@Param("userId") Long userId);
	
	//Remove parent
	@Transactional
	@Modifying
	//Delete from group_on where user_id = :userId and group_id in :groupId
	@Query(
			value = "Delete from users_parents where users_user_id = userId and parents_user_id = parentId",
			nativeQuery = true)
	int removeParent(@Param("userId") Long userId, @Param("parentId") Long parentId);
	
	//Remove sibling
	@Transactional
	@Modifying
	@Query(
			value = "Delete from users_siblings where users_user_id = userId and siblings_user_id = siblingId",
			nativeQuery = true)
	int removeSibling(@Param("userId") Long userId, @Param("siblingId") Long siblingId);
	
	//Remove child
	@Transactional
	@Modifying
	@Query(
			value = "Delete from users_children where users_user_id = userId and children_user_id = childId",
			nativeQuery = true)
	int removeChild(@Param("userId") Long userId, @Param("childId") Long childId);
	
	
	//Remove spouse
	//testing
	//need to update instaead of delete
	@Transactional
	@Modifying
	@Query(
			value = "Update users set spouse_user_id = null where user_id = userId and spouse_user_id = spouseId",
			nativeQuery = true)
	int removeSpouse(@Param("userId") Long userId, @Param("spouseId") Long spouseId);


	
	
}