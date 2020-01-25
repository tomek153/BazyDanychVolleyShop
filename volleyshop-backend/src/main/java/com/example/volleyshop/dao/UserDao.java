package com.example.volleyshop.dao;

import com.example.volleyshop.model.User;
import com.example.volleyshop.model.UserLogin;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserDao {

    int addUser(UUID id, User user);

    default int addUser(User user) {
        UUID id = UUID.randomUUID();
        return addUser(id, user);
    }

    List<User> getUsers();

    Optional<User> getUserById(String email);

    int deleteUserById(UUID id);

    int updateUserById(UUID id, User user);

    Optional<User> checkLoginSuccess(String email, String password);
}
