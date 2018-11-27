import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroisComponent } from './herois/herois.component'

// path: strin que corresponde à URL da barra de enderenços
// component: O component que o roteador deve criar quando navega para essa rota
const routes: Routes =[
  {path: 'herois', component: HeroisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
