package org.edu.unidep.rest.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.smallrye.common.constraint.NotNull;
import org.edu.unidep.command.CarroCommand;

import java.math.BigDecimal;
import java.time.LocalDate;

public record CarroRequest(

        @NotNull
        @JsonProperty("nome")
        String nome,
        @NotNull
        @JsonProperty("marca")
        String marca,
        @NotNull
        @JsonProperty("cor")
        String cor,
        @NotNull
        @JsonProperty("ano")
        String ano,
        @NotNull
        @JsonProperty("valor")
        BigDecimal valor){

    public static CarroCommand toComand(CarroRequest request){
        return new CarroCommand(request.nome, request.marca, request.cor, request.ano, request.valor);
    }

}
