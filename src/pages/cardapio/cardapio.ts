import { Component, OnInit } from "@angular/core";

import { NavController } from "ionic-angular";

@Component({
    templateUrl: './cardapio.html',
    selector: 'cardapio'
})

export class CardapioPage implements OnInit {
  

    tipos = [
        {
            nome: 'Panquecas', itens: [
                {cod: 512,  nome: 'Brócolis',                               sub: 'brócolis, alho e bacon',                              img: 'assets/imgs/panqueca_brocolis.jpg'   , preco: 19.5 },
                {cod: 51 ,  nome: 'Carne',                                  sub: 'carne moída com bacon',                               img: 'assets/imgs/panqueca_carne.jpg', preco: 16.5 },
                {cod: 53 ,  nome: 'Carne com Catupiry',                     sub: 'carne moída com catupiry',                            img: 'assets/imgs/panqueca_carne_catupiry.jpg', preco: 19.5 },
                {cod: 52 ,  nome: 'Carne com Queijo',                       sub: 'carne moída com queijo',                              img: 'assets/imgs/panqueca_carne_queijo.jpg'        , preco: 19.5 },
                {cod: 56 ,  nome: 'Frango',                                 sub: 'filé de frango em cubos',                             img: 'assets/imgs/panqueca_frango.jpg'        , preco: 16.5 },
                {cod: 57 ,  nome: 'Frango com Queijo',                      sub: 'filé de frango com queijo',                           img: 'assets/imgs/panqueca_frango_queijo.jpg'        , preco: 19.5 },
                {cod:  58,  nome: 'Frango com Catupiry',                    sub: 'filé de frango com catupiry',                         img: 'assets/imgs/panqueca_frango_catupiry.jpg'        , preco: 19.5 },
                {cod:  55,  nome: 'SUPER CHICK',                            sub: 'strogonoff de carne, cheddar e palha',            img: 'assets/imgs/panqueca_super_chick.jpg'        , preco: 22.5 },
                {cod:  515, nome: 'Rucula com tomate seco',                 sub: 'rucula, mussarela e tomate seco',                 img: 'assets/imgs/panqueca_rucula.jpg'        , preco: 20.5 },
                {cod:  513, nome: 'Francesa',                               sub: 'presunto, mussarela, catupiry e champignon',          img: 'assets/imgs/panqueca_presunto.jpg'        , preco: 20.5 },
                {cod:  54,  nome: 'Strogonoff Carne',                       sub: 'stogonoff carne com batata palha',                    img: 'assets/imgs/panqueca_strogonoff.jpg'        , preco: 22.5 },
                {cod:  59,  nome: 'Strogonoff Frango',                      sub: 'strogonoff frango com batata palha',                  img: 'assets/imgs/panqueca_strogonoff.jpg'        , preco: 22.5 },
                {cod:  511, nome: 'Mexicana',                               sub: 'carne moída, pimenta biquinho e queijo',                  img: 'assets/imgs/panqueca_mexicana.jpg'        , preco: 20.5 },
                {cod:  518, nome: 'Bahiana',                                sub: 'calabresa acebolada e queijo. Com toque apimentado',       img: 'assets/imgs/panqueca_bahiana.jpg'        , preco: 19.5 },
                {cod:  517, nome: 'Caipira',                                sub: 'frango em cubos, milho verde e queijo',                   img: 'assets/imgs/panqueca_caipira.jpg'        , preco: 19.5 },
            ]
        },
        // {
        //     nome: 'Bebidas', itens: [
        //         { nome: 'Coca cola', sub: 'Lata', img: 'assets/imgs/coca.jpg', preco: '5.00' },
        //         { nome: 'Cerveja', sub: '600 ml', img: 'assets/imgs/cerveja.jpg', preco: '6.90' }
        //     ]
        // }
    ]

    constructor(public navCtrl: NavController) {

    }

    goDetalhes(cod){
    this.navCtrl.push("DescricaoPage", {codigo: cod});
    }
    
    ngOnInit() {

    }

    



}