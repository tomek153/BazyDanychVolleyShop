package com.example.volleyshop.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import javax.validation.constraints.NotBlank;

public class Shoe {
    @NotBlank
    private final String name;
    @NotBlank
    private final String gender;
    @NotBlank
    private final String brand;
    @NotBlank
    private final String description;
    @NotBlank
    private final String prize;
    @NotBlank
    private final String image;

    public Shoe (@JsonProperty("name") String name,
                 @JsonProperty("gender") String gender,
                 @JsonProperty("brand") String brand,
                 @JsonProperty("description") String description,
                 @JsonProperty("prize") String prize,
                 @JsonProperty("image") String image) {
        this.name = name;
        this.gender = gender;
        this.brand = brand;
        this.description = description;
        this.prize = prize;
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public String getGender() {
        return gender;
    }

    public String getBrand() {
        return brand;
    }

    public String getDescription() {
        return description;
    }

    public String getPrize() {
        return prize;
    }

    public String getImage() {
        return image;
    }
}
