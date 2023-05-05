/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Service;

import com.portfolio.PortfolioBackend.Entity.Redes;
import com.portfolio.PortfolioBackend.Repository.RedesRepository;
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
public class RedesService {
   @Autowired
   public RedesRepository redesRepository;
   
   // Lista de redes
   public List<Redes> getRedes(){
    List<Redes> listaRedes = redesRepository.findAll();
    return listaRedes;
   }
   
   // Crear redes
   public void addRedes(Redes redes){
    redesRepository.save(redes);
   }
   
   // Borrar redes
   public void deleteRedes(int id){
     redesRepository.deleteById(id);
   }
   
   // Editar redes
   public void updateRedes(Redes redes){
    redesRepository.save(redes);
   }
   
   // Buscar redes
   public Redes findRedes(int id){
    Redes redes = redesRepository.findById(id).orElse(null);
    return redes;
   }
}
