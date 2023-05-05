export class Educacion {
    id_educacion?:number;
    url_logoEstudio : string;
    nombre : string;
    estudio : string;
    url_Estudio : string;
    descripcion : string;
    fechaInicio : string;
    fechaFin : string;
  

    constructor(url_logoEstudio:string,nombre:string, estudio:string, url_Estudio:string,  descripcion : string, fechaInicio: string, fechaFin : string){
        this.url_logoEstudio = url_logoEstudio;
        this.nombre = nombre;
        this.estudio = estudio;
        this.url_Estudio = url_Estudio;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}
