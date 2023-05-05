export class Persona {
    id_persona?:number;
    url_banner: string;
    url_fotoPerfil: string;
    nombre: string;
    apellido: string;
    titulo : string;
    sobreMi : string;
    

    constructor(url_banner:string, url_fotoPerfil: string, nombre: string, apellido : string,titulo: string, sobreMi:string){
        this.url_banner = url_banner;
        this.url_fotoPerfil = url_fotoPerfil;
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.sobreMi = sobreMi;
        
    }
}
