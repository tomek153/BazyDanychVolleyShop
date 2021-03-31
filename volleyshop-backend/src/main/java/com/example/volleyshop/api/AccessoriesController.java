package com.example.volleyshop.api;

import com.example.volleyshop.model.Accesories;
import com.example.volleyshop.model.Clothe;
import com.example.volleyshop.service.AccessoriesService;
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

    @RequestMapping(value = "api/accessories", method = POST)
    @ResponseBody
    public void addAccessorie(@Valid @NonNull @RequestBody Accesories accesories, HttpServletResponse response) throws IOException {
        int status = accessoriesService.addAccessorie(accesories);
        if (status == 0) {
            System.out.println("Blad! Nie dodano produktu");
            response.sendError(405, "Produkt istnieje");
        } else {
            System.out.println("Produkt dodany");
        }
    }
}
