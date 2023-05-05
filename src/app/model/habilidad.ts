export class Habilidad {
    id_habilidad?: number;
    nombre : string;
    porcentaje : number;


    constructor(nombre: string, porcentaje: number){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }

}
