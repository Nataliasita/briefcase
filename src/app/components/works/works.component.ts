import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { ItemsCarruselComponent } from './carrusel/items-carrusel/items-carrusel.component';

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
  

  proyects=[
    { id:1, name:'Points team Hexacta',
      href:'https://xenodochial-meitner-9f4abd.netlify.app/#/',
      description1:'1er Puesto Hackaton Talent Fest Laboratoria 2021',
      description2:'Diseño y construccion de MVP pagina web SPA (single page application) para redencion catalogo de puntos colaboradores',
      tecnologias:'react',
      image:'./../../../assets/png/hexacta.png'
    },
    { id:2, name:'X-plorer Jupiter Game',
      href:'https://boring-bardeen-67e752.netlify.app',
      description1:'Hackaton NASA Space Apps Challenge',
      description2:'Diseño y construccion de MVP juego educativo enfocado a fomentar en los niños en edad preescolar, el interés por la ciencia, la investigación y el espacio. Logrando a través de la curiosidad y el juego que puedan generar conocimientos científicos solidos.',
      tecnologias:'html, js, css',
      image:'./../../../assets/png/space.png'
    },
     { id:3, name:'Data lovers',
      href:'https://romantic-leavitt-854494.netlify.app/',
      description1:'Diseño y construccion pagina web catalogo SPA (single page application) con manejo de base de datos Juego Pokemon Go.',
      description2:'',
      tecnologias:'html, js, css, blender',
      image:'./../../../assets/png/datalover.png'
    },
      { id:4, name:'Work for world',
      href:'https://nifty-haibt-e8e555.netlify.app/',
      description1:'Hackaton barcelona digital talent',
      description2:'Diseño y construccion de MVP simulando plataforma para postulacion a vacantes creacion perfil del candidato con conexion a base de datos firebase.',
      tecnologias:'Angular, html, typescript, css, boostrap',
      image:'./../../../assets/png/work.png'
    },
    { id:5, name:'Notes tool',
      href:'https://romantic-leavitt-854494.netlify.app/',
      description1:'Diseño y construccion de MVP herramienta para crear, editar, eliminar notas o apuntes en web',
      description2:'',
      tecnologias:'Angular,html, typescript, css',
      image:'./../../../assets/png/notes.png'
    },
    { id:6, name:'Movie Adventures',
      href:'https://clever-fermat-220a08.netlify.app/',
      description1:'Consumo de API peliculas atraves de servicio ',
      description2:'Diseño y construccion MVP de pagina web emulacion de catalogo peliculas.',
      tecnologias:'Angular, html, typescript, css,',
      image:'./../../../assets/png/movie.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    

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
    }else{
      this.atributesLigth=true;
      this.atributesDark=false;
      this.generic=false;
      this.generic2=false;
      this.generic3=false;
      this.generic4=false;

    }

  }


}
