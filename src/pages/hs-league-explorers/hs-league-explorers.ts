import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartaLeagueofExplorers } from '../../carta';
import { DataProvider } from '../../providers/data/data';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the HsLeagueExplorersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hs-league-explorers',
  templateUrl: 'hs-league-explorers.html',
})
export class HsLeagueExplorersPage {
  items = [];
  
    cardsLeagueofExplorers:CartaLeagueofExplorers[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public _data: DataProvider, public loadingCtrl: LoadingController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }

    this._data.getAllCards().subscribe(
      data => {
        this.cardsLeagueofExplorers = data ['The League of Explorers']
      }
    )
  }
  
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HsLeagueExplorersPage');
  }

}
