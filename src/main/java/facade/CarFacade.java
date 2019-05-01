package facade;

import entity.Car;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author ale12
 */
public class CarFacade {
    
    private static CarFacade instance;
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
    
}
