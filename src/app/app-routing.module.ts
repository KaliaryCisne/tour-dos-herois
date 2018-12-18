import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PainelComponent}  from './painel/painel.component';
import { HeroisComponent } from './herois/herois.component';
import { HeroiDetalheComponent } from './heroi-detalhe/heroi-detalhe.component';

// path: string que corresponde à URL da barra de enderenços
// component: O component que o roteador deve criar quando navega para essa rota
const routes: Routes =[
  {path:'', redirectTo: '/painel', pathMatch: 'full'}, //Associa o path vazio como rota cujo caminho é '/painel '
  {path:'painel', component: PainelComponent},
  {path:'herois', component: HeroisComponent},
  { path: 'detalhe/:id', component: HeroiDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
