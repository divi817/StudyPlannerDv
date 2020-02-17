import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from '../../providers/datos/datos';

/**
 * Generated class for the TareaInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarea-info',
  templateUrl: 'tarea-info.html',
})
export class TareaInfoPage {
  selectedItem: any;
  tasks: Array<{titulo: string, descripcion: string, fecha: string, clase: string, fin:boolean}>;
  n:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public datosP: DatosProvider) {
    this.tasks=datosP.tasks;
    this.n = navParams.get('item');
    this.selectedItem=this.tasks[this.n];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TareaInfoPage');
  }

}
