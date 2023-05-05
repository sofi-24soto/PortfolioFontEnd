import { Injectable } from '@angular/core';
import { Storage, list, ref, uploadBytes, getDownloadURL} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagePortadaService {
  urlPortada: string = "";
  constructor(private storage : Storage) { }

  public uploadImg($event: any, name: string){
    const file = $event.target.files[0]
    //console.log(file);
    const imgRef = ref(this.storage, `fotoPortada/` + name)
    uploadBytes(imgRef, file)
    .then(response => {
      this.getImagesPortada()
    })
    .catch(error => console.log(error))
  }
 
  getImagesPortada(){
    const imagesRef = ref(this.storage, 'fotoPortada')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.urlPortada = await getDownloadURL(item);
        console.log("La url de foto portada es: " + this.urlPortada);
      }
    })
    .catch(error => console.log(error))
  }

}
