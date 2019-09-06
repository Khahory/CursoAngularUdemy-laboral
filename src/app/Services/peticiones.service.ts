import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

// Injectamos el servicio

@Injectable()
export class PeticionesService {
  public url: string;
  // tslint:disable-next-line:variable-name
  constructor(public _http: HttpClient) {
    this.url = 'https://reqres.in';
  }

  //  Obtener la respuesta de la url (esto es un servicio)
  getUser(idUser: any): Observable<any> { // si queremos poner result.data debemos retornar un Observable<any>
    return this._http.get(this.url + '/api/users/' +idUser);
  }

//  Agregar un nuevo usuario a la api
  addUser(user): Observable<any> {
    let params = JSON.stringify(user); // Convertir objetos JS a JSON
    let headers = new HttpHeaders().set('Content-Type', 'application/json'); // Creando cabecera

    return this._http.post(this.url +'/api/users', params, {headers: headers}); // Haciendo el post
  }

}
