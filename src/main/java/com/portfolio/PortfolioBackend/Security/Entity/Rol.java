/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.PortfolioBackend.Security.Entity;

import com.portfolio.PortfolioBackend.Security.Enums.RolNombre;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;

/**
 *
 * @author Sofi
 */
@Entity
public class Rol {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
     
    @NotNull
    @Enumerated(EnumType.STRING)
    private RolNombre rolNombre;

    // Constructor vacio
    public Rol() {
    }
    
    
    // Constructor con parametros
    public Rol(RolNombre rolNombre) {
        this.rolNombre = rolNombre;
    }
    
    
    // Getters y Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public RolNombre getRolNombre() {
        return rolNombre;
    }

    public void setRolNombre(RolNombre rolNombre) {
        this.rolNombre = rolNombre;
    }
    
}
