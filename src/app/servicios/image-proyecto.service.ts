import { Injectable } from '@angular/core';
import { Storage, list, ref, uploadBytes, getDownloadURL} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageProyectoService {
  urlProyecto: string = "";
  constructor(private storage : Storage) { }

  public uploadImg($event: any, name: string){
    const file = $event.target.files[0]
    //console.log(file);
    const imgRef = ref(this.storage, `fotoProyectos/` + name)
    uploadBytes(imgRef, file)
    .then(response => {
      this.getImagesProyecto()
      
    })
    .catch(error => console.log(error))
  }

  public clearUrl(){
    this.urlProyecto="";
  }
 
  getImagesProyecto(){
    const imagesRef = ref(this.storage, 'fotoProyectos')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.urlProyecto = await getDownloadURL(item);
        console.log("La url de foto proyecto es: " + this.urlProyecto);

      }
    })
    .catch(error => console.log(error))
  }
}
