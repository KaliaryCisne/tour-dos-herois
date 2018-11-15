import { Component, OnInit } from '@angular/core';
import { HEROIS } from '../mock-herois';
import { Heroi } from '../herois';
@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {

  herois = HEROIS;

  //Atributo que será exibido ao ser clicado
  heroiSelecionado: Heroi; //Definindo o atributo heroiSelecionado que será do tipo Heroi

  //Método que atribui a variavel "heroiSelecionado" o valor passado a "heroi"
  onSelect(heroi : Heroi): void {
    this.heroiSelecionado = heroi;
  }

  constructor() { }
 
  ngOnInit() {
  }

}
