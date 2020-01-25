package com.example.volleyshop.service;

import com.example.volleyshop.dao.UserDao;
import com.example.volleyshop.model.User;
import com.example.volleyshop.model.UserLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    private final UserDao userDao;

    @Autowired
    public UserService(@Qualifier("postgres") UserDao userDao) {
        this.userDao = userDao;
    }

    public int addUser(User user) {
        return userDao.addUser(user);
    }

    public List<User> getUsers() {
        return userDao.getUsers();
    }

    public Optional<User> getUserById(String email) {
        return userDao.getUserById(email);
    }

    public int deleteUser(UUID id) {
        return userDao.deleteUserById(id);
    }

    public int updateUser(UUID id, User user) {
        return userDao.updateUserById(id, user);
    }

    public Optional<User> checkLoginSuccess(String email, String password) { return userDao.checkLoginSuccess(email, password); };
}
