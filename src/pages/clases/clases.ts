import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from '../../providers/datos/datos';
import { ClaseAddPage } from '../clase-add/clase-add';

/**
 * Generated class for the ClasesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clases',
  templateUrl: 'clases.html',
})
export class ClasesPage {

  clases: Array<{nombre: string, curso: string, profesor: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public datosP: DatosProvider) {
    this.clases=datosP.clases;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClasesPage');
  }

  addClase($event){
    this.navCtrl.push(ClaseAddPage)
  }

  deleteClase($event, index){
    this.clases.splice(index, 1);
  }
}
