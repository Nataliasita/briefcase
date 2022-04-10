import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
import{ Router } from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  generic=false;
  toogle!:boolean;
  icon_noche=false;
  icon_dia=true;
  positionHeader=false;
  statuscontact=false;
  statushome=false;
  statuswork=false;
  toogleView=true;
  positionOption=false;

  @Output() messageEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.changeContact();
    this.changeHome();
    this.changeWork();
  }
  constructor(private router: Router ) { }

  fieldsChange(values:any):void {
    // console.log(values.currentTarget.checked);
    let toogle= values.currentTarget.checked
    console.log(toogle,'prasdf')
    this.messageEvent.emit(toogle)

    if(toogle===true){
      this.generic=true;
      this.icon_dia=false;
      this.icon_noche=true;
      this.changeContact();
    }else{
      this.generic=false;
      this.icon_dia=true;
      this.icon_noche=false;
      this.changeContact();
    }

  }

  changeContact(){
    if(this.router.url==='/contact'){
      this.generic=true
      this.icon_noche=true;
      this.icon_dia=false;
      this.positionHeader=true;
      this.statuscontact=true;
      this.toogleView=false;
      this.positionOption=true;
    }
  }

  changeHome(){
    if(this.router.url==='/home'){
      this.statushome=true;
    }
  }
  changeWork(){
    if(this.router.url==='/work'){
      this.statuswork=true;
    }
  }

}
