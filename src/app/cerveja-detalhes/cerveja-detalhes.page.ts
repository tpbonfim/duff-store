import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cerveja-detalhes',
  templateUrl: './cerveja-detalhes.page.html',
  styleUrls: ['./cerveja-detalhes.page.scss'],
})
export class CervejaDetalhesPage implements OnInit {

  nome;
  detalhes;

  constructor(private route:ActivatedRoute) { 
    console.log("executou o construtor")
  }

  ngOnInit() {
    let idCerveja= this.route.snapshot.params.id;
    
    if(idCerveja === "50"){
      this.nome="Proibida"
      this.detalhes="Tão gostosa que é proibida. A melhor cerveja do ceara"
    }else if(idCerveja==="60"){
      this.nome="Skol"
      this.detalhes="A puro malte que desce Redondo"
    }else if(idCerveja==="70"){
      this.nome="Imperio"
      this.detalhes="A cerveja Império Puro Malte nasceu da busca pela perfeição.Sua elaboração nobre, fruto do trabalho rigoroso dos melhores mestres-cervejeiros do Brasil"
    }
  }

}
