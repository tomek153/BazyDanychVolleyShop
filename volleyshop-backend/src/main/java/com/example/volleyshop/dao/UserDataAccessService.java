package com.example.volleyshop.dao;

import com.example.volleyshop.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("postgres")
public class UserDataAccessService implements UserDao, ShoeDao, ClotheDao, AccessoriesDao, SupplementsDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int addUser(UUID id, User user) {
        final String sqlFirst = "SELECT * FROM users WHERE email = '"+user.getEmail()+"'";

        List<User> listFind = jdbcTemplate.query(sqlFirst, (resultSet, i) -> {
            return new User(
                    UUID.fromString(resultSet.getString("id")),
                    resultSet.getString("firstName"),
                    resultSet.getString("lastName"),
                    resultSet.getString("email"),
                    resultSet.getString("password")
            );
        });

        if (listFind.isEmpty()) {
            final String sqlSecond = "INSERT INTO users (id, firstname, lastname, email, password) " +
                    "VALUES (uuid_generate_v4(), " +
                    "'"+user.getFirstName()+"', " +
                    "'"+user.getLastName()+"', " +
                    "'"+user.getEmail()+"', " +
                    "md5('"+user.getPassword()+"'))";
            jdbcTemplate.execute(sqlSecond);
            return 1;
        } else
            return 0;
    }

    @Override
    public int addShoe(Shoe shoe) {
        final String sqlFirst = "SELECT name, gender, brand, description, prize, image FROM shoes WHERE name = '"+shoe.getName()+"' OR image = '"+shoe.getImage()+"'";

        List<Shoe> listFind = jdbcTemplate.query(sqlFirst, (resultSet, i) -> {
            return new Shoe(
                    resultSet.getString("name"),
                    resultSet.getString("gender"),
                    resultSet.getString("brand"),
                    resultSet.getString("description"),
                    resultSet.getDouble("prize")+"",
                    resultSet.getString("image")
            );
        });

        if (listFind.isEmpty()) {
            final String sqlSecond = "INSERT INTO shoes (name, gender, brand, description, prize, image) VALUES(" +
                    "'"+shoe.getName()+"', " +
                    "'"+shoe.getGender()+"', " +
                    "'"+shoe.getBrand()+"', " +
                    "'"+shoe.getDescription()+"', " +
                    "'"+shoe.getPrize()+"', " +
                    "'"+shoe.getImage()+"')"
                    ;
            try {
                jdbcTemplate.execute(sqlSecond);
                return 1;
            } catch(Exception e) {
                e.printStackTrace();
                System.out.println(e.getMessage());
                return 0;
            }
        } else
            return 0;
    }

    @Override
    public List<User> getUsers() {
        final String sql = "SELECT * FROM users";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            return new User(
                    UUID.fromString(resultSet.getString("id")),
                    resultSet.getString("firstName"),
                    resultSet.getString("lastName"),
                    resultSet.getString("email"),
                    resultSet.getString("password")
            );
        });
    }

    @Override
    public Optional<User> getUserById(String email) {
        final String sql = "SELECT * FROM users WHERE email = ?";

        User user = jdbcTemplate.queryForObject(
                sql,
                new Object[]{email},
                (resultSet, i) -> {
                    return new User(
                            UUID.fromString(resultSet.getString("id")),
                            resultSet.getString("firstName"),
                            resultSet.getString("lastName"),
                            resultSet.getString("email"),
                            resultSet.getString("password")
            );
        });
        return Optional.ofNullable(user);
    }

    @Override
    public int deleteUserById(UUID id) {
        return 0;
    }

    @Override
    public int updateUserById(UUID id, User user) {
        return 0;
    }

    @Override
    public Optional<User> checkLoginSuccess(String email, String password) {
        final String sql = "SELECT * FROM users WHERE email = ? AND password = md5(?)";

        User user = jdbcTemplate.queryForObject(
            sql,
            new Object[]{email, password},
            (resultSet, i) -> {
                return new User(
                        UUID.fromString(resultSet.getString("id")),
                        resultSet.getString("firstName"),
                        resultSet.getString("lastName"),
                        resultSet.getString("email"),
                        resultSet.getString("password")
                );
            }
        );
        return Optional.ofNullable(user);
    }

    @Override
    public List<Shoe> getShoes() {
        final String sql = "SELECT name, gender, brand, description, prize, image FROM shoes";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            return new Shoe(
                    resultSet.getString("name"),
                    resultSet.getString("gender"),
                    resultSet.getString("brand"),
                    resultSet.getString("description"),
                    resultSet.getDouble("prize")+"",
                    resultSet.getString("image")
            );
        });
    }

    @Override
    public List<Clothe> getClothes() {
        final String sql = "SELECT * FROM clothes";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            return new Clothe(
                    resultSet.getInt("id"),
                    resultSet.getString("name"),
                    resultSet.getString("gender"),
                    resultSet.getString("brand"),
                    resultSet.getString("description"),
                    resultSet.getDouble("prize"),
                    resultSet.getString("type"),
                    resultSet.getString("image")
            );
        });
    }

    @Override
    public List<Accesories> getAccessories() {
        final String sql = "SELECT * FROM accessories";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            return new Accesories(
                    resultSet.getInt("id"),
                    resultSet.getString("name"),
                    resultSet.getString("gender"),
                    resultSet.getString("brand"),
                    resultSet.getString("description"),
                    resultSet.getDouble("prize"),
                    resultSet.getString("type"),
                    resultSet.getString("image")
            );
        });
    }

    @Override
    public List<Supplements> getSupplements() {
        final String sql = "SELECT * FROM supplements";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            return new Supplements(
                    resultSet.getInt("id"),
                    resultSet.getString("name"),
                    resultSet.getString("brand"),
                    resultSet.getString("description"),
                    resultSet.getDouble("prize"),
                    resultSet.getString("type"),
                    resultSet.getString("image")
            );
        });
    }
}
