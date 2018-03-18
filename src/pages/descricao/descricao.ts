import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CheckoutModal } from '../checkout/checkout';

/**
 * Generated class for the DescricaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descricao',
  templateUrl: 'descricao.html',
})
export class DescricaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescricaoPage');
  }

  openModal() {
    let profileModal = this.modalCtrl.create(CheckoutModal);
    profileModal.present();
  }




}
