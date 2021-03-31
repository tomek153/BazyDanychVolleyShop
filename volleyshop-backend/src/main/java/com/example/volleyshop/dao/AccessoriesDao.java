package com.example.volleyshop.dao;

import com.example.volleyshop.model.Accesories;
import com.example.volleyshop.model.Clothe;

import java.util.List;

public interface AccessoriesDao {

    List<Accesories> getAccessories();

    List<Accesories> getAccessoriesFromFilters(String filter);

    int addAccessorie(Accesories accesories);
}
