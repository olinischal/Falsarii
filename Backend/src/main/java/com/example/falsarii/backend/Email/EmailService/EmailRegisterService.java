package com.example.falsarii.backend.Email.EmailService;

import com.example.falsarii.backend.Email.EmailService.EmailSender;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class EmailRegisterService implements EmailSender {
    @Autowired
    private final JavaMailSender mailSender;

    private final static Logger logger = LoggerFactory.getLogger(EmailRegisterService.class);

    public EmailRegisterService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

//    public EmailRegisterService(JavaMailSender mailSender) {
//        this.mailSender = mailSender;
//    }


    @Override
    @Async
    public void sendEmail(String to, String email) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
            helper.setText(email, true);
            helper.setTo(to);
            helper.setSubject("Confirm your email");
            helper.setFrom("test@email.com");
            mailSender.send(mimeMessage);
        } catch (MessagingException e) {
            logger.error("Failed to send email for: " + email + "\n" + e);
            throw new IllegalArgumentException("Failed to send email for: " + email);
        }
    }
}

