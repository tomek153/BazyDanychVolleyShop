package com.example.volleyshop.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import javax.validation.constraints.NotBlank;

public class Shoe {
    private final int id;
    @NotBlank
    private final String name;
    @NotBlank
    private final String gender;
    @NotBlank
    private final String brand;
    @NotBlank
    private final String description;
    @NotBlank
    private final double prize;
    @NotBlank
    private final String image;

    public Shoe (@JsonProperty("id") int id,
                 @JsonProperty("name") String name,
                 @JsonProperty("gender") String gender,
                 @JsonProperty("brand") String brand,
                 @JsonProperty("description") String description,
                 @JsonProperty("prize") double prize,
                 @JsonProperty("image") String image) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.brand = brand;
        this.description = description;
        this.prize = prize;
        this.image = image;
    }

    public int getId() {
        return id;
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

    public double getPrize() {
        return prize;
    }

    public String getImage() {
        return image;
    }
}
