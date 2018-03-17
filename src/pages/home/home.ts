import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardapioPage } from '../cardapio/cardapio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goCardapio(){
    this.navCtrl.push(CardapioPage);
      }
  


}
