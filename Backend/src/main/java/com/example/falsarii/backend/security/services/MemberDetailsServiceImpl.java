package com.example.falsarii.backend.security.services;


import com.example.falsarii.backend.Email.EmailService.EmailRegisterService;
import com.example.falsarii.backend.model.ERole;
import com.example.falsarii.backend.model.Users;
import com.example.falsarii.backend.repository.UserRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


import com.example.falsarii.backend.security.token.ConfirmationToken;
import com.example.falsarii.backend.security.token.ConfirmationTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MemberDetailsServiceImpl implements UserDetailsService {



    private final ConfirmationTokenService confirmationTokenService;
    private final EmailRegisterService emailService;
    
//    @Autowired
//    MemberRepository memberRepository;
    
    @Autowired
    UserRepository userRepository;

    @Autowired
    public MemberDetailsServiceImpl(UserRepository memberRepository, ConfirmationTokenService confirmationTokenService,
                                    EmailRegisterService emailService) {
        this.userRepository = memberRepository;

        this.confirmationTokenService = confirmationTokenService;
        this.emailService = emailService;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
      Users member = userRepository.findByEmailId(email)
          .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + email));

      return MemberDetailsImpl.build(member);
    }

    public String signUpUser(Users member) {
        boolean userExists = userRepository.findByEmailId(member.getEmailId()).isPresent();

        if (userExists) {

            Users memberPrevious =  userRepository.findByEmailId(member.getEmailId()).get();
            Boolean isEnabled = memberPrevious.getEnabled();

            if (!isEnabled) {
                //       String token = UUID.randomUUID().toString();
                String token = String.valueOf(new Users(
                		member.getEmailId(),
                        member.getFname(),
                        member.getLname(),
                        member.getPassword(),
                        member.getPhoneNum()));

                //A method to save user and token in this class
                saveConfirmationToken(memberPrevious, token);

                return token;

            }
            throw new IllegalStateException(String.format("User with email %s already exists!", member.getEmailId()));
        }



        //Saving the user after encoding the password
        userRepository.save(member);

        //Creating a token from UUID
//       String token = UUID.randomUUID().toString();

        String token = String.valueOf(new Users(
        		member.getEmailId(),
                member.getFname(),
                member.getLname(),
                member.getPassword(),
                member.getPhoneNum()));




        //Getting the confirmation token and then saving it
        saveConfirmationToken(member, token);
        
        System.out.println("THis is token :" + token);

        //Returning token
        return token;
    }

    private void saveConfirmationToken(Users member, String token) {
        ConfirmationToken confirmationToken = new ConfirmationToken(token, LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),member);

        confirmationTokenService.saveConfirmationToken(confirmationToken);

    }

    @Transactional
    @Modifying
    @Query("UPDATE Member a SET a.enabled=true WHERE a.email=?1")
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmailId(email);

    }
    
    



}
