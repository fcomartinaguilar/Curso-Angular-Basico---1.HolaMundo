import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html' 
  })
  export class BodyComponent {

    mostrar:boolean = false;

    //se puede poner public frase:any = {... }
    frase:any = {
      mensaje: "Menudo friki el profe",
      autor: "El profe"
    }

    personajes:string[] = ["Spiderman", "Venom", "El Duende Verde"];
  }