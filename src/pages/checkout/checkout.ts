import { Component, OnInit } from "@angular/core";
import { ViewController, NavController } from "ionic-angular";

@Component({
    templateUrl: './checkout.html',
    selector: 'checkout'
})
export class CheckoutModal {
    constructor(public navCtrl: NavController,public viewCtrl: ViewController) {

    }


     goFim(){
        this.navCtrl.push("SucessoPage");
    }

    close() {
        this.viewCtrl.dismiss();   
    }
}