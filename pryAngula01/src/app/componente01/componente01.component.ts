import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-componente01',
  templateUrl: './componente01.component.html',
  styleUrls: ['./componente01.component.scss']
})
export class Componente01Component implements OnInit {
  @Input() entrada: string = "";
  nombreBoton = "hola mundo xyz";
  


  constructor() { }

  ngOnInit(): void {
    this.sumar()
  }

  sumar() {
    console.log('lol')
    console.log("estoy sumando....")
    console.error("este viene x console.error")
    console.info("mi console info....")
    console.warn("consol. warm")
  }
}
