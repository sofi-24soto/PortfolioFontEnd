/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Controller;


import com.portfolio.PortfolioBackend.Entity.Experiencia;
import com.portfolio.PortfolioBackend.Service.ExperienciaService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

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
@RequestMapping("/experiencia")
@CrossOrigin("*")
public class ExperienciaController {
    @Autowired
    private ExperienciaService sExperiencia;
    
     //Obtener lista de experiencia
     @GetMapping("/lista")
     @ResponseBody
     public List <Experiencia> getExperiencia(){
       return sExperiencia.getExperiencia();
     }
    
     // Ver experiencia
     @GetMapping("/ver/{id}")
     @ResponseBody
     public Experiencia verExperiencia(@PathVariable int id){
       return sExperiencia.findExperiencia(id);
     }
     
     // Crear experiencia
     @PostMapping("/crear")
     public String addExperiencia(@RequestBody Experiencia experiencia){
      sExperiencia.addExperiencia(experiencia);
      return "Experiencia ha sido creada correctamente";
     }
     
     // Borrar experiencia
     @DeleteMapping("/borrar/{id}")
     public String deleteExperiencia(@PathVariable int id){
      sExperiencia.deleteExperiencia(id);
      return "Experiencia ha sido borrada correctamente";
     }
     
     // Editar experiencia
     @PutMapping("/editar")
     public String updateExperiencia(@RequestBody Experiencia experiencia){
       sExperiencia.updateExperiencia(experiencia);
       return "Experiencia ha sido modificada correctamente";
     }
    
    
    
}
