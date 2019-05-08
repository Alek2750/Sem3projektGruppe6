/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import entity.Booking;
import entity.Car;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author ale12
 */
public class BookingFacade {

    private static EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");

    public static void main(String[] args) {
        Date d = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Calendar c = Calendar.getInstance();
        c.setTime(new Date());
        c.add(Calendar.DATE, 5);
        Date StartDato = new Date();
        
        //System.out.println(new BookingFacade().BookingFacade(StartDato, c.getTime()));
        System.out.println(sdf.format(c.getTime()));
    }

    public List<Car> BookingDate(long startingDate, long endingDate) {
        EntityManager em = emf.createEntityManager();
        List<Car> c = new ArrayList();
        List<Integer> carBooked = new ArrayList();
        c = em.createNamedQuery("Car.findAll").getResultList();
        List<Booking> b = em.createNamedQuery("Booking.findAll").getResultList();
        //long slutDatoTal = (long) (slutDato.getTime());
        //long startDatoTal = (long) (startDato.getTime());
        for (int i = 0; i < b.size(); i++) {
            long bEndingDate = (long) (b.get(i).getEnddate().getTime());
            long bStartingDate = (long) (b.get(i).getStartdate().getTime());

            if ((bStartingDate < endingDate && bEndingDate > startingDate)) {
                carBooked.add(b.get(i).getCarId().getId());
            }
        }

        for (int i = 0; i < carBooked.size(); i++) {
            for (int j = 0; j < c.size(); j++) {
                if (carBooked.get(i) == c.get(j).getId()) {
                    c.remove(c.get(j));
                }
            }

        }

        return c;
    }

}
