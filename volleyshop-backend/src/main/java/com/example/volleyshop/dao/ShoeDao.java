package com.example.volleyshop.dao;

import com.example.volleyshop.model.Shoe;

import java.util.List;

public interface ShoeDao {

    List<Shoe> getShoes();

    int addShoe(Shoe shoe);
}
