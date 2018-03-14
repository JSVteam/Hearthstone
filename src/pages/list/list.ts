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

  itemTapped() {
        this.navCtrl.push(HsOldGodsPage);
  }

  changeTheme(theme) {
    this.global.set('theme', theme);
  }
}
