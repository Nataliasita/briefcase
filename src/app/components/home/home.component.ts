import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() toogle!:boolean;

  atributesLigth=true;
  atributesDark=false;
  generic=false;
  generic2=false;


  constructor() { 

  }

  ngOnInit(): void {
  }

  mode(toogle:boolean){
    console.log(toogle,'homeeeeee')
    if(toogle===true){
      this.atributesLigth=false;
      this.atributesDark=true;
      this.generic=true;
      this.generic2=true;
  
    }else{
      this.atributesLigth=true;
      this.atributesDark=false;
      this.generic=false;
      this.generic2=false;
    }

  }



}
