import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-items-carrusel',
  templateUrl: './items-carrusel.component.html',
  styleUrls: ['./items-carrusel.component.css']
})
export class ItemsCarruselComponent implements OnInit {
  colorCheck=true

  constructor() { 

  }

  ngOnInit(): void {

  }

  voltearColor(){
    this.colorCheck=!this.colorCheck
  }
  
 
}
