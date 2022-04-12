package com.example.falsarii.backend.security.services;

import com.example.falsarii.backend.Email.EmailService.EmailRegisterService;
import com.example.falsarii.backend.model.ERole;
import com.example.falsarii.backend.model.Member;
import com.example.falsarii.backend.request.SignupRequest;
import com.example.falsarii.backend.security.token.ConfirmationToken;
import com.example.falsarii.backend.security.token.ConfirmationTokenService;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
public class RegistrationService {

    private final MemberDetailsServiceImpl memberService;

    private final ConfirmationTokenService confirmTokenService;
    private final EmailRegisterService emailService;

   // private final EmailSender emailSender;


    public RegistrationService(MemberDetailsServiceImpl memberService,
                               ConfirmationTokenService confirmTokenService, EmailRegisterService emailService) {
        this.memberService = memberService;

        this.confirmTokenService = confirmTokenService;
        this.emailService = emailService;

    }

    public String register(SignupRequest request) {


            String tokenForNewUser = String.valueOf(new Member(request.getFirstName(),
                    request.getMaidenName(),
                    request.getLastName(),
                    request.getPhoneNumber(),
                    request.getEmail(),
                    request.getPassword()));


            String link = "http://localhost:8080/member/registration/confirm?token=" + tokenForNewUser;


            emailService.sendEmail(request.getEmail(), link);

            return tokenForNewUser;

    }


    @Transactional
    public String confirmToken(String token) {
        Optional<ConfirmationToken> confirmToken = confirmTokenService.getToken(token);

        if (confirmToken!=null) {
            throw new IllegalStateException("Token not found!");
        }

        if (confirmToken.get().getConfirmedAt() != null) {
            throw new IllegalStateException("Email is already confirmed");
        }

        LocalDateTime expiresAt = confirmToken.get().getExpiresAt();

        if (expiresAt.isBefore(LocalDateTime.now())) {
            throw new IllegalStateException("Token is already expired!");
        }

        confirmTokenService.setConfirmedAt(token);
        memberService.existsByEmail(confirmToken.get().getMember().getEmail());

        //Returning confirmation message if the token matches
        return "Your email is confirmed. Thank you for using our service!";
    }

}