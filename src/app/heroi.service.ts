import { Injectable } from '@angular/core';
import { Heroi } from './herois';
import { HEROIS } from './mock-herois';
import { Observable, of } from 'rxjs';
import { MensagemService } from './mensagem.service';

//Permite que a classe HeroiService forneca um servico que pode ser injetado em outras classes
@Injectable({
  providedIn: 'root'
})
export class HeroiService {
  //Injentado o serviço MensagemService no construtor do servico HeroiService
  constructor(private mensagemService: MensagemService) {}
  
  getHerois(): Observable<Heroi[]>{                                       //SEGUNDA VERSAO   
    this.mensagemService.adicionar('HeroiService: heróis obtidos');
    return of(HEROIS);
  }

  getHeroi(id: number): Observable<Heroi> {
    this.mensagemService.adicionar(`HeroiService: obtido herói com id=${id}`);
    return of(HEROIS.find(heroi => heroi.id === id));
    }
}
