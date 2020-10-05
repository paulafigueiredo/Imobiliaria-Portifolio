package com.imobiliaria.imobiliaria.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.imobiliaria.imobiliaria.model.ProdutoModel;

@Repository
public interface ProdutoRepository extends JpaRepository<ProdutoModel, Long> {
	public List<ProdutoModel> findAllByDescricaoContainingIgnoreCase( String descricao);
}
