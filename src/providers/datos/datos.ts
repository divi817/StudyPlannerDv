
import { Injectable } from '@angular/core';

@Injectable()
export class DatosProvider {

  tasks=[{titulo: 'PRÁCTICA Ionic', descripcion: 'Proyecto Ionic Completo', fecha: '2020-02-18',clase: 'Desarrollo de Interfaces', fin:false},
  {titulo: 'PRÁCTICA Unity', descripcion: 'Desarrollar Dungeon Crawler', fecha: '2020-02-20',clase: 'Desarrollo de Videojuegos', fin:false}];
  icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    clases=[{nombre: 'Desarrollo Interfaces', curso: '2º DAM FEMPA', profesor: 'Damián'}, 
    {nombre: 'Acceso a Datos', curso: '2º DAM FEMPA', profesor: 'Damián'}]
  constructor() {
    console.log('Hello DatosProvider Provider');
  }

  addtolista(tit: string, des: string, fec: string, cla: string, f: boolean):void{
    this.tasks.push({titulo: tit, descripcion: des, fecha: fec, clase: cla, fin: f});
  }

  addtoclases(nom: string, cur: string, pro: string):void{
    this.clases.push({nombre: nom, curso: cur, profesor: pro})
  }
  comprobarClases(nom:string, cur:string):boolean{
    let b:boolean = false;
    
    for(let clase of this.clases){
      if(clase.nombre==nom && clase.curso==cur){
        b=true;
      }
    }
    return b;
  }

}
