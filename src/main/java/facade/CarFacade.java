package facade;

import entity.Car;
import entity.Location;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author ale12
 */
public class CarFacade {

    //private static CarFacade instance;
    private static EntityManagerFactory emf;

    public List<Car> getAllCars() {
        EntityManager em = emf.createEntityManager();
        List<Car> c = new ArrayList();
        try {
            em.getTransaction().begin();
            c = em.createNamedQuery("cars.findAll").getResultList();
            em.getTransaction().commit();
            return c;
        } finally {
            em.close();
        }
    }


    public Car getCarByID(int id) {
        EntityManager em = emf.createEntityManager();

        try {
            em.getTransaction().begin();
            Car c = em.find(Car.class, id);

            em.getTransaction().commit();
            return c;

        } finally {
            em.close();
        }
    }

    public Car deleteCarByID(int id) {
        EntityManager em = emf.createEntityManager();
        
        try {
            em.getTransaction().begin();
            Car c = em.find(Car.class, id);
            em.remove(c);
            em.getTransaction().commit();
            return c;
        } finally {
            em.close();
        }

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
}
