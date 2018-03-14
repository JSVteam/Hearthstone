import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Carta_Karazan } from '../../carta';
import { DataProvider } from '../../providers/data/data';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the HsKarazhanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hs-karazhan',
  templateUrl: 'hs-karazhan.html',
})
export class HsKarazhanPage {

  items = [];

  cards_karazan:Carta_Karazan[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public _data: DataProvider, public loadingCtrl: LoadingController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }

    this._data.getAllCards().subscribe(
      data => {
        this.cards_karazan = data ['One Night in Karazhan']

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
    console.log('ionViewDidLoad HsKarazhanPage');
  }

}
