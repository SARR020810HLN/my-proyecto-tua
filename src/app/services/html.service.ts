import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlService {
  
  private label = [
    {  Nombe:"HTML Basic",
       bio:"En este capítulo mostraremos algunos ejemplos básicos de HTML. No se preocupe si usamos etiquetas que aún no conoce.",
       img:"assets/img/imgs/img/HTML Basic.png"
},
    {  Nombe: "HTML Elements",
       bio: "El elemento HTML es todo, desde la etiqueta de inicio hasta la etiqueta final.",
       img:"assets/img/imgs/img/HTML Elements.png"
},
    { Nombe: "HTML Attributes",
      bio: "Los atributos HTML proporcionan información adicional sobre los elementos HTML.",
      img:"assets/img/imgs/img/HTML Attributes.png"
},
    { Nombe: "HTML Headings",
       bio: "Los encabezados HTML son títulos o subtítulos que desea mostrar en una página web.",
       img:"assets/img/imgs/img/HTML Headings.png"
},
    { Nombe: "HTML Paragraphs",
       bio: "Un párrafo siempre comienza en una nueva línea y los navegadores agregan automáticamente un espacio en blanco (un margen) antes y después de un párrafo.",
       img: "assets/img/imgs/img/HTML Paragraphs.png"
},

    { Nombe: "HTML Styles",
        bio:   "El atributo de estilo HTML se usa para agregar estilos a un elemento, como color, fuente, tamaño y más.",
        img:   "assets/img/imgs/img/HTML Styles.png"
},
    { Nombe: "HTML Text Formatting",
         bio: "HTML contiene varios elementos para definir texto con un significado especial.",
         img: "assets/img/imgs/img/HTML Text Formatting.png"

},
    { Nombe: "HTML Quotation and Citation Elements",
         bio: "En este capítulo veremos los elementos HTML <blockquote>, <q>, <abbr>, <address>, <cite> y <bdo>.",
         img: "assets/img/imgs/img/HTML Quotation and Citation Elements.png"
},
    { Nombe: "HTML Comments",
        bio: "Los comentarios HTML no se muestran en el navegador, pero pueden ayudar a documentar su código fuente HTML.",
        img: "assets/img/imgs/img/HTML Comments.png"
}
];


  constructor() { }

  getlabel(){
     return this.label;
  }

  getlabe(id:number) {

    return this.label[id];
  }

}
