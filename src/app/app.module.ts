import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HearthstoneBasicPage } from '../pages/hearthstone-basic/hearthstone-basic';
import { HsNaxxramasPage } from '../pages/hs-naxxramas/hs-naxxramas';
import { HsGvGPage } from '../pages/hs-gv-g/hs-gv-g';
import { HsBlackrockPage } from '../pages/hs-blackrock/hs-blackrock';
import { HsGrandTournamentPage } from '../pages/hs-grand-tournament/hs-grand-tournament';
import { HsLeagueExplorersPage } from '../pages/hs-league-explorers/hs-league-explorers';
import { HsOldGodsPage } from '../pages/hs-old-gods/hs-old-gods';
import { HsKarazhanPage } from '../pages/hs-karazhan/hs-karazhan';
import { HsGadgetzanPage } from '../pages/hs-gadgetzan/hs-gadgetzan';
import { HsUnGoroPage } from '../pages/hs-un-goro/hs-un-goro';
import { HsFrozenThronePage } from '../pages/hs-frozen-throne/hs-frozen-throne';
import { HsKoboldsPage } from '../pages/hs-kobolds/hs-kobolds';

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
    HearthstoneBasicPage, HsNaxxramasPage, HsGvGPage, HsBlackrockPage, HsGrandTournamentPage,
    HsLeagueExplorersPage, HsOldGodsPage, HsKarazhanPage, HsGadgetzanPage, HsUnGoroPage,
    HsFrozenThronePage, HsKoboldsPage,
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
    HearthstoneBasicPage, HsNaxxramasPage, HsGvGPage, HsBlackrockPage, HsGrandTournamentPage,
    HsLeagueExplorersPage, HsOldGodsPage, HsKarazhanPage, HsGadgetzanPage, HsUnGoroPage,
    HsFrozenThronePage, HsKoboldsPage,
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
