package com.example.volleyshop.dao;

import com.example.volleyshop.model.Clothe;
import com.example.volleyshop.model.Shoe;

import java.util.List;

public interface ClotheDao {

    List<Clothe> getClothes();

    List<Clothe> getClothesFromFilters(String filter);

    int addClothe(Clothe clothe);
}
