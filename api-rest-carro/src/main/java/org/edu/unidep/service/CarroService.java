package org.edu.unidep.service;

import org.edu.unidep.model.Carro;
import org.edu.unidep.repository.CarroRepository;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;


@ApplicationScoped
public class CarroService {

    private final CarroRepository carroRepository;

    @Inject
    public CarroService(CarroRepository carroRepository) {
        this.carroRepository = carroRepository;
    }

    @Transactional
    public Carro atualizar(Long id, Carro carro) {
        Carro carroEncontrado = carroRepository.buscarPorCodigo(id);
        carroEncontrado.setNome(carro.getNome());
        carroEncontrado.setMarca(carro.getMarca());
        carroEncontrado.setCor(carro.getCor());
        carroEncontrado.setAno(carro.getAno());
        carroEncontrado.setValor(carro.getValor());
        return carroEncontrado;
    }
}