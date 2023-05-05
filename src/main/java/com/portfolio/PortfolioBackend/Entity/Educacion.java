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
public class Educacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_educacion;
    
    @NotNull
    @Size(min = 1, max = 45, message = "no cumple con la longitud" )
    private String nombre;
    
    @NotNull
    @Size(min = 1, max = 45, message = "no cumple con la longitud" )
    private String estudio;
    
    @NotNull
    @Size(min = 1, max = 500, message = "no cumple con la longitud" )
    private String url_Estudio;
    
    @NotNull
    @Size(min = 1, max = 500, message = "no cumple con la longitud" )
    private String url_logoEstudio;
    
    @NotNull
    @Size(min = 1, max = 500, message = "no cumple con la longitud" )
    private String descripcion;
   
    @Temporal(jakarta.persistence.TemporalType.DATE)
    private Date fechaInicio;
    
    @Temporal(jakarta.persistence.TemporalType.DATE)
    private Date fechaFin; 
    
    // Constructor vacio
    public Educacion() {
    }
    
    // Constructor con parametros
    public Educacion(String nombre, String estudio, String url_Estudio, String url_logoEstudio, String descripcion, Date fechaInicio, Date fechaFin) {
        this.nombre = nombre;
        this.estudio = estudio;
        this.url_Estudio = url_Estudio;
        this.url_logoEstudio = url_logoEstudio;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    
    
    // Getters y Setters
    public int getId_educacion() {
        return id_educacion;
    }

    public void setId_educacion(int id_educacion) {
        this.id_educacion = id_educacion;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEstudio() {
        return estudio;
    }

    public void setEstudio(String estudio) {
        this.estudio = estudio;
    }

    public String getUrl_Estudio() {
        return url_Estudio;
    }

    public void setUrl_Estudio(String url_Estudio) {
        this.url_Estudio = url_Estudio;
    }

    public String getUrl_logoEstudio() {
        return url_logoEstudio;
    }

    public void setUrl_logoEstudio(String url_logoEstudio) {
        this.url_logoEstudio = url_logoEstudio;
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
