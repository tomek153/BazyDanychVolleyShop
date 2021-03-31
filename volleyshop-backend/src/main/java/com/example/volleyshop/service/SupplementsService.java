package com.example.volleyshop.service;

import com.example.volleyshop.dao.SupplementsDao;
import com.example.volleyshop.model.Clothe;
import com.example.volleyshop.model.Supplements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplementsService {

    private final SupplementsDao supplementsDao;

    @Autowired
    public SupplementsService(@Qualifier("postgres") SupplementsDao supplementsDao) {
        this.supplementsDao = supplementsDao;
    }

    public List<Supplements> getSupplements() {
        return supplementsDao.getSupplements();
    }

    public int addSupplement(Supplements supplements) { return supplementsDao.addSupplement(supplements); }
}
