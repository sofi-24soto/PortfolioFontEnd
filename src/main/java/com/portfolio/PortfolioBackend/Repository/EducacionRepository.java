/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.PortfolioBackend.Repository;

import com.portfolio.PortfolioBackend.Entity.Educacion;
import com.portfolio.PortfolioBackend.Entity.Experiencia;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Sofi
 */
@Repository
public interface EducacionRepository extends JpaRepository<Educacion, Integer> {
  
}
