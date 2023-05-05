export class Proyecto {
    id_proyecto? : number;
    url_imgProyecto : string;
    tituloProyecto : string;
    url_proyecto : string;
    descripcion : string;
    fechaInicio : string;
    fechaFin: string;

    constructor( url_imgProyecto:string, tituloProyecto:string, url_proyecto:string, descripcion:string, fechaInicio: string, fechaFin:string){
        this.url_imgProyecto = url_imgProyecto;
        this.tituloProyecto = tituloProyecto;
        this.url_proyecto = url_proyecto;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

}
