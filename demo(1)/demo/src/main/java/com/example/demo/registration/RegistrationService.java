package com.example.demo.registration;

import com.example.demo.appUser.AppUser;
import com.example.demo.appUser.AppUserRole;
import com.example.demo.appUser.AppUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {
    private final AppUserService appUserService;
    public RegistrationService(AppUserService appUserService){
        this.appUserService = appUserService;
    }
    public ResponseEntity<String> register(RegistrationRequest registrationRequest){
        AppUser x = new AppUser(
                registrationRequest.getUsername(),
                registrationRequest.getEmail(),
                registrationRequest.getPassword(),
                AppUserRole.USER
        );

        ResponseEntity<String> res = appUserService.signUpUser(x);
        return res;
    }
}
