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
  author2=false;
  author1=true;
  constructor() { 
  }

  ngOnInit(): void {
    
  }

  mode(toogle:boolean){ 
    if(toogle===true){
      this.atributesLigth=false;
      this.atributesDark=true;
      this.generic=true;
      this.generic2=true;
      this.author2=true;
      this.author1=false;
    }else{
      this.atributesLigth=true;
      this.atributesDark=false;
      this.generic=false;
      this.generic2=false;
      this.author2=false;
      this.author1=true;
    }

  }



}
