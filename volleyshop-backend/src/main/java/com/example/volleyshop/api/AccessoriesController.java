package com.example.volleyshop.api;

import com.example.volleyshop.model.Accesories;
import com.example.volleyshop.service.AccessoriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/accessories")
@RestController
public class AccessoriesController {

    private final AccessoriesService accessoriesService;

    @Autowired
    public AccessoriesController(AccessoriesService accessoriesService) {
        this.accessoriesService = accessoriesService;
    }

    @GetMapping
    public List<Accesories> getAccessories() {
        return accessoriesService.getAccessories();
    }
}
