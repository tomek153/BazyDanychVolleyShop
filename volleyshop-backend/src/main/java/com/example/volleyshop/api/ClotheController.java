package com.example.volleyshop.api;

import com.example.volleyshop.model.Clothe;
import com.example.volleyshop.service.ClotheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ClotheController {

    private final ClotheService clotheService;

    @Autowired
    public ClotheController(ClotheService clotheService) {
        this.clotheService = clotheService;
    }

    @RequestMapping(value = "api/clothes", method = GET)
    @ResponseBody
    public List<Clothe> getClothes() {
        return clotheService.getClothes();
    }

    @RequestMapping(value = "api/clothes/{filter}", method = GET)
    @ResponseBody
    public List<Clothe> getClothes(@PathVariable("filter") String filter) {
        return clotheService.getClothesFromFilters(filter);
    }
}
