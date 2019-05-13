/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DTO;

import entity.Car;

/**
 *
 * @author ale12
 */
public class CarDTO {
    
    private Integer id;
    private String numberplate;
    private String brand;
    private String fueltype;
    private String gear;
    private Integer year;
    private String cartype;
    private Integer seats;
    private Integer doors;
    private Integer price;
    private String img;
    private String locationId;
    

    public CarDTO(Car car) {
        this.id = car.getId();
        this.numberplate = car.getNummerplate();
        this.brand = car.getBrand();
        this.fueltype = car.getFueltype();
        this.gear = car.getGear();
        this.year = car.getYear();
        this.cartype = car.getCartype();
        this.seats = car.getSeats();
        this.doors = car.getDoors();
        this.price = car.getPrice();
        //this.locationId = car.getLocationId().getLocation();
    }
    
    
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNummerplate() {
        return numberplate;
    }

    public void setNummerplate(String nummerplate) {
        this.numberplate = nummerplate;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getFueltype() {
        return fueltype;
    }

    public void setFueltype(String fueltype) {
        this.fueltype = fueltype;
    }

    public String getGear() {
        return gear;
    }

    public void setGear(String gear) {
        this.gear = gear;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getCartype() {
        return cartype;
    }

    public void setCartype(String cartype) {
        this.cartype = cartype;
    }

    public Integer getSeats() {
        return seats;
    }

    public void setSeats(Integer seats) {
        this.seats = seats;
    }

    public Integer getDoors() {
        return doors;
    }

    public void setDoors(Integer doors) {
        this.doors = doors;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getLocationId() {
        return locationId;
    }

    public void setLocationId(String locationId) {
        this.locationId = locationId;
    }

    @Override
    public String toString() {
        return "CarDTO{" + "id=" + id + ", numberplate=" + numberplate + ", brand=" + brand + ", fueltype=" + fueltype + ", gear=" + gear + ", year=" + year + ", cartype=" + cartype + ", seats=" + seats + ", doors=" + doors + ", price=" + price + ", img=" + img + ", locationId=" + locationId + '}';
    }

    

    
    
    
}
