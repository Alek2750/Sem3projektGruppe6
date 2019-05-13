/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import DTO.BookingDTO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import facade.BookingFacade;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

/**
 *
 * @author ale12
 */
@Path("booking")
public class BookingResource {
    
    Gson gson = new GsonBuilder().setPrettyPrinting().create();
    @Context
    private UriInfo context;

    /* 
    Creates a new instance of BookingResource
     */
    public BookingResource() {
    }

    /* Retrieves representation of an instance of rest.BookingResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        List<BookingDTO> bookings = new BookingFacade().getBookings();
        return gson.toJson(bookings);
    }

    /**
     * PUT method for updating or creating an instance of BookingResource
     * @param content representation for the resource
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response postCustomer(String booking) {
        BookingDTO b = gson.fromJson(booking, BookingDTO.class);

        new BookingFacade().createBooking(b);

        return Response.ok().entity(gson.toJson(b)).build();
    }
}
