/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;


/**
 *
 * @author Sofi
 */
@Entity
public class Redes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     private int id_redes;
     
     
    @NotNull
    @Size(min = 1, max = 200, message = "no cumple con la longitud" )
     private String url_redes;
    
    @NotNull
    @Size(min = 1, max = 55, message = "no cumple con la longitud" )
     private String icoFont;
    
   
    
    // Constructor vacio
    public Redes() {
    }
    
    // Contructor con parametros
    public Redes( String url_redes, String icoFont) {
        this.url_redes = url_redes;
        this.icoFont = icoFont;
       
    }
    
    // Getters y setters
    public int getId_redes() {
        return id_redes;
    }

    public void setId_redes(int id_redes) {
        this.id_redes = id_redes;
    }

    public String getUrl_redes() {
        return url_redes;
    }

    public void setUrl_redes(String url_redes) {
        this.url_redes = url_redes;
    }

    public String getIcoFont() {
        return icoFont;
    }

    public void setIcoFont(String icoFont) {
        this.icoFont = icoFont;
    }
    
 

    
    
}
