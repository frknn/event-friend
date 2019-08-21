package com.frknstbs.eventfriendjava.eventfriend.Registration;

import com.frknstbs.eventfriendjava.eventfriend.Security.user_details.CustomUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping("/registration")
    public CustomUserDetails createUser(@RequestBody CustomUserDetails customUserDetails){
        return registrationService.saveUser(customUserDetails);
    }
}
