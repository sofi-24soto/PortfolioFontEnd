/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Controller;

import com.portfolio.PortfolioBackend.Entity.Persona;
import com.portfolio.PortfolioBackend.Service.PersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Sofi
 */
@RestController
@RequestMapping("/persona")
@CrossOrigin("*")
public class PersonaController {
    @Autowired
   public PersonaService personaS;   

    //Obtener lista de persona
     @GetMapping("/lista")
     @ResponseBody
     public List <Persona> getPersona(){
       return personaS.getPersona();
     }
    
     // Ver persona
     @GetMapping("/ver/{id}")
     @ResponseBody
     public Persona verPersona(@PathVariable int id){
       return personaS.findPersona(id);
     }
     
     // Crear persona
     @PostMapping("/crear")
     public String addPersona(@RequestBody Persona persona){
      personaS.addPersona(persona);
      return "La persona ha sido creada correctamente";
     }
     
     // Borrar persona
     @DeleteMapping("/borrar/{id}")
     public String deletePersona(@PathVariable int id){
      personaS.deletePersona(id);
      return "La persona ha sido borrada correctamente";
     }
     
     // Editar persona
     @PutMapping("/editar")
     public String updatePersona(@RequestBody Persona persona){
       personaS.updatePersona(persona);
       return "La persona ha sido modificada correctamente";
     }
}
