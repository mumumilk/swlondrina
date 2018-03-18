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
  templateUrl: 'descricao.html'
})
export class DescricaoPage {

  codigo;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.codigo = this.navParams.get('codigo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescricaoPage');
  }

  openModal() {
    let profileModal = this.modalCtrl.create(CheckoutModal);
    profileModal.present();
  }

  get image(): string {
    switch (this.codigo) {
        case 512:  return 'assets/imgs/panqueca_brocolis.jpg'       ;
      	case 51 :  return 'assets/imgs/panqueca_carne.jpg'          ;
      	case 53 :  return 'assets/imgs/panqueca_carne_catupiry.jpg' ;
      	case 52 :  return 'assets/imgs/panqueca_carne_queijo.jpg'   ;
      	case 56 :  return 'assets/imgs/panqueca_frango.jpg'         ;
      	case 57 :  return 'assets/imgs/panqueca_frango_queijo.jpg'  ;
      	case 58 :  return 'assets/imgs/panqueca_frango_catupiry.jpg';
      	case 55 :  return 'assets/imgs/panqueca_super_chick.jpg'    ;
      	case 515:  return 'assets/imgs/panqueca_rucula.jpg'         ;
      	case 513:  return 'assets/imgs/panqueca_presunto.jpg'       ;
      	case 54 :  return 'assets/imgs/panqueca_strogonoff.jpg'     ;
      	case 59 :  return 'assets/imgs/panqueca_strogonoff.jpg'     ;
      	case 511:  return 'assets/imgs/panqueca_mexicana.jpg'       ;
      	case 518:  return 'assets/imgs/panqueca_bahiana.jpg'        ;
      	case 517:  return 'assets/imgs/panqueca_caipira.jpg'        ;
    }
  }

  get preco(): number {
    switch (this.codigo) {
        case 512:  return 19.5;
        case 51 :  return 16.5;
        case 53 :  return 19.5;
        case 52 :  return 19.5;
        case 56 :  return 16.5;
        case 57 :  return 19.5;
        case 58 :  return 19.5;
        case 55 :  return 22.5;
        case 515:  return 20.5;
        case 513:  return 20.5;
        case 54 :  return 22.5;
        case 59 :  return 22.5;
        case 511:  return 20.5;
        case 518:  return 19.5;
        case 517:  return 19.5;
    }
  }

  get nome(): string {
    switch (this.codigo) {
        case 512:  return     'Brócolis'   ;
        case 51 :  return 'Carne'      ;
        case 53 :  return 'Carne com Catupiry'   ;
        case 52 :  return 'Carne com Queijo'      ;
        case 56 :  return 'Frango'            ;
        case 57 :  return 'Frango com Queijo'    ;
        case 58 :  return 'Frango com Catupiry'  ;
        case 55 :  return 'SUPER CHICK'          ;
        case 515:  return 'Rucula com tomate seco';
        case 513:  return 'Francesa'         ;
        case 54 :  return 'Strogonoff Carne'     ;
        case 59 :  return 'Strogonoff Frango'    ;
        case 511:  return 'Mexicana'          ;
        case 518:  return 'Bahiana'           ;
        case 517:  return 'Caipira'           ;
    }
  }

  get sub(): string {
    switch (this.codigo) {
        case 512:  return 'brócolis; alho e bacon';                           
        case 51 :  return 'carne moída com bacon';                            
        case 53 :  return 'carne moída com catupiry';                         
        case 52 :  return 'carne moída com queijo';                           
        case 56 :  return 'filé de frango em cubos';                          
        case 57 :  return 'filé de frango com queijo';                        
        case 58 :  return 'filé de frango com catupiry';                      
        case 55 :  return 'strogonoff de carne; cheddar e palha';            
        case 515:  return 'rucula; mussarela e tomate seco';                 
        case 513:  return 'presunto; mussarela; catupiry e champignon';       
        case 54 :  return 'stogonoff carne com batata palha';                 
        case 59 :  return 'strogonoff frango com batata palha';               
        case 511:  return 'carne moída; pimenta biquinho e queijo';           
        case 518:  return 'calabresa acebolada e queijo. Com toque apimentado'
        case 517:  return 'frango em cubos; milho verde e queijo';            
    }
  }


}
