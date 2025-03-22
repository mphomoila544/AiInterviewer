package com.example.demo.appUser;

import com.example.demo.security.config.EncoderConfig;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AppUserService implements UserDetailsService {
    private final AppUserRepository appUserRepository;
    private final EncoderConfig encoderConfig;
    public AppUserService(AppUserRepository appUserRepository,
                          EncoderConfig encoderConfig){
        this.appUserRepository = appUserRepository;
        this.encoderConfig = encoderConfig;
    }
    public AppUser loadUserByUsername(String username){

        return appUserRepository.findByEmail(username).orElseThrow(
                ()-> new UsernameNotFoundException("email does not exist")
        );

    }

    @Transactional
    public ResponseEntity<String> signUpUser(AppUser appUser){
        boolean userExists = appUserRepository.findByEmail(appUser.getEmail()).isPresent();
        if (userExists){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("email already exists");
        }
        String encodedPassword = encoderConfig.bCryptPasswordEncoder().encode(appUser.getPassword());
        appUser.setPassword(encodedPassword);
        appUserRepository.save(appUser);

        return ResponseEntity.status(HttpStatus.CREATED).body("user was added");

    }
}
