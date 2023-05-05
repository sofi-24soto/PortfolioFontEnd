/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Security.Service;

import com.portfolio.PortfolioBackend.Security.Entity.Rol;
import com.portfolio.PortfolioBackend.Security.Enums.RolNombre;
import com.portfolio.PortfolioBackend.Security.Repository.iRolRepository;
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
public class RolService {
    @Autowired
    iRolRepository irolRepository;
    
    // Obtener por rol nombre
    public Optional<Rol> getbyRolNombre(RolNombre rolNombre){
        return irolRepository.findByRolNombre(rolNombre);
    }
    
    // guardar usuario
    public void save(Rol rol){
        irolRepository.save(rol);
    }
}
