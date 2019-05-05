package rest;

import DTO.CarDTO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.Car;
import entity.User;
import facade.BookingFacade;
import facade.CarFacade;
import java.util.Date;
import java.util.List;
import javax.annotation.security.RolesAllowed;
import javax.persistence.EntityManager;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;
import utils.PuSelector;

/**
 * @author Johachim
 */
@Path("cars")
public class CarResource {
Gson gson = new GsonBuilder().setPrettyPrinting().create();

  @Context
  private UriInfo context;

  @Context
  SecurityContext securityContext;

  //verify if the database is setup
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public String allCars() {
      List<CarDTO> cars = new CarFacade().getAllCars();
      return gson.toJson(cars);
 
  }
  
  @GET
  @Path("/{id}")
  @Produces(MediaType.APPLICATION_JSON)
  public String CarById(@PathParam("id") int id) {

      CarDTO cars = new CarFacade().getCarByID(id);
      return gson.toJson(cars);
 
  }
  
  @GET
  @Path("/{startdate}/{enddate}")
  @Produces(MediaType.APPLICATION_JSON)
  public String CarById(@PathParam("startdate") Date startdate, @PathParam("enddate") Date enddate) {
      List<Car> cars = new BookingFacade().BookingFacade(startdate, enddate);
      return gson.toJson(cars);
 
  }

//  @GET
//  @Produces(MediaType.APPLICATION_JSON)
//  @Path("user")
//  @RolesAllowed("user")
//  public String getFromUser() {
//    String thisuser = securityContext.getUserPrincipal().getName();
//    return "{\"msg\": \"Hello to User: " + thisuser + "\"}";
//  }
//
//  @GET
//  @Produces(MediaType.APPLICATION_JSON)
//  @Path("admin")
//  @RolesAllowed("admin")
//  public String getFromAdmin() {
//    String thisuser = securityContext.getUserPrincipal().getName();
//    return "{\"msg\": \"Hello to (admin) User: " + thisuser + "\"}";
//  }
}
