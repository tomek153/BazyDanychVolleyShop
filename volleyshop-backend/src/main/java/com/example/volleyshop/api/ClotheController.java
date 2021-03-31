package com.example.volleyshop.api;

import com.example.volleyshop.model.Clothe;
import com.example.volleyshop.model.Shoe;
import com.example.volleyshop.service.ClotheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

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

    @RequestMapping(value = "api/clothes", method = POST)
    @ResponseBody
    public void addShoe(@Valid @NonNull @RequestBody Clothe clothe, HttpServletResponse response) throws IOException {
        int status = clotheService.addClothe(clothe);
        if (status == 0) {
            System.out.println("Blad! Nie dodano produktu");
            response.sendError(405, "Produkt istnieje");
        } else {
            System.out.println("Produkt dodany");
        }
    }
}
