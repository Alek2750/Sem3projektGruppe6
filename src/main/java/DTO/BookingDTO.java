/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DTO;

import entity.Booking;
import java.util.Date;

/**
 *
 * @author ale12
 */
public class BookingDTO {

    private int id;
    private Date startDate;
    private Date endDate;
    private int carId;
    private String userName;
    private Integer totalPrice;

    public BookingDTO(Booking booking) {
        //this.id = booking.getId();
        this.startDate = booking.getStartdate();
        this.endDate = booking.getEnddate();
        this.carId = booking.getCarId().getId();
        this.totalPrice = booking.getTotalPrice();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public int getCarId() {
        return carId;
    }

    public void setCarId(int carId) {
        this.carId = carId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Integer getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Integer totalPrice) {
        this.totalPrice = totalPrice;
    }

    @Override
    public String toString() {
        return "BookingDTO{" + "id=" + id + ", startDate=" + startDate + ", endDate=" + endDate + ", carId=" + carId + ", userName=" + userName + ", totalPrice=" + totalPrice + '}';
    }
}
