/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Service;

import com.portfolio.PortfolioBackend.Entity.Experiencia;
import com.portfolio.PortfolioBackend.Repository.ExperienciaRepository;
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
public class ExperienciaService {
   @Autowired
   public ExperienciaRepository experienciaRepository;
   
    // Lista de experiencia
   public List<Experiencia> getExperiencia(){
    List<Experiencia> listaExperiencia = experienciaRepository.findAll();
    return listaExperiencia;
   }
   
   // Crear experiencia
   public void addExperiencia(Experiencia experiencia){
    experienciaRepository.save(experiencia);
   }
   
   // Borrar experiencia
   public void deleteExperiencia(int id){
     experienciaRepository.deleteById(id);
   }
   
   // Editar experiencia
   public void updateExperiencia(Experiencia experiencia){
    experienciaRepository.save(experiencia);
   }
   
   // Buscar experiencia
   public Experiencia findExperiencia(int id){
    Experiencia experiencia = experienciaRepository.findById(id).orElse(null);
    return experiencia;
   }
    
 
}
