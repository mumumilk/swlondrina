import { Component, OnInit } from "@angular/core";
import { ViewController } from "ionic-angular";

@Component({
    templateUrl: './checkout.html',
    selector: 'checkout'
})
export class CheckoutModal {
    constructor(public viewCtrl: ViewController) {

    }

    close() {
        this.viewCtrl.dismiss();   
    }


}