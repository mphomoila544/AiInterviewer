package com.example.demo.login;

import com.example.demo.appUser.AppUser;
import com.example.demo.appUser.AppUserRepository;
import com.example.demo.jwt.JwtUtil;
import com.example.demo.security.config.EncoderConfig;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {
    private final JwtUtil jwtUtil;
    private final AppUserRepository appUserRepository;
    private final EncoderConfig encoderConfig;

    public LoginService(JwtUtil jwtUtil, AppUserRepository appUserRepository,
                        EncoderConfig encoderConfig){
        this.jwtUtil = jwtUtil;
        this.appUserRepository = appUserRepository;
        this.encoderConfig = encoderConfig;
    }

    public ResponseEntity<String> LoginUser(LoginRequest loginRequest){
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();
        Optional<AppUser> userOptional = appUserRepository.findByUsername(username);

        if (userOptional.isPresent()){
            AppUser user = userOptional.get();
            if (encoderConfig.bCryptPasswordEncoder().matches(password, user.getPassword())){
                return ResponseEntity.status(HttpStatus.OK).body(jwtUtil.tokenGeneration(username));
            }

        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("email does not exist");
    }
}
