/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Security.Service;

import com.portfolio.PortfolioBackend.Security.Entity.Rol;
import com.portfolio.PortfolioBackend.Security.Entity.Usuario;
import com.portfolio.PortfolioBackend.Security.Enums.RolNombre;
import com.portfolio.PortfolioBackend.Security.Repository.iRolRepository;
import com.portfolio.PortfolioBackend.Security.Repository.iUsuarioRepository;
import jakarta.transaction.Transactional;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Sofi
 */
@Service
@Transactional
public class UsuarioService {
 
    @Autowired
    iUsuarioRepository iusuarioRepository;
    
    // Obtener por nombre usuario
    public Optional<Usuario> getByNombreUsuario (String nombreUsuario){
        return iusuarioRepository.findByNombreUsuario(nombreUsuario);
    }
    
    // Existe por nombre usuario
    public boolean existsByNombreUsuario (String nombreUsuario){
        return iusuarioRepository.existsByNombreUsuario(nombreUsuario);
    }
    
    // Existe por email
    public boolean existsByEmail (String email){
        return iusuarioRepository.existsByEmail(email);
    }
    
    // guardar usuario nuevo
    public void save(Usuario usuario){
        iusuarioRepository.save(usuario);
    }
}
