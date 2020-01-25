package com.example.volleyshop.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;

public class Supplements {

    private final int id;
    @NotBlank
    private final String name;
    @NotBlank
    private final String brand;
    @NotBlank
    private final String description;
    @NotBlank
    private final double prize;
    @NotBlank
    private final String type;
    @NotBlank
    private final String image;

    public Supplements (@JsonProperty("id") int id,
                       @JsonProperty("name") String name,
                       @JsonProperty("brand") String brand,
                       @JsonProperty("description") String description,
                       @JsonProperty("prize") double prize,
                       @JsonProperty("type") String type,
                       @JsonProperty("image") String image) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.description = description;
        this.prize = prize;
        this.type = type;
        this.image = image;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
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

    public String getType() {
        return type;
    }

    public String getImage() {
        return image;
    }
}
