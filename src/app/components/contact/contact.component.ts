import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { MessagesService } from 'src/app/services/messages.service'


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
  sendForm!:FormGroup
  modal=false;

  constructor(private formBuilder:FormBuilder,
              private _messageService:MessagesService
    ) {}

  ngOnInit(): void {
    this.validator();
  }

  mode(toogle:boolean){
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
    this.sendForm =this.formBuilder.group({
      name:['',[
            Validators.required,
            Validators.minLength(5)
            ]],
      email:['',[
            Validators.required,
            Validators.email,
            Validators.pattern(
              /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            ),
      ]],
      message:['',[
            Validators.required,
            Validators.minLength(5)
      ]]
    })

   


  }
  
  addMessage(): void{
    console.log(this.sendForm.valid)
    if(this.sendForm.invalid){
        return;
      }
      
      let dataSend:any={
        name:this.sendForm.value.name,
        email:this.sendForm.value.email,
        message: this.sendForm.value.message
      }
  
      this._messageService.sendMessage(dataSend).then(()=>{
        console.log('aplicante agregado con exito')
      })

      this.onResetForm();
  }

  onResetForm(){
    this.sendForm.reset();
    setTimeout(()=>{
      this.modal=true;
    },1000)
    setTimeout(()=>{
      this.modal=false;
    },5000)
    
    
  }

}
