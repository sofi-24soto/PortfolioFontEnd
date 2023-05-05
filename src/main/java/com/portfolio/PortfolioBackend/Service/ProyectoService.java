/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Service;

import com.portfolio.PortfolioBackend.Entity.Proyecto;
import com.portfolio.PortfolioBackend.Repository.ProyectoRepository;
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
public class ProyectoService {
    @Autowired
   public ProyectoRepository proyectoRepository;
   
   // Lista de proyecto
   public List<Proyecto> getProyecto(){
    List<Proyecto> listaProyecto = proyectoRepository.findAll();
    return listaProyecto;
   }
   
   // Crear proyecto
   public void addProyecto(Proyecto proyecto){
    proyectoRepository.save(proyecto);
   }
   
   // Borrar proyecto
   public void deleteProyecto(int id){
     proyectoRepository.deleteById(id);
   }
   
   // Editar proyecto
   public void updateProyecto(Proyecto proyecto){
    proyectoRepository.save(proyecto);
   }
   
   // Buscar proyecto
   public Proyecto findProyecto(int id){
    Proyecto proyecto = proyectoRepository.findById(id).orElse(null);
    return proyecto;
   }
}
