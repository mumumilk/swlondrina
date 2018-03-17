import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './cardapio.html',
    selector: 'cardapio'
})
export class CardapioPage implements OnInit {
    tipos = [
        {
            nome: 'Massas', itens: [
                { nome: 'macarrao', sub: '2 molhos', img: 'assets/imgs/macarrao.jpg', preco: '10.90' },
                { nome: 'Nhoque', sub: 'Frito, 2 molhos', img: 'assets/imgs/nhoque.jpg', preco: '05.90' },
                { nome: 'Pastelzinho', sub: 'Frito', img: 'assets/imgs/pastelzinho.jpg', preco: '10.90' },
                { nome: 'Pizza', sub: '2 sabores', img: 'assets/imgs/pizza.jpg', preco: '20.90' }
            ]
        },
        {
            nome: 'Bebidas', itens: [
                { nome: 'Coca cola', sub: 'Lata', img: 'assets/imgs/coca.jpg', preco: '5.00' },
                { nome: 'Cerveja', sub: '600 ml', img: 'assets/imgs/cerveja.jpg', preco: '6.90' }
            ]
        }
    ]

    constructor() {

    }
 
    ngOnInit() {

    }



}