package org.edu.unidep.repository;

import org.edu.unidep.command.CarroCommand;
import org.edu.unidep.model.Carro;

import java.util.List;

public interface CarroRepository {

    public void inserir(CarroCommand command);

    public void deletar(Long id);

    public List<Carro> buscarTodas();

    public Carro buscarPorCodigo(Long id);
}