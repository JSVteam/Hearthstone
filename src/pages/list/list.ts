import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Carta_Kobold, Carta_TheLinchKing } from '../../carta';
import { DataProvider } from '../../providers/data/data';
import { AppState } from '../../app/app.global';



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

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  changeTheme(theme) {
    this.global.set('theme', theme);
  }
}
