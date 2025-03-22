package com.example.demo.jwt;

import com.example.demo.appUser.AppUser;
import com.example.demo.appUser.AppUserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final JwtUtil jwtUtil;
    private final AppUserService appUserService;

    public JwtAuthenticationFilter(JwtUtil jwtUtil, AppUserService appUserService){
        this.jwtUtil = jwtUtil;
        this.appUserService = appUserService;
    }

    public void doFilterInternal(HttpServletRequest request,
                                 HttpServletResponse response, FilterChain filterChain)
    throws ServletException, IOException {
        String token = request.getHeader("Authorization");
        if (token != null && token.startsWith("Bearer ")){
            token = token.substring(7);
            String username = jwtUtil.extractUsername(token);

            if (username != null &&
                    SecurityContextHolder.getContext()
                            .getAuthentication() == null)
            {
                AppUser appUser = appUserService.loadUserByUsername(username);
                if (jwtUtil.isTokenValid(token, appUser.getUsername())){
                    UsernamePasswordAuthenticationToken authenticationToken =
                            new UsernamePasswordAuthenticationToken(appUser, appUser.getAuthorities());
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                }


            }
        }

    }
}
