import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TareaAddPage } from './tarea-add';

@NgModule({
  declarations: [
    TareaAddPage,
  ],
  imports: [
    IonicPageModule.forChild(TareaAddPage),
  ],
})
export class TareaAddPageModule {}
