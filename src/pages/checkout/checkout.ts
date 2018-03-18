import { Component, OnInit } from "@angular/core";
import { ViewController, NavController } from "ionic-angular";
import { CardapioPage } from "../cardapio/cardapio";

@Component({
    templateUrl: './checkout.html',
    selector: 'checkout'
})
export class CheckoutModal {
    cadapio = "CardapioPage";
    constructor(public navCtrl: NavController,public viewCtrl: ViewController) {

    }


     goFim(){
        this.navCtrl.push("SucessoPage");
    }

    goContinuarComprando( String){
        this.navCtrl.push("CardapioPage");
            // this.navCtrl.pop();
            // this.navCtrl.setRoot(this.cadapio);
           
    }

    close() {
        this.viewCtrl.dismiss();   
    }
}