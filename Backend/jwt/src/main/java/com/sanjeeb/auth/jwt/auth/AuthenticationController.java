package com.sanjeeb.auth.jwt.auth;

import com.sanjeeb.auth.jwt.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<RegistrationResponse> register(
            @RequestBody RegisterRequest request) {
        RegistrationResponse registerResponse = service.register(request);
        if (registerResponse.isSuccess()){
            return ResponseEntity.ok(registerResponse);
        }else {
            return ResponseEntity.badRequest().body(registerResponse);
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
