import { Component, OnInit, Input } from '@angular/core';
import { Heroi } from '../herois';
import { ActivatedRoute } from '@angular/router';
import { HeroiService } from '../heroi.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroi-detalhe',
  templateUrl: './heroi-detalhe.component.html',
  styleUrls: ['./heroi-detalhe.component.css']
})
export class HeroiDetalheComponent implements OnInit {

  // Este decorator conecta o template a propriedade heroi
  @Input() heroi: Heroi;

  constructor(private route: ActivatedRoute,
              private heroiService: HeroiService,
              private location: Location) { }

  ngOnInit() {
    this.getHeroi();
  }

  getHeroi(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroiService.getHeroi(id)
     .subscribe(heroi=> this.heroi= heroi);
    }

}
