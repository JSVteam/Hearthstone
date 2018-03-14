import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Carta_Kobold } from '../../carta';
import { DataProvider } from '../../providers/data/data';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
/**
 * Generated class for the HsKoboldsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hs-kobolds',
  templateUrl: 'hs-kobolds.html',
})
export class HsKoboldsPage {
  items = [];
  
  cards_kobold:Carta_Kobold[] = [];

constructor(public navCtrl: NavController, public navParams: NavParams, public _data: DataProvider, public loadingCtrl: LoadingController) {
  for (let i = 0; i < 30; i++) {
    this.items.push( this.items.length );
  }

  this._data.getAllCards().subscribe(
    data => {
      this.cards_kobold = data ['Kobolds & Catacombs']
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
    console.log('ionViewDidLoad HsKoboldsPage');
  }

}
