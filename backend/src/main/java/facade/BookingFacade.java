/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import entity.Booking;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author ale12
 */
public class BookingFacade {

    public class CustomerFacade {

        EntityManagerFactory emf;

        public CustomerFacade(EntityManagerFactory emf) {
            this.emf = emf;
        }

        EntityManager getEntityManager() {
            return emf.createEntityManager();
        }

        //    public class CustomerFacade {
//  EntityManagerFactory emf;
//
//  public CustomerFacade(EntityManagerFactory emf) {
//    this.emf = emf;
//  }
//
//  EntityManager getEntityManager(){ 
//     return emf.createEntityManager();
//  }
//
//  // Use this template for a method that uses the
//  // EntityManager
//  public Customer getCustomer(int id){
//    EntityManager em = getEntityManager();
//    try{
//      // Use the entity manager  
//    }
//    finally{
//      em.close();
//    }
//  }
        
        public Booking deleteBookingByID(int id) {
        EntityManager em = emf.createEntityManager();
        
        try {
            em.getTransaction().begin();
            Booking b = em.find(Booking.class, id);
            em.remove(b);
            em.getTransaction().commit();
            return b;
        } finally {
            em.close();
        }

    }
        
    }
}
