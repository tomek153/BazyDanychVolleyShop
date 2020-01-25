package com.example.volleyshop.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

public class UserLogin {
    private final String email;
    @NotBlank
    private final String password;
    @NotBlank

    public UserLogin(@JsonProperty("email") String email,
                @JsonProperty("password") String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
