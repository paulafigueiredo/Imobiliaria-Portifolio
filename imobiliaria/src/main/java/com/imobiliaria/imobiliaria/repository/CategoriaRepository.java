package com.imobiliaria.imobiliaria.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.imobiliaria.imobiliaria.model.CategoriaModel;

@Repository
public interface CategoriaRepository extends JpaRepository<CategoriaModel, Long>{
	
	public List<CategoriaModel> findAllByTipoContainingIgnoreCase (String tipo);
	//buscando todos os tipos da CategoriaModel
}
