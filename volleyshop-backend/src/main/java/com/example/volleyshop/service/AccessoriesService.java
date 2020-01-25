package com.example.volleyshop.service;

import com.example.volleyshop.dao.AccessoriesDao;
import com.example.volleyshop.model.Accesories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccessoriesService {

    private final AccessoriesDao accessoriesDao;

    @Autowired
    public AccessoriesService(@Qualifier("postgres") AccessoriesDao accessoriesDao) {
        this.accessoriesDao = accessoriesDao;
    }

    public List<Accesories> getAccessories() {
        return accessoriesDao.getAccessories();
    }
}
