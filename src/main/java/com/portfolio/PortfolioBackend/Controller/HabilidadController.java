/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Controller;

import com.portfolio.PortfolioBackend.Entity.Habilidad;
import com.portfolio.PortfolioBackend.Service.HabilidadService;
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
@RequestMapping("/habilidad")
@CrossOrigin("*")
public class HabilidadController {
    @Autowired
   public HabilidadService habilidadS;   

    //Obtener lista de habilidad
     @GetMapping("/lista")
     @ResponseBody
     public List <Habilidad> getHabilidad(){
       return habilidadS.getHabilidad();
     }
    
     // Ver habilidad
     @GetMapping("/ver/{id}")
     @ResponseBody
     public Habilidad verHabilidad(@PathVariable int id){
       return habilidadS.findHabilidad(id);
     }
     
     // Crear habilidad
     @PostMapping("/crear")
     public String addHabilidad(@RequestBody Habilidad habilidad){
      habilidadS.addHabilidad(habilidad);
      return "Habilidad ha sido creada correctamente";
     }
     
     // Borrar habilidad
     @DeleteMapping("/borrar/{id}")
     public String deleteHabilidad(@PathVariable int id){
      habilidadS.deleteHabilidad(id);
      return "Habilidad ha sido borrada correctamente";
     }
     
     // Editar habilidad
     @PutMapping("/editar")
     public void updateHabilidad(@RequestBody Habilidad habilidad){
       habilidadS.updateHabilidad(habilidad);
     }
    
}
