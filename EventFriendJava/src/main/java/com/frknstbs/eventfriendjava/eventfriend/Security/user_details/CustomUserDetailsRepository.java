package com.frknstbs.eventfriendjava.eventfriend.Security.user_details;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomUserDetailsRepository extends JpaRepository<CustomUserDetails, Long> {

    CustomUserDetails findByUsername(String username);
}
