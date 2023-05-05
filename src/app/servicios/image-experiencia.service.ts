import { Injectable } from '@angular/core';
import { Storage, list, ref, uploadBytes, getDownloadURL} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageExperienciaService {
  urlExperiencia: string = "";
  constructor(private storage : Storage) { }

  public uploadImg($event: any, name: string){
    const file = $event.target.files[0]
    //console.log(file);
    const imgRef = ref(this.storage, `fotoExperiencia/` + name)
    uploadBytes(imgRef, file)
    .then(response => {
      this.getImagesExperiencia()
    })
    .catch(error => console.log(error))
  }
 
  getImagesExperiencia(){
    const imagesRef = ref(this.storage, 'fotoExperiencia')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.urlExperiencia = await getDownloadURL(item);
        console.log("La url de foto experiencia es: " + this.urlExperiencia);
      }
    })
    .catch(error => console.log(error))
  }
}
