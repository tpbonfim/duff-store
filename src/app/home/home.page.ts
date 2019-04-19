import { Component, OnInit } from '@angular/core';
import { configFromSession } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cervejas;

  ngOnInit() {


  }
  ionViewDidEnter() {
    this.cervejas = [];

    const chavesDisponiveis = sessionStorage.getItem('chaves')

    const chavesSeparadas = chavesDisponiveis.split(';')
    for (var i = 0; i < chavesSeparadas.length; i++) {
      const cerveja = sessionStorage.getItem(chavesSeparadas[i])
      const cervejaObj = JSON.parse(cerveja)
      this.cervejas.push(cervejaObj)
    }
  }
}