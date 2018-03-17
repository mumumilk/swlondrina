import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './cardapio.html',
    selector: 'cardapio'
})
export class CardapioPage implements OnInit {
    tipos = [
        {
            nome: 'Massas', itens: [
                { nome: 'macarrao', sub: '2 molhos', img: 'assets/imgs/macarrao.jpg' },
                { nome: 'Nhoque', sub: 'Frito, 2 molhos', img: 'assets/imgs/nhoque.jpg' },
                { nome: 'Pastelzinho', sub: 'Frito', img: 'assets/imgs/pastelzinho.jpg' },
                { nome: 'Pizza', sub: '2 sabores', img: 'assets/imgs/pizza.jpg' }
            ]
        },
        {
            nome: 'Bebidas', itens: [
                { nome: 'Coca cola', sub: 'Lata', img: 'assets/imgs/coca.jpg' },
                { nome: 'Cerveja', sub: '600 ml', img: 'assets/imgs/cerveja.jpg' }
            ]
        }
    ]

    constructor() {

    }

    ngOnInit() {

    }



}