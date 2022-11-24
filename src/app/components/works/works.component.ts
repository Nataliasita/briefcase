import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  @Input() toogle!:boolean;
  atributesLigth=true;
  atributesDark=false;
  generic=false;
  generic2=false;
  generic3=false;
  generic4=false;
  moreProducts:boolean=false;
  allModelings:boolean=false;
  allGames:boolean=true;
  valueChangeTitle:boolean=false;
  changeIconCarrusel1=true;
  changeIconCarrusel2=false;
  eventActiveModels:boolean=false;
  eventActiveGames:boolean=false;
  eventActiveMore:boolean=false;
  valuegamesDarkTitle:boolean=false;
  valuegamesDarkContainer2:boolean=false;
  valuegamesDarkContainer3:boolean=false;
  changeDarkBtn:boolean=false;

  proyects=[
    { id:1, name:'Points team Hexacta',
      href:'https://xenodochial-meitner-9f4abd.netlify.app/#/',
      description1:'1er Puesto Hackaton Talent Fest Laboratoria 2021',
      description2:'Diseño y construccion de MVP pagina web SPA (single page application) para redencion catalogo de puntos colaboradores',
      tecnologias:'react, jsx, css, html, firebase',
      image:'./../../../assets/png/hexacta.png'
    },
    { id:2, name:'X-plorer Jupiter Game',
      href:'https://boring-bardeen-67e752.netlify.app',
      description1:'Hackaton NASA Space Apps Challenge',
      description2:'Diseño y construccion de MVP juego educativo enfocado a fomentar en los niños en edad preescolar, el interés por la ciencia, la investigación y el espacio. Logrando a través de la curiosidad y el juego que puedan generar conocimientos científicos solidos.',
      tecnologias:'kaboom.js , css, html',
      image:'./../../../assets/png/space.png'
    },
    // { id:3, name:'Byte Adventure Flavored',
    //   href:'https://nataliasita04.itch.io/byte-adventure-flavored',
    //   description1:'Pixel Game Jam',
    //   description2:'Diseño y construccion de juego con tematica basada en la Coca-cola byte',
    //   tecnologias:'unity, c#, modelado en blender',
    //   image:'./../../../assets/png/bite_of.png'
    // },
     { id:4, name:'Data Lovers',
      href:'https://cranky-goldstine-ebf128.netlify.app/',
      description1:'Diseño y construccion pagina web catalogo SPA (single page application) con manejo de base de datos Juego Pokemon Go.',
      description2:'',
      tecnologias:'html, js, css, animacion en blender',
      image:'./../../../assets/png/datalover.png'
    },
      { id:5, name:'Work for world',
      href:'https://nifty-haibt-e8e555.netlify.app/',
      description1:'Hackaton barcelona digital talent',
      description2:'Diseño y construccion de MVP simulando plataforma para postulacion a vacantes creacion perfil del candidato con conexion a base de datos firebase.',
      tecnologias:'Angular, html, typescript, css, boostrap',
      image:'./../../../assets/png/work.png'
    },
    { id:6, name:'Notes tool',
      href:'https://romantic-leavitt-854494.netlify.app/',
      description1:'Diseño y construccion de MVP herramienta para crear, editar, eliminar notas o apuntes en web',
      description2:'',
      tecnologias:'Angular,html, typescript, css',
      image:'./../../../assets/png/notes.png'
    },
    { id:7, name:'Movie Adventures',
      href:'https://clever-fermat-220a08.netlify.app/',
      description1:'Consumo de API peliculas atraves de servicio ',
      description2:'Diseño y construccion MVP de pagina web emulacion de catalogo peliculas.',
      tecnologias:'Angular, html, typescript, css,',
      image:'./../../../assets/png/movie.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.eventActiveGames=true;

  }

  mode(toogle:boolean){
    console.log(toogle,'work')
    if(toogle===true){
      this.atributesLigth=false;
      this.atributesDark=true;
      this.generic=true;
      this.generic2=true;
      this.generic3=true;
      this.generic4=true;
      this.valueChangeTitle=true;
      this.changeIconCarrusel1=false;
      this.changeIconCarrusel2=true;
      this.valuegamesDarkTitle=true;
      this.valuegamesDarkContainer2=true;
      this.valuegamesDarkContainer3=true;
      this.changeDarkBtn=true;
    }else{
      this.atributesLigth=true;
      this.atributesDark=false;
      this.valueChangeTitle=false;
      this.generic=false;
      this.generic2=false;
      this.generic3=false;
      this.generic4=false;
      this.changeIconCarrusel1=true;
      this.changeIconCarrusel2=false;
      this.valuegamesDarkTitle=false;
      this.valuegamesDarkContainer2=false;
      this.valuegamesDarkContainer3=false;
      this.changeDarkBtn=false;
    }

  }

  changemoreProducts() {
    this.moreProducts=true;
    window.scrollTo(0,360)
    if(this.moreProducts==true)
    {
      this.allModelings=false;
      this.allGames=false;
      if(this.eventActiveMore=true){
        this.eventActiveGames=false;
        this.eventActiveModels=false;
      }
    }
  }

  changeModelings(){
    this.allModelings=true;
    window.scrollTo(0,1010)
      if(this.allModelings==true)
      {
        this.allGames=false;
        this.moreProducts=false;
          if(this.eventActiveModels=true){
            this.eventActiveGames=false;
            this.eventActiveMore=false;
          }
      }
     
  }
  changemyGames(){
    this.allGames=true;
    window.scrollTo(0,360)

      if(this.allGames==true)
      {
        this.allModelings=false;
        this.moreProducts=false;
        if(this.eventActiveGames=true){
          this.eventActiveModels=false;
          this.eventActiveMore=false;
        }
      }
  }



}
