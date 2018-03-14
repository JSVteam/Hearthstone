import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Carta_Kobold, Carta_TheLinchKing } from '../../carta';
import { DataProvider } from '../../providers/data/data';
import { AppState } from '../../app/app.global';
import { HearthstoneBasicPage } from '../hearthstone-basic/hearthstone-basic';
import { HsNaxxramasPage } from '../hs-naxxramas/hs-naxxramas';
import { HsGvGPage } from '../hs-gv-g/hs-gv-g';
import { HsBlackrockPage } from '../hs-blackrock/hs-blackrock';
import { HsGrandTournamentPage } from '../hs-grand-tournament/hs-grand-tournament';
import { HsLeagueExplorersPage } from '../hs-league-explorers/hs-league-explorers';
import { HsOldGodsPage } from '../hs-old-gods/hs-old-gods';
import { HsKarazhanPage } from '../hs-karazhan/hs-karazhan';
import { HsGadgetzanPage } from '../hs-gadgetzan/hs-gadgetzan';
import { HsUnGoroPage } from '../hs-un-goro/hs-un-goro';
import { HsFrozenThronePage } from '../hs-frozen-throne/hs-frozen-throne';
import { HsKoboldsPage } from '../hs-kobolds/hs-kobolds';


let number = 0;

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  cards:Carta_Kobold[] = [];
  cards_LinchKing:Carta_TheLinchKing[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public _data: DataProvider,public global: AppState) {
    this._data.getAllCards().subscribe(
      data => {
        this.cards = data ['Kobolds & Catacombs'];
        this.cards_LinchKing = data ['Knights of the Frozen Throne'];
      }  
    )
  }

  itemTapped(number) {
    switch (number) {
      case 1:
          this.navCtrl.push(HearthstoneBasicPage);
        break;
      case 2:
        this.navCtrl.push(HsNaxxramasPage);
      break;
      case 3:
      this.navCtrl.push(HsGvGPage);
      break;
      case 4:
      this.navCtrl.push(HsBlackrockPage);
      break;
      case 5:
      this.navCtrl.push(HsGrandTournamentPage);
      break;
      case 6:
      this.navCtrl.push(HsLeagueExplorersPage);
      break;
      case 7:
      this.navCtrl.push(HsOldGodsPage);
      break;
      case 8:
      this.navCtrl.push(HsKarazhanPage);
      break;
      case 9:
      this.navCtrl.push(HsGadgetzanPage);
      break;
      case 10:
      this.navCtrl.push(HsUnGoroPage);
      break;
      case 11:
      this.navCtrl.push(HsFrozenThronePage);
      break;
      case 12:
      this.navCtrl.push(HsKoboldsPage);
      break;
    }
  }

  changeTheme(theme) {
    this.global.set('theme', theme);
  }
}
