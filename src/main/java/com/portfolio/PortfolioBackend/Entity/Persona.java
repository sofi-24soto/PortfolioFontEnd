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
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     private int id_persona;
    
    @NotNull
    @Size(min = 1, max = 45, message = "no cumple con la longitud" )
     private String nombre;
    
    @NotNull
    @Size(min = 1, max = 45, message = "no cumple con la longitud" )
     private String apellido;
    
    @NotNull
    @Size(min = 1, max = 75, message = "no cumple con la longitud" )
     private String titulo;
    
    @NotNull
    @Size(min = 1, max = 500, message = "no cumple con la longitud" )
     private String sobreMi;
    
    @NotNull
    @Size(min = 1, max = 350, message = "no cumple con la longitud" )
     private String url_banner;
    
    @NotNull
    @Size(min = 1, max = 350, message = "no cumple con la longitud" )
     private String url_fotoPerfil;

    // Constructos Vacio
    public Persona() {
    }

    // Constructor con parametros
    public Persona(String nombre, String apellido, String titulo, String sobreMi, String url_banner, String url_fotoPerfil) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.sobreMi = sobreMi;
        this.url_banner = url_banner;
        this.url_fotoPerfil = url_fotoPerfil;
    }
     
    // Getters y Setters

    public int getId_persona() {
        return id_persona;
    }

    public void setId_persona(int id_persona) {
        this.id_persona = id_persona;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getSobreMi() {
        return sobreMi;
    }

    public void setSobreMi(String sobreMi) {
        this.sobreMi = sobreMi;
    }

    public String getUrl_banner() {
        return url_banner;
    }

    public void setUrl_banner(String url_banner) {
        this.url_banner = url_banner;
    }

    public String getUrl_fotoPerfil() {
        return url_fotoPerfil;
    }

    public void setUrl_fotoPerfil(String url_fotoPerfil) {
        this.url_fotoPerfil = url_fotoPerfil;
    }
          
       
}
