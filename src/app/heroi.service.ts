import { Injectable } from '@angular/core';
import { Heroi } from './herois';
import { HEROIS } from './mock-herois';
import { Observable, of } from 'rxjs';

//Permite que a classe HeroiService forneca um servico que pode ser injetado em outras classes
@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  // getHerois(): Heroi[] {
  //   return HEROIS;                              //PRIMEIRA VERSAO
  // }

  getHerois(): Observable<Heroi[]>{                //SEGUNDA VERSAO           
    return of(HEROIS);
  }

  constructor() { }
}
