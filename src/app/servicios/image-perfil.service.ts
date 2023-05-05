import { Injectable } from '@angular/core';
import { Storage, list, ref, uploadBytes, getDownloadURL} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagePerfilService {
  urlPerfil: string = "";

  constructor(private storage : Storage) { }

  public uploadImg($event: any, name: string){
    const file = $event.target.files[0]
    //console.log(file);
    const imgRef = ref(this.storage, `fotoPerfil/` + name)
    uploadBytes(imgRef, file)
    .then(response => {
      this.getImagesPerfil()
    })
    .catch(error => console.log(error))
  }
 
  getImagesPerfil(){
    const imagesRef = ref(this.storage, 'fotoPerfil')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.urlPerfil = await getDownloadURL(item);
        console.log("La url de foto perfil es: " + this.urlPerfil);
      }
    })
    .catch(error => console.log(error))
  }
}
