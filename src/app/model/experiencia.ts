export class Experiencia {

    id_experiencia?:number;
    url_logoEmpresa : string;
    nombre : string;
    url: string;
    puesto : string;
    descripcion : string;
    fechaInicio: string;
    fechaFin: string;
   

    constructor(url_logoEmpresa:string,nombre:string,url:string,  puesto:string, descripcion:string, fechaInicio: string, fechaFin: string){
        this.url_logoEmpresa = url_logoEmpresa;
        this.nombre = nombre;
        this.url = url;
        this.puesto = puesto;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        
    }

}
