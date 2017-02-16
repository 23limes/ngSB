import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SpaceData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SpaceData {

  constructor(public http: Http) {
    console.log('Hello SpaceData Provider');
  }

  getData(){
    return this.http.get("https://www.reddit.com/r/space/top/.json?limit=10").map(res => res.json());
  }

}
