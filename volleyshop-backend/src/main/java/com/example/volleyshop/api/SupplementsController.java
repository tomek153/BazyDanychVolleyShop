package com.example.volleyshop.api;

import com.example.volleyshop.model.Supplements;
import com.example.volleyshop.service.SupplementsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/supplements")
@RestController
public class SupplementsController {

    private final SupplementsService supplementsService;

    @Autowired
    public SupplementsController(SupplementsService supplementsService) {
        this.supplementsService = supplementsService;
    }

    @GetMapping
    public List<Supplements> getSupplements() {
        return supplementsService.getSupplements();
    }
}
