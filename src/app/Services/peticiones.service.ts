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

}
