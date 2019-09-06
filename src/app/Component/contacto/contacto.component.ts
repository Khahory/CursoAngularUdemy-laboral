import { Component, OnInit } from '@angular/core';
import {ContactoUsuario} from '../../Models/ContactoUsuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  //  Variables
  private contacto_usuario: ContactoUsuario;

  constructor() {
    this.contacto_usuario = new ContactoUsuario('', '', null);
  }

  ngOnInit() {
  }

  private onSummit(form) {
    console.log(this.contacto_usuario);
    form.reset(); //  Resetea el form cuando preciona click
  }
}
