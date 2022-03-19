package com.example.falsarii.backend.security.services;


import com.example.falsarii.backend.Email.EmailService.EmailRegisterService;
import com.example.falsarii.backend.model.ERole;
import com.example.falsarii.backend.model.Member;
import com.example.falsarii.backend.repository.MemberRepository;

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
    
    @Autowired
    MemberRepository memberRepository;

    @Autowired
    public MemberDetailsServiceImpl(MemberRepository memberRepository, ConfirmationTokenService confirmationTokenService,
                                    EmailRegisterService emailService) {
        this.memberRepository = memberRepository;

        this.confirmationTokenService = confirmationTokenService;
        this.emailService = emailService;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
      Member member = memberRepository.findByEmail(email)
          .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + email));

      return MemberDetailsImpl.build(member);
    }

    public String signUpUser(Member member) {
        boolean userExists = memberRepository.findByEmail(member.getEmail()).isPresent();

        if (userExists) {

            Member memberPrevious =  memberRepository.findByEmail(member.getEmail()).get();
            Boolean isEnabled = memberPrevious.getEnabled();

            if (!isEnabled) {
                //       String token = UUID.randomUUID().toString();
                String token = String.valueOf(new Member(member.getFirstName(),
                        member.getMaidenName(),
                        member.getLastName(),
                        member.getPhoneNumber(),
                        member.getEmail(),
                        member.getPassword()));

                //A method to save user and token in this class
                saveConfirmationToken(memberPrevious, token);

                return token;

            }
            throw new IllegalStateException(String.format("User with email %s already exists!", member.getEmail()));
        }



        //Saving the user after encoding the password
        memberRepository.save(member);

        //Creating a token from UUID
//       String token = UUID.randomUUID().toString();

        String token = String.valueOf(new Member(member.getFirstName(),
                member.getMaidenName(),
                member.getLastName(),
                member.getPhoneNumber(),
                member.getEmail(),
                member.getPassword()));




        //Getting the confirmation token and then saving it
        saveConfirmationToken(member, token);


        //Returning token
        return token;
    }

    private void saveConfirmationToken(Member member, String token) {
        ConfirmationToken confirmationToken = new ConfirmationToken(token, LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15), member);

        confirmationTokenService.saveConfirmationToken(confirmationToken);


    }




    @Transactional
    @Modifying
    @Query("UPDATE Member a SET a.enabled=true WHERE a.email=?1")
    public boolean existsByEmail(String email) {
        return memberRepository.existsByEmail(email);

    }
    
    



}
