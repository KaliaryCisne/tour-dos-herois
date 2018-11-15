import { Component, OnInit, Input } from '@angular/core';
import { Heroi } from '../herois';

@Component({
  selector: 'app-heroi-detalhe',
  templateUrl: './heroi-detalhe.component.html',
  styleUrls: ['./heroi-detalhe.component.css']
})
export class HeroiDetalheComponent implements OnInit {

  // Este decorator conecta o template a propriedade heroi
  @Input() heroi: Heroi;

  constructor() { }

  ngOnInit() {
  }

}
