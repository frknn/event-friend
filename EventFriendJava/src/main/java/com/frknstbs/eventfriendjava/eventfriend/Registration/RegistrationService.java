package com.frknstbs.eventfriendjava.eventfriend.Registration;

import com.frknstbs.eventfriendjava.eventfriend.Security.user_details.CustomUserDetails;
import com.frknstbs.eventfriendjava.eventfriend.Security.user_details.CustomUserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    @Autowired
    private CustomUserDetailsRepository customUserDetailsRepository;

    public CustomUserDetails saveUser(CustomUserDetails customUserDetails){

        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        final String encodedPassword = bCryptPasswordEncoder.encode(customUserDetails.getPassword());
        customUserDetails.setPassword(encodedPassword);
        return customUserDetailsRepository.save(customUserDetails);
    }
}
