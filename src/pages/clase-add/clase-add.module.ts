import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClaseAddPage } from './clase-add';

@NgModule({
  declarations: [
    ClaseAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ClaseAddPage),
  ],
})
export class ClaseAddPageModule {}
