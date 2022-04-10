import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() toogle!:boolean;
  generic=false;
  generic2=false;
  decor1=false;
  decor2=true;
  prueba2!:FormGroup

  constructor(private formBuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.validator();
  }

  mode(toogle:boolean){
    console.log(toogle,'homeeeeee')
    if(toogle===true){
      this.generic=true;
      this.generic2=true;
      this.decor1=true;
      this.decor2=false;
    }else{
      this.generic=false;
      this.generic2=false;
      this.decor1=false;
      this.decor2=true;
    }

  }

  validator(){
    this.prueba2 =this.formBuilder.group({
      name:[''],
      email:[''],
      message:['']
    })
  }

}
