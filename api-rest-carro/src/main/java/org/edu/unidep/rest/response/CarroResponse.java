package org.edu.unidep.rest.response;

import org.edu.unidep.model.Carro;

import java.math.BigDecimal;

public record CarroResponse(Long id, String nome, String marca, String cor, String ano, BigDecimal valor) {

    public static CarroResponse toResponse(Carro carro){
        return new CarroResponse(carro.getId(), carro.getNome(), carro.getMarca(),
                carro.getCor(), carro.getAno(), carro.getValor());
    }
}

