import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvidadosComponent } from './convidados/convidados.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { HistoriaComponent } from './historia/historia.component';
import { FotosComponent } from './fotos/fotos.component';
import { PresenteComponent } from './presente/presente.component';
import { InformacoesComponent } from './informacoes/informacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvidadosComponent,
    HeaderComponent,
    InicioComponent,
    FooterComponent,
    HistoriaComponent,
    FotosComponent,
    PresenteComponent,
    InformacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
