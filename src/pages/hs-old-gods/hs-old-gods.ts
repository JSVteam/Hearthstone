import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Carta_DiosesAntiguos } from '../../carta';
import { DataProvider } from '../../providers/data/data';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the HsOldGodsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hs-old-gods',
  templateUrl: 'hs-old-gods.html',
})
export class HsOldGodsPage {
  items = [];
  
    cardsOldGods:Carta_DiosesAntiguos[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public _data: DataProvider, public loadingCtrl: LoadingController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }

    this._data.getAllCards().subscribe(
      data => {
        this.cardsOldGods = data ['Whispers of the Old Gods']
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HsOldGodsPage');
  }

}
