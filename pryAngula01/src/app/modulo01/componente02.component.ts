import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente02',
  templateUrl: './componente02.component.html',
  styleUrls: ['./componente02.component.scss']
})
export class Componente02Component implements OnInit {

  @Input() letras: any[] = [];
  constructor() { }

  ngOnInit(): void {

   
  }


}
