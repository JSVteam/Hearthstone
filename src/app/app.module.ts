import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HearthstoneBasicPage } from '../pages/hearthstone-basic/hearthstone-basic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';
import { AppState } from './app.global';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HearthstoneBasicPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { mode: 'md'}),
    HttpClientModule,
    IonicPageModule.forChild(HomePage),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HearthstoneBasicPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    AppState
  ]
})
export class AppModule {}
