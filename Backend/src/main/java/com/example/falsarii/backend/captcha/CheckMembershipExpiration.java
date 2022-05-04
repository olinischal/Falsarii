package com.example.falsarii.backend.captcha;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.example.falsarii.backend.model.Memberships;
import com.example.falsarii.backend.model.Users;
import com.example.falsarii.backend.repository.MembershipRepository;
import com.example.falsarii.backend.repository.UserRepository;
import com.example.falsarii.backend.service.UserService;

@Component
public class CheckMembershipExpiration {

	//Inject
	@Autowired
	private MembershipRepository membershipRepository;
	@Autowired
	private UserRepository userRepository;
	
	
	//Checks for membership deadline
	@Scheduled(cron = "0 0 0 7 * *")
	public void tester() {
		LocalDate deadline = LocalDate.now();
		
		List<String> list = membershipRepository.getMembershipDate();
		
		for(String data: list) {
			
			List<String> tempList = Arrays.asList(data.split(","));
			
			Long userId = Long.parseLong(tempList.get(0));
			LocalDate date = LocalDate.parse(tempList.get(1));
			
			if(date.isBefore(deadline)) {
				Users user = userRepository.findByUserId(userId);
				user.setEnabled(false);
				userRepository.save(user);
			}
		
		}
		
		
		
		
		
		//Compare date 
		//add 6 month to date
		
	}
	
}
