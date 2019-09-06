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
  private new_usuario: any; //  Usuario por post con la API
  private save_user: any;

  constructor(
    private _peticionesService: PeticionesService
  ) {this.idUser = 1;
  //El formato tiene que ser igual a como esta en el JSON de la API
  this.new_usuario = {
    "name": "",
    "job": ""
  }
  this.save_user = this.new_usuario;
  }

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

  //  Llamar el servicio post usuario
  private onSubmit(form){
    this._peticionesService.addUser(this.new_usuario).subscribe(
      repuesta => {
        console.log(repuesta);
        this.save_user = repuesta;
        form.reset();
      },
      error => {
        console.warn(<any>error);
      }
    );
  }
}
