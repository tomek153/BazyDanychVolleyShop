package com.example.volleyshop.dao;

import com.example.volleyshop.model.Clothe;
import com.example.volleyshop.model.Supplements;

import java.util.List;

public interface SupplementsDao {

    List<Supplements> getSupplements();

    int addSupplement(Supplements supplements);
}
