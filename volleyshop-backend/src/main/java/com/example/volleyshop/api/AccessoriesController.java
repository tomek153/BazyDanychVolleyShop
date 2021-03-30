package com.example.volleyshop.api;

import com.example.volleyshop.model.Accesories;
import com.example.volleyshop.service.AccessoriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AccessoriesController {

    private final AccessoriesService accessoriesService;

    @Autowired
    public AccessoriesController(AccessoriesService accessoriesService) {
        this.accessoriesService = accessoriesService;
    }

    @RequestMapping(value = "api/accessories", method = GET)
    @ResponseBody
    public List<Accesories> getAccessories() {
        return accessoriesService.getAccessories();
    }


    @RequestMapping(value = "api/accessories/{filter}", method = GET)
    @ResponseBody
    public List<Accesories> getAccessoriesFormFilters(@PathVariable("filter") String filter) {
        return accessoriesService.getAccessoriesFromFilters(filter);
    }
}
