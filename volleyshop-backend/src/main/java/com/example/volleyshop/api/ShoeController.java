package com.example.volleyshop.api;

import com.example.volleyshop.model.Shoe;
import com.example.volleyshop.model.User;
import com.example.volleyshop.service.ShoeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/shoes")
@RestController
public class ShoeController {
    private final ShoeService shoeService;

    @Autowired
    public ShoeController(ShoeService shoeService) {
        this.shoeService = shoeService;
    }

    @GetMapping
    public List<Shoe> getShoes() {
        return shoeService.getShoes();
    }
}
