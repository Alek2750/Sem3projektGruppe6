package facade;

import DTO.CarDTO;
import entity.Car;
import entity.Location;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author ale12
 */
public class CarFacade {

    
    public static void main(String[] args) {
       new CarFacade().getCarByID(1);
        System.out.println(new CarFacade().getAllCars());
    }

    private static EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");

    public List<CarDTO> getAllCars() {
        EntityManager em = emf.createEntityManager();
        List<Car> c = new ArrayList();
        List<CarDTO> cDTO = new ArrayList();
        try {
            c = em.createNamedQuery("Car.findAll").getResultList();
            for (int i = 0; i < c.size(); i++) {
                Car car = c.get(i);
                CarDTO c2 = new CarDTO(car);
                cDTO.add(c2);
            }
            return cDTO;
        } finally {
            em.close();
        }
    }

    public Car getCarByID(int id) {
        EntityManager em = emf.createEntityManager();

        try {
            Car c = em.find(Car.class, id);

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
