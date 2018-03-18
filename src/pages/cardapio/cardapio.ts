import { Component, OnInit } from "@angular/core";

import { NavController } from "ionic-angular";

@Component({
    templateUrl: './cardapio.html',
    selector: 'cardapio'
})
export class CardapioPage implements OnInit {
    tipos = [
        {
            nome: 'Comidas', itens: [
                { nome: 'Petit gâteau', sub: 'cholate', img: 'assets/imgs/gato2.jpg'   , preco: 20.90 },
                { nome: 'Nhoque', sub: 'Frito, 2 molhos', img: 'assets/imgs/nhoque.jpg', preco: 20.90 },
                { nome: 'Pastelzinho', sub: 'Frito', img: 'assets/imgs/pastelzinho.jpg', preco: 20.90 },
                { nome: 'Pizza', sub: '2 sabores', img: 'assets/imgs/pizza.jpg'        , preco: 20.90 }
            ]
        },
        {
            nome: 'Bebidas', itens: [
                { nome: 'Coca cola', sub: 'Lata', img: 'assets/imgs/coca.jpg', preco: '5.00' },
                { nome: 'Cerveja', sub: '600 ml', img: 'assets/imgs/cerveja.jpg', preco: '6.90' }
            ]
        }
    ]

    constructor(public navCtrl: NavController) {

    }

    goDetalhes(){
    this.navCtrl.push("DescricaoPage");
    }
    ngOnInit() {

    }



}