import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the NotFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-not-found',
  templateUrl: 'not-found.html',
})
export class NotFoundPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    setInterval(() => {
      this.navCtrl.setRoot(HomePage)
    }, 5000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotFoundPage');
  }

}
