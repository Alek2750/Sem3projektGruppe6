/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author ale12
 */
@Entity
@Table(name = "cars")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Car.findAll", query = "SELECT c FROM Car c")
    , @NamedQuery(name = "Car.findById", query = "SELECT c FROM Car c WHERE c.id = :id")
    , @NamedQuery(name = "Car.findByNummerplate", query = "SELECT c FROM Car c WHERE c.nummerplate = :nummerplate")
    , @NamedQuery(name = "Car.findByBrand", query = "SELECT c FROM Car c WHERE c.brand = :brand")
    , @NamedQuery(name = "Car.findByFueltype", query = "SELECT c FROM Car c WHERE c.fueltype = :fueltype")
    , @NamedQuery(name = "Car.findByGear", query = "SELECT c FROM Car c WHERE c.gear = :gear")
    , @NamedQuery(name = "Car.findByYear", query = "SELECT c FROM Car c WHERE c.year = :year")
    , @NamedQuery(name = "Car.findByCartype", query = "SELECT c FROM Car c WHERE c.cartype = :cartype")
    , @NamedQuery(name = "Car.findBySeats", query = "SELECT c FROM Car c WHERE c.seats = :seats")
    , @NamedQuery(name = "Car.findByDoors", query = "SELECT c FROM Car c WHERE c.doors = :doors")
    , @NamedQuery(name = "Car.findByPrice", query = "SELECT c FROM Car c WHERE c.price = :price")
    , @NamedQuery(name = "Car.findByImg", query = "SELECT c FROM Car c WHERE c.img = :img")})
public class Car implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Size(max = 45)
    @Column(name = "nummerplate")
    private String nummerplate;
    @Size(max = 45)
    @Column(name = "brand")
    private String brand;
    @Size(max = 11)
    @Column(name = "fueltype")
    private String fueltype;
    @Size(max = 6)
    @Column(name = "gear")
    private String gear;
    @Column(name = "year")
    private Integer year;
    @Size(max = 45)
    @Column(name = "cartype")
    private String cartype;
    @Column(name = "seats")
    private Integer seats;
    @Column(name = "doors")
    private Integer doors;
    @Column(name = "price")
    private Integer price;
    @Size(max = 45)
    @Column(name = "img")
    private String img;
    @JoinColumn(name = "location_id", referencedColumnName = "id")
    @ManyToOne
    private Location locationId;
    @OneToMany(mappedBy = "carId")
    private Collection<Booking> bookingCollection;

    public Car() {
    }

    public Car(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNummerplate() {
        return nummerplate;
    }

    public void setNummerplate(String nummerplate) {
        this.nummerplate = nummerplate;
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

    public Location getLocationId() {
        return locationId;
    }

    public void setLocationId(Location locationId) {
        this.locationId = locationId;
    }

    @XmlTransient
    public Collection<Booking> getBookingCollection() {
        return bookingCollection;
    }

    public void setBookingCollection(Collection<Booking> bookingCollection) {
        this.bookingCollection = bookingCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Car)) {
            return false;
        }
        Car other = (Car) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entity.Car[ id=" + id + " ]";
    }
    
}
