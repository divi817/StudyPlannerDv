import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from '../../providers/datos/datos';
import { AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public datosP: DatosProvider, public alertC: AlertController) {
    this.clases=datosP.clases;
    this.taskNombre="";
    this.taskClase="";
    this.taskDescripcion="";
    this.taskFecha="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TareaAddPage');
  }

  addTarea(){
    if(this.taskNombre.length==0 || !this.taskNombre){
      this.presentAlert("Error nombre vacío o no válido");
    }
    else if(this.taskDescripcion.length==0 || !this.taskDescripcion){
      this.presentAlert("Error descripción vacía o no válida");
    }
    else if(this.taskFecha.length==0 || !this.taskFecha){
      this.presentAlert("Error fecha vacía o no válida");
    }
    else if(this.taskClase.length==0 || !this.taskClase){
      this.presentAlert("Error asignatura vacía o no válida");
    }
    else{
      this.datosP.addtolista(
      this.taskNombre,
      this.taskDescripcion,
      this.taskFecha,
      this.taskClase, 
      false);
      this.navCtrl.pop();
  }
  } 
  presentAlert(error:string) {
    let alert = this.alertC.create({
      title: 'Error Inserción',
      message: error,
      buttons: ['Aceptar']
    });
    alert.present();
  }
}
