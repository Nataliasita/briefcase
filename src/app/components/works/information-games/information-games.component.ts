import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-information-games',
  templateUrl: './information-games.component.html',
  styleUrls: ['./information-games.component.css']
})
export class InformationGamesComponent implements OnInit {
  @Input() responseTitleDarkG:Boolean=false;
  @Input() responseDarkContainer3:Boolean=false;
  @Input() responseDarkContainer2:Boolean=false;

  lookTwoinformation:boolean=false;
  lookThreeinformation:boolean=false;
  lookTwoinformation2:boolean=false;
  lookThreeinformation2:boolean=false;
  lookTwoinformation3:boolean=false;
  lookThreeinformation3:boolean=false;
  lookTwoinformation4:boolean=false;
  lookThreeinformation4:boolean=false;
  lookTwoinformation5:boolean=false;
  lookThreeinformation5:boolean=false;
  activeGameplay1:boolean=false;
  activeGameplay2:boolean=false;
  activeGameplay3:boolean=false;
  activeGameplay4:boolean=false;
  activeGameplay5:boolean=false;

  valueSelect:any;

  games=[
    {
      id:1, 
      name:'HuntersMoon',
      href:'https://daskalosjsm.itch.io/game-group-3',
      description1:'An angel travels to hell in search of the sacred arrow in order to defeat Asmodeus and end the war.',
      description2:'HuntersMoon es un survival horror de aventura en tercera persona inspirado en los libros de cazadores de sombras.',
      referents:'Dark soul, inside, COD:Zombies, Returnal ',
      caracteristics: 'Videojuego 3D, Género: Survival horror/Accion, Tercera persona, Plataforma:Pc, Windows , Modo de juego: Single player, Dev & Art : Sebastian Medina, Natalia Gonzalez, Andres piñeros',
      tools:'Unity, Blender',
      context:'2 Jam Generation',
      image:'./../../../assets/png/portada-hunters.png',
    },
    {
      id:2, 
    },
    {
      id:3, 
    },
    {
      id:4, 
    },
    {
      id:5, 
    },
    {},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  actionsButtons(value:any)
  {
    this.valueSelect=value;
    console.log(this.valueSelect)
    if(value==='g1'){
      this.lookThreeinformation =! this.lookThreeinformation;
      this.lookTwoinformation =! this.lookTwoinformation;
    } else if(value==='g2')
    {
      this.lookThreeinformation2 =! this.lookThreeinformation2;
      this.lookTwoinformation2 =! this.lookTwoinformation2;
    }else if(value==='g3')
    {
      this.lookThreeinformation3 =! this.lookThreeinformation3;
      this.lookTwoinformation3 =! this.lookTwoinformation3;
    }
    else if(value==='g4')
    {
      this.lookThreeinformation4 =! this.lookThreeinformation4;
      this.lookTwoinformation4 =! this.lookTwoinformation4;
    }else if(value==='g5')
    {
      this.lookThreeinformation5 =! this.lookThreeinformation5;
      this.lookTwoinformation5 =! this.lookTwoinformation5;
    }
    
    
    
  }

  activeGameplay(value:any)
  {
    if(value==='game1')
    {
      this.activeGameplay1 = true;
    }
    else if(value==='game2')
    {
      this.activeGameplay2 = true;
    }
    else if(value==='game3')
    {
      this.activeGameplay3 = true;
    }
    else if(value==='game4')
    {
      this.activeGameplay4 = true;
    }
    else if(value==='game5')
    {
      this.activeGameplay5 = true;
    }
  }

  closeactiveGameplay(value:any)
  {
    if(value ==='close1')
    {
      this.activeGameplay1 = false;
    }
    else if(value ==='close2')
    {
      this.activeGameplay2 = false;
    }
    else if(value ==='close3')
    {
      this.activeGameplay3 = false;
    }
    else if(value ==='close4')
    {
      this.activeGameplay4 = false;
    }
    else if(value ==='close5')
    {
      this.activeGameplay5 = false;
    }
  }
  

}
