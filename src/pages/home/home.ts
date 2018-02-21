import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from '../../providers/data/data';
import { Carta_Kobold, Carta_Classic, Carta_TheLinchKing, Carta_UnGoro, Carta_Gadgetzan, Carta_DiosesAntiguos, Carta_Karazan,CartaBasic, CartaHallofFame, CartaNaxxramas, CartaGvG, CartaBlackrockMountain, CartaGrandTournament, CartaLeagueofExplorers} from '../../carta';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the HomepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];

  cards:Carta_Kobold[] = [];
  cards_classic:Carta_Classic[] = [];
  cards_LinchKing:Carta_TheLinchKing[] = [];
  cards_ungoro:Carta_UnGoro[] = [];
  cards_gadgetzan:Carta_Gadgetzan[] = [];
  cards_oldgods:Carta_DiosesAntiguos[] = [];
  cards_karazan:Carta_Karazan[] = [];
  cardsBasic:CartaBasic[] = [];
  cardsHoF:CartaHallofFame[] = [];
  cardsNaxxramas:CartaNaxxramas[] = [];
  cardsGvG:CartaGvG[] = [];
  cardsBlackrock:CartaBlackrockMountain[] = [];
  cardsGrandTournament:CartaGrandTournament[] = [];
  cardsLeagueofExplorers:CartaLeagueofExplorers[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public _data: DataProvider, public loadingCtrl: LoadingController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }

    this._data.getAllCards().subscribe(
      data => {
        this.cards = data ['Kobolds & Catacombs'];
        this.cards_classic = data ['Classic'];
        this.cards_LinchKing = data ['Knights of the Frozen Throne'];
        this.cards_ungoro = data ["Journey to Un'Goro"]
        this.cards_gadgetzan = data ['Mean Streets of Gadgetzan'];
        this.cards_oldgods = data ['Whispers of the Old Gods'];
        this.cards_karazan = data ['One Night in Karazhan'];
        this.cardsBasic = data['Basic']
        this.cardsHoF = data['Hall of Fame']
        this.cardsNaxxramas = data['Naxxramas']
        this.cardsGvG = data['Goblins vs Gnomes']
        this.cardsBlackrock = data['Blackrock Mountain']
        this.cardsGrandTournament = data['The Grand Tournament']
        this.cardsLeagueofExplorers = data['The League of Explorers']
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
      console.log('ionViewDidLoad HomepagePage');
    }

  }
