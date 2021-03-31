package com.example.volleyshop.service;

import com.example.volleyshop.dao.ClotheDao;
import com.example.volleyshop.model.Clothe;
import com.example.volleyshop.model.Shoe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClotheService {

    private final ClotheDao clotheDao;

    @Autowired
    public ClotheService(@Qualifier("postgres") ClotheDao clotheDao) {
        this.clotheDao = clotheDao;
    }

    public List<Clothe> getClothes() {
        return clotheDao.getClothes();
    }

    public List<Clothe> getClothesFromFilters(String filter) {
        return clotheDao.getClothesFromFilters(filter);
    }

    public int addClothe(Clothe clothe) { return clotheDao.addClothe(clothe); }
}
