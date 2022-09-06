import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente02',
  templateUrl: './componente02.component.html',
  styleUrls: ['./componente02.component.scss']
})
export class Componente02Component implements OnInit {

  
  @Input() letras: any[] = [];

  @Input() ciudades: any[] = [];

  @Output() envioPadre = new EventEmitter<any>();


  @Input() boton: string = "";
  nombreBoton = "boton Emiter";

  constructor() { }

  ngOnInit(): void {
  }

   enviarPadre() : void {
      this.envioPadre.emit("Esto envio desde padre")
   }


}
