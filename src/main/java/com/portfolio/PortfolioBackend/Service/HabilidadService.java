/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Service;

import com.portfolio.PortfolioBackend.Entity.Habilidad;
import com.portfolio.PortfolioBackend.Repository.HabilidadRepository;
import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Sofi
 */
@Service
@Transactional
public class HabilidadService {
   @Autowired
   public HabilidadRepository habilidadRepository;
   
   // Lista de habilidad
   public List<Habilidad> getHabilidad(){
    List<Habilidad> listaHabilidad = habilidadRepository.findAll();
    return listaHabilidad;
   }
   
   // Crear habilidad
   public void addHabilidad(Habilidad habilidad){
    habilidadRepository.save(habilidad);
   }
   
   // Borrar habilidad
   public void deleteHabilidad(int id){
     habilidadRepository.deleteById(id);
   }
   
   // Editar habilidad
   public void updateHabilidad(Habilidad habilidad){
    habilidadRepository.save(habilidad);
   }
   
   // Buscar habilidad
   public Habilidad findHabilidad(int id){
    Habilidad habilidad = habilidadRepository.findById(id).orElse(null);
    return habilidad;
   }
}
