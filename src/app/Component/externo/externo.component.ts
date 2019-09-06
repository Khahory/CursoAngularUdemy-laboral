import { Component, OnInit } from '@angular/core';
import {PeticionesService} from '../../Services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  //  Variables
  private user: any;
  private idUser: any;
  private fecha: any; //  Creado pipes de fecha

  constructor(
    private _peticionesService: PeticionesService
  ) { this.idUser = 1 }

  ngOnInit() {
    this.fecha = new Date();
    this.getUser();
  }

  private getUser(){
    this.user = false;
    //  Uso del servicio PeticionesService
    this._peticionesService.getUser(this.idUser).subscribe(
      result => {
        console.log(result.data); // Aqui obtenemos el resultado de la consulta
        this.user = result.data;
      },
      error => {
        console.warn(<any>error)
      }
    )
  }

}
