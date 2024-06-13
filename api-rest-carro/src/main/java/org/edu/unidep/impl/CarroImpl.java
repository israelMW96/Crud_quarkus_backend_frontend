package org.edu.unidep.impl;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.edu.unidep.command.CarroCommand;
import org.edu.unidep.model.Carro;
import org.edu.unidep.repository.CarroRepository;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class CarroImpl implements PanacheRepository<Carro>, CarroRepository {

    @Transactional
    @Override
    public void inserir(CarroCommand command) {
        Carro carro = new Carro();
        carro.setNome(command.nome());
        carro.setMarca(command.marca());
        carro.setCor(command.cor());
        carro.setAno(command.ano());
        carro.setValor(command.valor());
        persist(carro);
    }

    @Transactional
    @Override
    public void deletar(Long id) {
        deleteById(id);
    }

    @Override
    public List<Carro> buscarTodas() {
        return listAll();
    }

    @Override
    public Carro buscarPorCodigo(Long id) {
        return findById(id);
    }
}