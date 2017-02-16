import { Component } from '@angular/core';
import { NavController, ModalController, Events } from 'ionic-angular';
import { SpaceData } from '../../providers/space-data';
import { DetailsPage } from '../details/details';
import { SpaceModalPage } from '../space-modal/space-modal';
import { Planets } from '../../providers/planets';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  public spaceChildren: any;
  public hitchhiker:string = "Have towel, will travel";

  constructor(public navCtrl: NavController, public space: SpaceData, 
              public modalCtrl: ModalController, public planetProvider: Planets, public events: Events) {    
  }

  ionViewDidLoad(){
    this.space.getData().subscribe(space => {
      this.spaceChildren = space.data.children;
    });

    this.events.subscribe("planet:added", (data) => {
      console.log(data);
    });
  }

  loadDetails(data){
    this.navCtrl.push(DetailsPage, data);
  }

  loadModal(){
    console.log(this.planetProvider.favoritePlanet);

    let modal = this.modalCtrl.create(SpaceModalPage);
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

  doIt(e){
    //console.log("Space is big. Really big.");
    console.log(e);
  }

}
