import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cerveja',
  templateUrl: './add-cerveja.page.html',
  styleUrls: ['./add-cerveja.page.scss'],
})
export class AddCervejaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mensagem=""
  }

  mensagem;

  salvar(form){
    const cervejaString= JSON.stringify(form.value);
    const nomeCerveja= form.value.nome

    sessionStorage.setItem(nomeCerveja, cervejaString)

    let chavesDisponiveis = sessionStorage.getItem("chaves");

    if(chavesDisponiveis !== null){
      chavesDisponiveis = chavesDisponiveis + ";" + nomeCerveja;
    }else{
      chavesDisponiveis=nomeCerveja
    }

    sessionStorage.setItem("chaves",chavesDisponiveis)

    form.reset();
    this.mensagem="Cadastrado com sucesso !!!"
    console.log('As chaves Disponiveis são:', chavesDisponiveis)
  }
}
