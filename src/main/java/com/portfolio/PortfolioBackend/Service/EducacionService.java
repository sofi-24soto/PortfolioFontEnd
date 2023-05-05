/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Service;

import com.portfolio.PortfolioBackend.Entity.Educacion;
import com.portfolio.PortfolioBackend.Repository.EducacionRepository;
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
public class EducacionService {
   @Autowired
   public EducacionRepository educacionRepository;
   
   // Lista de educacion
   public List<Educacion> getEducacion(){
    List<Educacion> listaEducacion = educacionRepository.findAll();
    return listaEducacion;
   }
   
   // Crear educacion
   public void addEducacion(Educacion educacion){
    educacionRepository.save(educacion);
   }
   
   // Borrar educacion
   public void deleteEducacion(int id){
     educacionRepository.deleteById(id);
   }
   
   // Editar educacion
   public void updateEducacion(Educacion educacion){
    educacionRepository.save(educacion);
   }
   
   // Buscar educacion
   public Educacion findEducacion(int id){
    Educacion educacion = educacionRepository.findById(id).orElse(null);
    return educacion;
   }
}
