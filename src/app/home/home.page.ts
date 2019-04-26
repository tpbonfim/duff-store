import { Component, OnInit } from '@angular/core';
import { configFromSession } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(){
    this.cervejas =[];
  }

  cervejas;

  ngOnInit() {}

  excluir(nome){
    console.log(nome)
    localStorage.removeItem(nome)
  }

    ionViewDidEnter() {
      this.cervejas=[]
      const tamanhoDoBanco=localStorage.length
      for (let index = 0; index < tamanhoDoBanco; index++) {
        const chave = localStorage.key(index)
        const cerveja= localStorage.getItem(chave)
        const cervejaReal= JSON.parse(cerveja)
        
      }

    }

}
