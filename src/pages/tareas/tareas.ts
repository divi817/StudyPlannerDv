import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from '../../providers/datos/datos';
import { TareaAddPage } from '../tarea-add/tarea-add';

@IonicPage()
@Component({
  selector: 'page-tareas',
  templateUrl: 'tareas.html',
})
export class TareasPage {
  items: string[];
  tasks: Array<{titulo: string, descripcion: string, fecha: string, clase: string, fin:boolean}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public DatosP: DatosProvider) {
      this.items = DatosP.icons;
      this.tasks = DatosP.tasks;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TareasPage');
  }

  addTask(event) {
      this.navCtrl.push(TareaAddPage);
  }

  finTask(event, index){
    this.tasks[index].fin=true;
  }

  deleteTask(event, index){
    this.tasks.splice(index, 1);
}

}
