import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from '../../providers/datos/datos';

/**
 * Generated class for the TareaAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarea-add',
  templateUrl: 'tarea-add.html',
})
export class TareaAddPage {
  taskNombre: string;
  taskClase:string;
  taskDescripcion:string;
  taskFecha:string;

  clases:Array<{nombre:string, curso:string, profesor:string}>

  constructor(public navCtrl: NavController, public navParams: NavParams, public datosP: DatosProvider) {
    this.clases=datosP.clases;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TareaAddPage');
  }

  addTarea(){
    this.datosP.addtolista(
    this.taskNombre,
    this.taskDescripcion,
    this.taskFecha,
    this.taskClase, 
    false);
    this.navCtrl.pop();
  }

}
