/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.PortfolioBackend.Security.Repository;

import com.portfolio.PortfolioBackend.Security.Entity.Rol;
import com.portfolio.PortfolioBackend.Security.Entity.Usuario;
import com.portfolio.PortfolioBackend.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Sofi
 */
@Repository
public interface iUsuarioRepository extends JpaRepository<Usuario, Integer> {
    //Busca por nombre usuario
    Optional<Usuario> findByNombreUsuario(String nombreUsuario);
    
    //Existe nombre usuario
    boolean existsByNombreUsuario(String nombreUsuario);
    
    // Existe email
    boolean existsByEmail(String email);
   
}
