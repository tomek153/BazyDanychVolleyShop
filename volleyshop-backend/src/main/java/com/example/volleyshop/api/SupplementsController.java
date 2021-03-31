package com.example.volleyshop.api;

import com.example.volleyshop.model.Clothe;
import com.example.volleyshop.model.Supplements;
import com.example.volleyshop.service.SupplementsService;
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
public class SupplementsController {

    private final SupplementsService supplementsService;

    @Autowired
    public SupplementsController(SupplementsService supplementsService) {
        this.supplementsService = supplementsService;
    }

    @RequestMapping(value = "api/supplements", method = GET)
    public List<Supplements> getSupplements() {
        return supplementsService.getSupplements();
    }

    @RequestMapping(value = "api/supplements", method = POST)
    @ResponseBody
    public void addSupplement(@Valid @NonNull @RequestBody Supplements supplements, HttpServletResponse response) throws IOException {
        int status = supplementsService.addSupplement(supplements);
        if (status == 0) {
            System.out.println("Blad! Nie dodano produktu");
            response.sendError(405, "Produkt istnieje");
        } else {
            System.out.println("Produkt dodany");
        }
    }
}
