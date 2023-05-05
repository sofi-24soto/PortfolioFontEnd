/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.Date;

/**
 *
 * @author Sofi
 */
@Entity
public class Proyecto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_proyecto;
    
    @NotNull
    @Size(min = 1, max = 75, message = "no cumple con la longitud" )
     private String tituloProyecto;
    
    @NotNull
    @Size(min = 1, max = 500, message = "no cumple con la longitud" )   
     private String url_imgProyecto;
    
    @NotNull
    @Size(min = 1, max = 500, message = "no cumple con la longitud" ) 
     private String url_proyecto;
    
    @NotNull
    @Size(min = 1, max = 500, message = "no cumple con la longitud" )
    private String descripcion;
    
    @Temporal(jakarta.persistence.TemporalType.DATE)
    private Date fechaInicio;
    
    @Temporal(jakarta.persistence.TemporalType.DATE)
    private Date fechaFin; 
    
 
    
    // Constructor vacio
    public Proyecto() {
    }
    
    // Constructor con parametros
    public Proyecto(String tituloProyecto,String url_imgProyecto, String url_proyecto, String descripcion, Date fechaInicio, Date fechaFin) {
        this.tituloProyecto = tituloProyecto;
        this.url_imgProyecto = url_imgProyecto;
        this.url_proyecto = url_proyecto;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
     
    }
    
    // Getters y Setters

    public int getId_proyecto() {
        return id_proyecto;
    }

    public void setId_proyecto(int id_proyecto) {
        this.id_proyecto = id_proyecto;
    }

    public String getTituloProyecto() {
        return tituloProyecto;
    }

    public void setTituloProyecto(String tituloProyecto) {
        this.tituloProyecto = tituloProyecto;
    }

    public String getUrl_imgProyecto() {
        return url_imgProyecto;
    }

    public void setUrl_imgProyecto(String url_imgProyecto) {
        this.url_imgProyecto = url_imgProyecto;
    }

    public String getUrl_proyecto() {
        return url_proyecto;
    }

    public void setUrl_proyecto(String url_proyecto) {
        this.url_proyecto = url_proyecto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }
    
    
    
    
}
