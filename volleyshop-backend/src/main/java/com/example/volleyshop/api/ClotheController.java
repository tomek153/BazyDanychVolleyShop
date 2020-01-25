package com.example.volleyshop.api;

import com.example.volleyshop.model.Clothe;
import com.example.volleyshop.service.ClotheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/clothes")
@RestController
public class ClotheController {

    private final ClotheService clotheService;

    @Autowired
    public ClotheController(ClotheService clotheService) {
        this.clotheService = clotheService;
    }

    @GetMapping
    public List<Clothe> getShoes() {
        return clotheService.getShoes();
    }
}
