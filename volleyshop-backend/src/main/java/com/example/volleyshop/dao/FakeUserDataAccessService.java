package com.example.volleyshop.dao;

import com.example.volleyshop.model.User;
import com.example.volleyshop.model.UserLogin;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("fakeDao")
public class FakeUserDataAccessService implements UserDao {

    private static List<User> DB = new ArrayList<>();

    @Override
    public int addUser(UUID id, User user) {
        DB.add(new User(id, user.getFirstName(), user.getLastName(), user.getEmail(), user.getPassword()));
        return 1;
    }

    @Override
    public List<User> getUsers() {
        return DB;
    }

    @Override
    public Optional<User> getUserById(String email) {
        return DB.stream()
                .filter(user -> user.getEmail().equals(email))
                .findFirst();
    }

    @Override
    public int deleteUserById(UUID id) {
        Optional<User> user = getUserById("");
        if (user.isEmpty())
            return 0;
        DB.remove(user.get());
        return 1;
    }

    @Override
    public int updateUserById(UUID id, User user) {
        return getUserById("")
                .map(u -> {
                    int indexOfUserToUpdate = DB.indexOf(u);
                    if (indexOfUserToUpdate >= 0) {
                        DB.set(indexOfUserToUpdate, new User(id, user.getFirstName(), user.getLastName(), user.getEmail(), user.getPassword()));
                        return 1;
                    }
                    return 0;
                })
                .orElse(0);
    }

    @Override
    public Optional<User> checkLoginSuccess(String email, String password) {
        return Optional.empty();
    }
}
