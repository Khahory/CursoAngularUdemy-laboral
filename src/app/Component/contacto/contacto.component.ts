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
    this.contacto_usuario = new ContactoUsuario('', '', 0);
  }

  ngOnInit() {
  }

  private onSummit() {
    console.log(this.contacto_usuario);
  }

}
