package com.sanjeeb.auth.jwt.service;

import com.sanjeeb.auth.jwt.auth.AuthenticationRequest;
import com.sanjeeb.auth.jwt.auth.AuthenticationResponse;
import com.sanjeeb.auth.jwt.auth.RegistrationResponse;
import com.sanjeeb.auth.jwt.auth.RegisterRequest;
import com.sanjeeb.auth.jwt.config.JwtService;
import com.sanjeeb.auth.jwt.repository.UserRepo;
import com.sanjeeb.auth.jwt.user.Role;
import com.sanjeeb.auth.jwt.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public RegistrationResponse register(RegisterRequest request) {
        var user = User.builder()
                .firstName(request.getFirstname())
                .lastName(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();

        Optional<User> dbUser = userRepo.findByEmail(request.getEmail());
        if (dbUser.isPresent()) {
            return RegistrationResponse.builder()
                    .message("Email Id already registered.")
                    .success(false)
                    .build();
        } else {
            userRepo.save(user);
            //var token = jwtService.generateToken(user);
            return RegistrationResponse.builder()
                    .message("User successfully registered!")
                    .success(true)
                    .build();
        }
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepo.findByEmail(request.getEmail())
                .orElseThrow(() -> {
                    return new UsernameNotFoundException("User not found");
                });
        var token = jwtService.generateToken(user);
//        return RegistrationResponse.builder()
//                .token(token)
//                .message("Login Successful!")
//                .success(true)
//                .build();
        return AuthenticationResponse.builder()
                .token(token)
                .message("Login Successful!")
                .firstname(user.getFirstName())
                .lastname(user.getLastName())
                .userid(user.getId())
                .build();
    }
}
