import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  limit:number = 10;

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getAllCards(){
    return this.http.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards',{
      headers:{
        'X-Mashape-Key': 'kbDsFTJcG7mshS1vKdc1NtXe2cw5p1pNhSdjsnyVnnhqPGxtuB'
      },
      params: {
        'collectible': '1'
      }
    })
    

  }

}
