import { InformacoesComponent } from './informacoes/informacoes.component';
import { PresenteComponent } from './presente/presente.component';
import { ConvidadosComponent } from './convidados/convidados.component';
import { HistoriaComponent } from './historia/historia.component';
import { InicioComponent } from './inicio/inicio.component';
import { FotosComponent } from './fotos/fotos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'historia', component:HistoriaComponent},
  {path: 'fotos', component:FotosComponent},
  {path: 'convidados', component:ConvidadosComponent},
  {path: 'presente', component:PresenteComponent},
  {path: 'informacoes', component:InformacoesComponent},
  {path: '', redirectTo: 'inicio', pathMatch:'full'},
  {path: '**', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
