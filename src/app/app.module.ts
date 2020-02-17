import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TareasPage } from '../pages/tareas/tareas';
import { AboutPage } from '../pages/about/about';
import { ClasesPage } from '../pages/clases/clases';
import { TareaAddPage } from '../pages/tarea-add/tarea-add';
import { ClaseAddPage } from '../pages/clase-add/clase-add';
import { TareaInfoPage } from '../pages/tarea-info/tarea-info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatosProvider } from '../providers/datos/datos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TareasPage,
    AboutPage,
    ClasesPage,
    TareaAddPage,
    ClaseAddPage,
    TareaInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TareasPage,
    AboutPage,
    ClasesPage,
    TareaAddPage,
    ClaseAddPage,
    TareaInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatosProvider
  ]
})
export class AppModule {}
