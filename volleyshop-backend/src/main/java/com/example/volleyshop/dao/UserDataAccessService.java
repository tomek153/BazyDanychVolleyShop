package com.example.volleyshop.dao;

import com.example.volleyshop.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.BadSqlGrammarException;
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
        final String sql = "SELECT add_user('"
                +user.getFirstName()+"', '"
                +user.getLastName()+"', '"
                +user.getEmail()+"', '"
                +user.getPassword()+"')";

        Integer result = jdbcTemplate.queryForObject(sql, Integer.class);

        if (result == 0) return 1;
        else return 0;
    }

    @Override
    public int addShoe(Shoe shoe) {
        final String sql = "SELECT add_shoe('"
                +shoe.getName()+"', '"
                +shoe.getGender()+"', '"
                +shoe.getBrand()+"', '"
                +shoe.getDescription()+"', "
                +shoe.getPrize()+", '"
                +shoe.getImage()+"')";

        Integer result = jdbcTemplate.queryForObject(sql, Integer.class);

        if (result == 0) return 1;
        else return 0;
    }

    @Override
    public int addClothe(Clothe clothe) {
        final String sql = "SELECT add_clothe('"
                +clothe.getName()+"', '"
                +clothe.getGender()+"', '"
                +clothe.getBrand()+"', '"
                +clothe.getDescription()+"', "
                +clothe.getPrize()+", '"
                +clothe.getType()+"', '"
                +clothe.getImage()+"')";

        Integer result = jdbcTemplate.queryForObject(sql, Integer.class);

        if (result == 0) return 1;
        else return 0;
    }

    @Override
    public int addAccessorie(Accesories accesories) {
        final String sql = "SELECT add_accessorie('"
                +accesories.getName()+"', '"
                +accesories.getGender()+"', '"
                +accesories.getBrand()+"', '"
                +accesories.getDescription()+"', "
                +accesories.getPrize()+", '"
                +accesories.getType()+"', '"
                +accesories.getImage()+"')";

        Integer result = jdbcTemplate.queryForObject(sql, Integer.class);

        if (result == 0) return 1;
        else return 0;
    }

    @Override
    public int addSupplement(Supplements supplements) {
        System.out.println("i'm here");
        final String sql = "SELECT add_supplement('"
                +supplements.getName()+"', '"
                +supplements.getBrand()+"', '"
                +supplements.getDescription()+"', "
                +supplements.getPrize()+", '"
                +supplements.getType()+"', '"
                +supplements.getImage()+"')";

        Integer result = jdbcTemplate.queryForObject(sql, Integer.class);

        if (result == 0) return 1;
        else return 0;
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
    public List<Shoe> getShoesFromFilters(String filter) {
        String view = "shoes_";

        if (filter.equals("men") || filter.equals("women") || filter.equals("junior")) {
            view += filter;
        } else
            return null;

        final String sql = "SELECT * FROM " + view;

        try {
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
        } catch (BadSqlGrammarException bsge) {
            return null;
        }
    }

    @Override
    public List<Clothe> getClothes() {
        final String sql = "SELECT name, gender, brand, description, prize, type, image FROM clothes";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            return new Clothe(
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
    public List<Clothe> getClothesFromFilters(String filter) {
        String view = "clothes_";

        if (filter.equals("men") || filter.equals("women")) {
            view += filter;
        } else
            return null;

        final  String sql = "SELECT * FROM " + view;

        try {
            return jdbcTemplate.query(sql, (resultSet, i) -> {
                return new Clothe(
                        resultSet.getString("name"),
                        resultSet.getString("gender"),
                        resultSet.getString("brand"),
                        resultSet.getString("description"),
                        resultSet.getDouble("prize"),
                        resultSet.getString("type"),
                        resultSet.getString("image")
                );
            });
        } catch (BadSqlGrammarException bsge) {
            return null;
        }
    }

    @Override
    public List<Accesories> getAccessories() {
        final String sql = "SELECT * FROM accessories";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            return new Accesories(
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
    public List<Accesories> getAccessoriesFromFilters(String filter) {
        String view = "accessories_";

        if (filter.equals("balls") ||
            filter.equals("bags") ||
            filter.equals("knee_pads") ||
            filter.equals("sleeves") ||
            filter.equals("socks") ||
            filter.equals("equipment") ||
            filter.equals("other")) {

            view += filter;
        }

        final  String sql = "SELECT * FROM " + view;

        try {
            return jdbcTemplate.query(sql, (resultSet, i) -> {
                return new Accesories(
                        resultSet.getString("name"),
                        resultSet.getString("gender"),
                        resultSet.getString("brand"),
                        resultSet.getString("description"),
                        resultSet.getDouble("prize"),
                        resultSet.getString("type"),
                        resultSet.getString("image")
                );
            });
        } catch (BadSqlGrammarException bsge) {
            return null;
        }
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
