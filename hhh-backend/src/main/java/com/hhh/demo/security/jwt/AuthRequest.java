package com.hhh.demo.security.jwt;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthRequest {

    @NotNull
    private String username;

    @NotNull
    private String password;

}
