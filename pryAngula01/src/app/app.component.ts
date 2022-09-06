import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pryAngula01';
  mensajeHijo = "";
  cities: City[] =[];

  selectedCities: City[] = [];

  constructor() {
    /*
      this.cities = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];
      */
  }

  recibeHijo(mensaje:any): void{
    console.log(mensaje, "comentario:")
    this.mensajeHijo = mensaje; 
   }
  

}

interface City {
  name: string,
  code: string
}
