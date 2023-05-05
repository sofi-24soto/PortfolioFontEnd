export class Redes {
   id_redes? : number;
   nombre : string;
   url_redes : string;
   icoFont : string;

   constructor(url_redes: string, icoFont: string){
    this.url_redes = url_redes;
    this.icoFont = icoFont;
   }
}
