/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Controller;

import com.portfolio.PortfolioBackend.Entity.Educacion;
import com.portfolio.PortfolioBackend.Service.EducacionService;
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
@RequestMapping("/educacion")
@CrossOrigin("*")
public class EducacionController {
    @Autowired
   public EducacionService educacionS;   

    //Obtener lista de educacion
     @GetMapping("/lista")
     @ResponseBody
     public List <Educacion> getEducacion(){
       return educacionS.getEducacion();
     }
    
     // Ver educacion
     @GetMapping("/ver/{id}")
     @ResponseBody
     public Educacion verEducacion(@PathVariable int id){
       return educacionS.findEducacion(id);
     }
     
     // Crear educacion
     @PostMapping("/crear")
     public String addEducacion(@RequestBody Educacion educacion){
      educacionS.addEducacion(educacion);
      return "Educacion ha sido creada correctamente";
     }
     
     // Borrar educacion
     @DeleteMapping("/borrar/{id}")
     public String deleteEducacion(@PathVariable int id){
      educacionS.deleteEducacion(id);
      return "Educacion ha sido borrada correctamente";
     }
     
     // Editar educacion
     @PutMapping("/editar")
     public void updateEducacion(@RequestBody Educacion educacion){
       educacionS.updateEducacion(educacion);
     }
}
