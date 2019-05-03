/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import entity.Location;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author ale12
 */
public class LocationFacade {
    
    private static LocationFacade instance;
    private static EntityManagerFactory emf;
    
    public List<Location> getAllLocations() {
        EntityManager em = emf.createEntityManager();
        List<Location> l = new ArrayList();
        try {
            em.getTransaction().begin();
            l = em.createNamedQuery("location.findAll").getResultList();
            em.getTransaction().commit();
            return l;
        } finally {
            em.close();
        }
    }
    
    //getLocationByCarID??
    public Location getLocationByID(int id) {
        EntityManager em = emf.createEntityManager();

        try {
            em.getTransaction().begin();
            Location loca = em.find(Location.class, id);


            em.getTransaction().commit();
            return loca;

        } finally {
            em.close();
        }
    }
}
