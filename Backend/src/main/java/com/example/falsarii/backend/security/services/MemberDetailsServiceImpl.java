package com.example.falsarii.backend.security.services;


import com.example.falsarii.backend.Email.EmailService.EmailRegisterService;
import com.example.falsarii.backend.model.ERole;
<<<<<<< HEAD

import com.example.falsarii.backend.model.Users;
import com.example.falsarii.backend.repository.UserRepository;

=======
import com.example.falsarii.backend.model.Users;
import com.example.falsarii.backend.repository.UserRepository;
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81

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

<<<<<<< HEAD

=======
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
    public String signUpUser(Users member) {
        boolean userExists = userRepository.findByEmailId(member.getEmailId()).isPresent();

        if (userExists) {

            Users memberPrevious =  userRepository.findByEmailId(member.getEmailId()).get();
<<<<<<< HEAD

=======
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
            Boolean isEnabled = memberPrevious.getEnabled();

            if (!isEnabled) {
                //       String token = UUID.randomUUID().toString();
<<<<<<< HEAD

=======
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
                String token = String.valueOf(new Users(
                		member.getEmailId(),
                        member.getFname(),
                        member.getLname(),
                        member.getPassword(),
                        member.getPhoneNum()));
<<<<<<< HEAD

=======
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81

                //A method to save user and token in this class
                saveConfirmationToken(memberPrevious, token);

                return token;

            }
<<<<<<< HEAD

            throw new IllegalStateException(String.format("User with email %s already exists!", member.getEmailId()));

=======
            throw new IllegalStateException(String.format("User with email %s already exists!", member.getEmailId()));
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
        }



        //Saving the user after encoding the password
<<<<<<< HEAD

        userRepository.save(member);

=======
        userRepository.save(member);
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81

        //Creating a token from UUID
//       String token = UUID.randomUUID().toString();

<<<<<<< HEAD
=======
        String token = String.valueOf(new Users(
        		member.getEmailId(),
                member.getFname(),
                member.getLname(),
                member.getPassword(),
                member.getPhoneNum()));

>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81

        String token = String.valueOf(new Users(
        		member.getEmailId(),
                member.getFname(),
                member.getLname(),
                member.getPassword(),
                member.getPhoneNum()));


        //Getting the confirmation token and then saving it
        saveConfirmationToken(member, token);
<<<<<<< HEAD

        
        System.out.println("THis is token :" + token);

=======
        
        System.out.println("THis is token :" + token);
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81

        //Returning token
        return token;
    }

    private void saveConfirmationToken(Users member, String token) {
        ConfirmationToken confirmationToken = new ConfirmationToken(token, LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),member);
<<<<<<< HEAD

=======
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81

        confirmationTokenService.saveConfirmationToken(confirmationToken);

    }

    @Transactional
    @Modifying
    @Query("UPDATE Member a SET a.enabled=true WHERE a.email=?1")
    public boolean existsByEmail(String email) {
<<<<<<< HEAD

        return userRepository.existsByEmailId(email);

=======
        return userRepository.existsByEmailId(email);
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81

    }
    
    



}
