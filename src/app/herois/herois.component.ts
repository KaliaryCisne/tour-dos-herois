import { Component, OnInit } from '@angular/core';
import { Heroi } from '../herois';
import { HeroiService } from '../heroi.service'
@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {
  //Definindo a propriedade herois como sendo do tipo array e Heroi
  herois: Heroi[];

  //Atributo que será exibido ao ser clicado
  heroiSelecionado: Heroi; //Definindo o atributo heroiSelecionado que será do tipo Heroi

  //Função que atribui à variavel "heroiSelecionado" o valor passado a "heroi"
  onSelect(heroi : Heroi): void {
    this.heroiSelecionado = heroi;
  }

  //funcão que obtem os herois através da classe heroiService e é recebida pelo atributo herois
  // getHerois(): void {
  //  this.herois = this.heroiService.getHerois();                //PRIMEIRA VERSAO
  // }
  getHerois(): void {
    this.heroiService.getHerois()                                 //SEGUNDA VERSAO
      .subscribe(herois => this.herois = herois);
  }

  // Injetando o serviço no construtor
  constructor(private heroiService: HeroiService) { }
 
  ngOnInit() {
    //chamada da função que obtem herois através do servico
    this.getHerois();
  }

}
