import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  //atributo mensagens
  mensagens: string[] = [];
  
  //função que adiciona mensagens
  adicionar(mensagem: string){
    this.mensagens.push(mensagem);
  }

  //função para limpar o cache de mnensagens
  limpar(){
    this.mensagens = [];
  }
  
  
  
  //constructor() { }
}
