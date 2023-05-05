/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Service;

import com.portfolio.PortfolioBackend.Entity.Persona;
import com.portfolio.PortfolioBackend.Repository.PersonaRepository;
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
public class PersonaService {
   @Autowired
   public PersonaRepository personaRepository;
   
   // Lista de persona
   public List<Persona> getPersona(){
    List<Persona> listaPersona = personaRepository.findAll();
    return listaPersona;
   }
   
   // Crear persona
   public void addPersona(Persona persona){
    personaRepository.save(persona);
   }
   
   // Borrar persona
   public void deletePersona(int id){
     personaRepository.deleteById(id);
   }
   
   public void updatePersona(Persona persona){
    personaRepository.save(persona);
   }
   
   // Buscar persona
   public Persona findPersona(int id){
    Persona persona = personaRepository.findById(id).orElse(null);
    return persona;
   }
}
