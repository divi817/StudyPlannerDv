import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from '../../providers/datos/datos';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ClaseAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clase-add',
  templateUrl: 'clase-add.html',
})
export class ClaseAddPage {
  claseNombre:string;
  claseCurso:string;
  claseProfe:string;


  clases:Array<{nombre:string, curso:string, profesor:string}>

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public datosP: DatosProvider, public alertC: AlertController) {
      this.clases=datosP.clases;
      this.claseNombre="";
      this.claseCurso="";
      this.claseProfe="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaseAddPage');
  }

  addClase(){
    if(this.claseNombre.length==0 || !this.claseNombre){
      this.presentAlert("Error nombre vacío o no válido");
    }
    else if(this.claseCurso.length==0 || !this.claseCurso){
      this.presentAlert("Error curso vacío o no válido");
    }
    else if(this.claseProfe.length==0 || !this.claseProfe){
      this.presentAlert("Error profesor vacío o no válido");
    }
    else if(this.datosP.comprobarClases(this.claseNombre, this.claseCurso)){
        this.presentAlert("Error, clase ya existe en este curso.")
    }
    else{
      this.datosP.addtoclases(
      this.claseNombre,
      this.claseCurso,
      this.claseProfe
      );
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
