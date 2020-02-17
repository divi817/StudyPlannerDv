import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TareaInfoPage } from './tarea-info';

@NgModule({
  declarations: [
    TareaInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TareaInfoPage),
  ],
})
export class TareaInfoPageModule {}
