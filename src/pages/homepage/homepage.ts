import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DataProvider} from '../../providers/data/data';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the HomepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html',
})
export class HomepagePage {

  film: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient){
    const url = "https://api.themoviedb.org/3/movie/550?api_key=df86154eff229c28b09d4617fe11786d ";
    this.film = this.http.get(url)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepagePage');
  }

}
