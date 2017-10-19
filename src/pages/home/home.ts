import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NotFoundPage } from '../not-found/not-found';
import { ScannedPage } from '../scanned/scanned';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  staticBarCodes;
  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
    this.staticBarCodes = [
      { number: "unic-brij-1102" },
      { number: "usni-brij-1102" },
      { number: "usni-vivp-1102" },
      { number: "abcd-abcs-1234" },
      { number: "anuq-anuq-6622" },
      { number: "amna-amna-3311" },
      { number: "pick-pkci-9882" },
    ];
  }
  load() {
    this.barcodeScanner.scan().then((barcodeData) => {
      // alert(barcodeData.text);
      if (this.staticBarCodes.find(o => o.number == barcodeData.text)) {
        //alert('Worked');
        this.navCtrl.push(ScannedPage);
      }
      else {
        //alert('Faield');
        this.navCtrl.push(NotFoundPage);
      }
    }, (err) => {
      // An error occurred
      alert("Error " + JSON.stringify(err))
    });
  }

}
