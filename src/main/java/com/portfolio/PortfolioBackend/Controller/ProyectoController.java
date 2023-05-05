/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Controller;

import com.portfolio.PortfolioBackend.Entity.Proyecto;
import com.portfolio.PortfolioBackend.Service.ProyectoService;
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
@RequestMapping("/proyecto")
@CrossOrigin("*")
public class ProyectoController {
    @Autowired
   public ProyectoService proyectoS;   

    //Obtener lista de proyecto
     @GetMapping("/lista")
     @ResponseBody
     public List <Proyecto> getProyecto(){
       return proyectoS.getProyecto();
     }
    
     // Ver proyecto
     @GetMapping("/ver/{id}")
     @ResponseBody
     public Proyecto verProyecto(@PathVariable int id){
       return proyectoS.findProyecto(id);
     }
     
     // Crear proyecto
     @PostMapping("/crear")
     public String addEducacion(@RequestBody Proyecto proyecto){
      proyectoS.addProyecto(proyecto);
      return "El Proyecto ha sido creado correctamente";
     }
     
     // Borrar proyecto
     @DeleteMapping("/borrar/{id}")
     public String deleteEducacion(@PathVariable int id){
      proyectoS.deleteProyecto(id);
      return "El Proyecto ha sido borrada correctamente";
     }
     
     // Editar proyecto
     @PutMapping("/editar")
     public void updateProyecto(@RequestBody Proyecto proyecto){
       proyectoS.updateProyecto(proyecto);
     }
}
