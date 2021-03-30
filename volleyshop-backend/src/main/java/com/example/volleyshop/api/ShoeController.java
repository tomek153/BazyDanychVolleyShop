package com.example.volleyshop.api;

import com.example.volleyshop.model.Shoe;
import com.example.volleyshop.model.User;
import com.example.volleyshop.service.ShoeService;
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
public class ShoeController {
    private final ShoeService shoeService;

    @Autowired
    public ShoeController(ShoeService shoeService) {
        this.shoeService = shoeService;
    }

    @RequestMapping(value = "api/shoes", method = GET)
    @ResponseBody
    public List<Shoe> getShoes() {
        return shoeService.getShoes();
    }

    @RequestMapping(value = "api/shoes", method = POST)
    @ResponseBody
    public void addShoe(@Valid @NonNull @RequestBody Shoe shoe, HttpServletResponse response) throws IOException {
        int status = shoeService.addShoe(shoe);
        if (status == 0) {
            System.out.println("Blad! Nie dodano produktu");
            response.sendError(405, "Produkt istnieje");
        } else {
            System.out.println("Produkt dodany");
        }
    }

    @RequestMapping(value = "api/shoes/{filter}", method = GET)
    @ResponseBody
    public List<Shoe> getShoesFromFilters(@PathVariable("filter") String filter) {
        return shoeService.getShoesFromFilters(filter);
    }
}
