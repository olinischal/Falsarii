package com.example.falsarii.backend.controller;

import com.example.falsarii.backend.Email.EmailDetails.EmailDetails;
import com.example.falsarii.backend.request.SignupRequest;
import com.example.falsarii.backend.security.services.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(path = "/member/registration")
public class RegistrationController {

    private final RegistrationService registrationService;

    @Autowired
    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping
    public String register(@RequestBody SignupRequest request) {
        return registrationService.register(request);
        //return "registered";
    }

//    @GetMapping(path = "confirm")
//    public String confirm(@RequestParam("token") String token) {
//        return registrationService.confirmToken(token);
//    }


}
