package com.frknstbs.eventfriendjava.eventfriend.Security.user_details;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CurrentUserController {
    @RequestMapping(value = "/user", method = RequestMethod.GET)
    @ResponseBody
    public UserDetails myCurrentUser(Authentication authentication){
        return (UserDetails) authentication.getPrincipal();
    }
}
