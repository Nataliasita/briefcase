import { Component, OnInit,Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-items-carrusel',
  templateUrl: './items-carrusel.component.html',
  styleUrls: ['./items-carrusel.component.css']
})
export class ItemsCarruselComponent implements OnInit {

  informationModels=[
    {
      name:'rad1',
      title:'Chimuelo',
      image:'./../../../assets/videos/dragon.mp4'
    },
    {
      name:'rad2',
      title:'Game character angel',
      image:'./../../../assets/videos/angel.mp4'
    },
    {
      name:'rad3',
      title:'Stich',
      image:'./../../../assets/videos/stich.mp4'
    },
    {
      name:'rad4',
      title:'Pikachu - Pokemon',
      image:'./../../../assets/videos/pikachu.mp4'
    },
    {
      name:'rad5',
      title:'Game character Dino',
      image:'./../../../assets/videos/dino.mp4'
    },
    {
      name:'rad6',
      title:'Harry potter',
      image:'./../../../assets/videos/cuadradoharry.mp4'
    },
    {
      name:'rad7',
      title:'Game character princess',
      image:'./../../../assets/videos/princess.mp4'
    },
    {
      name:'rad8',
      title:'Jirlypuff - pokemon',
      image:''
    },
    {
      name:'rad9',
      title:'Kerberos - Sakura Cardcaptor',
      image:'./../../../assets/videos/keros.mp4'
    },
  ]

  defaulVideo:boolean=true;
  selectVideo:boolean=false;
  imageVideo:any;
  videoName:any;

  constructor() { 

  }

  ngOnInit(): void {
  }

  viewModel(value:any){
    console.log(value,'eve')
    this.defaulVideo=false;

    this.informationModels.forEach(element => {
      if(element.name == value){
        this.selectVideo=true;
        this.imageVideo= element.image;
        this.videoName=element.title;
      }

    });
  }
  
 
}
