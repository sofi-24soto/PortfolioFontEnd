/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.PortfolioBackend.Security.Repository;

import com.portfolio.PortfolioBackend.Security.Entity.Rol;
import com.portfolio.PortfolioBackend.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Sofi
 */
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    
     // Buscar por rol nombre
     Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
