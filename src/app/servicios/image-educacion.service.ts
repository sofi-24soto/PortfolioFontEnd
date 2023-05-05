import { Injectable } from '@angular/core';
import { Storage, list, ref, uploadBytes, getDownloadURL} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageEducacionService {
  urlEducacion: string = "";
  constructor(private storage : Storage) { }

  public uploadImg($event: any, name: string){
    const file = $event.target.files[0]
    //console.log(file);
    const imgRef = ref(this.storage, `fotoEducacion/` + name)
    uploadBytes(imgRef, file)
    .then(response => {
      this.getImagesEducacion()
    })
    .catch(error => console.log(error))
  }
 
  getImagesEducacion(){
    const imagesRef = ref(this.storage, 'fotoEducacion')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.urlEducacion = await getDownloadURL(item);
        console.log("La url de foto educacion es: " + this.urlEducacion);
      }
    })
    .catch(error => console.log(error))
  }
}
