package com.example.volleyshop.api;

import com.example.volleyshop.model.User;
import com.example.volleyshop.model.UserLogin;
import com.example.volleyshop.service.UserService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/login")
@RestController
public class LoginController {

    private final UserService userService;
    private Gson gson = new Gson();

    @Autowired
    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void checkLoginSuccess(@Valid @NonNull @RequestBody UserLogin user, HttpServletResponse response) throws IOException {
        Optional<User> userFind = userService.checkLoginSuccess(user.getEmail(), user.getPassword());
        if (!userFind.isEmpty()) {
            String userToString = this.gson.toJson(userFind);
            PrintWriter out = response.getWriter();
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            out.print(userToString);
            out.flush();
        }
    }
}
