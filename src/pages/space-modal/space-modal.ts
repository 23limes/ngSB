import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { Planets } from '../../providers/planets';

/*
  Generated class for the SpaceModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-space-modal',
  templateUrl: 'space-modal.html'
})
export class SpaceModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public viewCtrl: ViewController, public planetProvider: Planets, public events: Events) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceModalPage');
    console.log(this.planetProvider.favoritePlanet);
  }

  closeModal(){
    let modalData = {
      title: "Space!",
      url: "https://www.nasa.gov"
    }
    this.viewCtrl.dismiss(modalData);
  }

  addPlanet(){
    let newPlanet = {
      name: "Planet X",
      description: "How big is my orbit again?"
    };
    this.events.publish("planet:added", newPlanet);
  }

}
