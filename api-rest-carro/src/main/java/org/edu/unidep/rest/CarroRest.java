package org.edu.unidep.rest;

import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;
import org.edu.unidep.repository.CarroRepository;
import org.edu.unidep.model.Carro;
import org.edu.unidep.rest.request.CarroRequest;
import org.edu.unidep.rest.response.CarroResponse;
import org.edu.unidep.service.CarroService;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/carro")
public class CarroRest {

    private final CarroRepository carroRepository;
    private final CarroService carroService;

    @Inject
    public CarroRest(CarroRepository carroRepository, CarroService carroService) {
        this.carroRepository = carroRepository;
        this.carroService = carroService;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response buscarTodas() {
        List<CarroResponse> responses = carroRepository.buscarTodas().stream()
                .map(carro -> new CarroResponse(carro.getId(), carro.getNome(),
                        carro.getMarca(), carro.getCor(), carro.getAno(), carro.getValor())).toList();
        return Response.ok(responses).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response buscarPorCodigo(@PathParam("id") Long id) {
        CarroResponse response = CarroResponse.toResponse(carroRepository.buscarPorCodigo(id));
        return Response.ok(response).build();
    }

    @POST
    public void inserir(@Valid @RequestBody CarroRequest request) {
        carroRepository.inserir(CarroRequest.toComand(request));
    }

    @PUT
    @Path("/{id}")
    public Response alterar(@PathParam("id") Long id, @Valid @RequestBody Carro carro) {
        Carro carroAlterado = carroService.atualizar(id, carro);
        return Response.ok(carroAlterado).build();
    }

    @DELETE
    @Path("/{id}")
    public void deletar(@PathParam("id") Long id) {
        carroRepository.deletar(id);
    }
}