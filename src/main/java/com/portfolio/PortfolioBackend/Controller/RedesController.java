/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Controller;

import com.portfolio.PortfolioBackend.Entity.Redes;
import com.portfolio.PortfolioBackend.Service.RedesService;
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
@RequestMapping("/redes")
@CrossOrigin("*")
public class RedesController {
    @Autowired
   public RedesService redS;   

    //Obtener lista de redes
     @GetMapping("/lista")
     @ResponseBody
     public List <Redes> getRedes(){
       return redS.getRedes();
     }
    
     // Ver redes
     @GetMapping("/ver/{id}")
     @ResponseBody
     public Redes verRedes(@PathVariable int id){
       return redS.findRedes(id);
     }
     
     // Crear redes
     @PostMapping("/crear")
     public String addRedes(@RequestBody Redes redes){
      redS.addRedes(redes);
      return "Redes ha sido creada correctamente";
     }
     
     // Borrar redes
     @DeleteMapping("/borrar/{id}")
     public String deleteRedes(@PathVariable int id){
      redS.deleteRedes(id);
      return "Redes ha sido borrada correctamente";
     }
     
     // Editar redes
     @PutMapping("/editar")
     public void updateRedes(@RequestBody Redes redes){
       redS.updateRedes(redes);
     }
}
