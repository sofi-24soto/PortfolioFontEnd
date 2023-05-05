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
public class Experiencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     private int id_experiencia;
    
    @NotNull
    @Size(min = 1, max = 45, message = "no cumple con la longitud" )
     private String nombre;
       
    @NotNull
    @Size(min = 1, max = 500, message = "no cumple con la longitud" )
     private String url;
       
    @NotNull
    @Size(min = 1, max = 55, message = "no cumple con la longitud" )
     private String puesto;
        
    @NotNull
    @Size(min = 1, max = 500, message = "no cumple con la longitud" )
     private String url_logoEmpresa;
       
    @NotNull
    @Size(min = 1, max = 500, message = "no cumple con la longitud" )
     private String descripcion;
 
    @Temporal(jakarta.persistence.TemporalType.DATE)
    private Date fechaInicio;
    
    @Temporal(jakarta.persistence.TemporalType.DATE)
    private Date fechaFin; 
    
       // Constructor vacio
      public Experiencia() {
      }
      
      // Constructor con parametros

    public Experiencia(String nombre,String url, String puesto, String url_logoEmpresa, String descripcion, Date fechaInicio, Date fechaFin) {
        this.nombre = nombre;
        this.url = url;
        this.puesto = puesto;
        this.url_logoEmpresa = url_logoEmpresa;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
       
    }

    public int getId_experiencia() {
        return id_experiencia;
    }

    public void setId_experiencia(int id_experiencia) {
        this.id_experiencia = id_experiencia;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getPuesto() {
        return puesto;
    }

    public void setPuesto(String puesto) {
        this.puesto = puesto;
    }

    public String getUrl_logoEmpresa() {
        return url_logoEmpresa;
    }

    public void setUrl_logoEmpresa(String url_logoEmpresa) {
        this.url_logoEmpresa = url_logoEmpresa;
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
