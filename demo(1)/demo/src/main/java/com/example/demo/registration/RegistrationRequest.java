package com.example.demo.registration;

public class RegistrationRequest {
    private final String username;
    private final String email;
    private final String password;

    public RegistrationRequest(String username, String email, String password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public String getEmail(){
        return email;
    }
    public String getUsername(){
        return username;
    }
    public String getPassword(){
        return password;
    }
}
