package com.example.volleyshop.service;

import com.example.volleyshop.dao.ShoeDao;
import com.example.volleyshop.model.Shoe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoeService {

    private final ShoeDao shoeDao;

    @Autowired
    public ShoeService(@Qualifier("postgres") ShoeDao shoeDao) {
        this.shoeDao = shoeDao;
    }

    public List<Shoe> getShoes() {
        return shoeDao.getShoes();
    }

    public List<Shoe> getShoesFromFilters(String filter) {
        return shoeDao.getShoesFromFilters(filter);
    }

    public int addShoe(Shoe shoe) { return shoeDao.addShoe(shoe); }
}
