import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatosComponent } from './gatos/gatos.component';
import { RazasComponent } from './razas/razas.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { GatoDetalleComponent } from './gato-detalle/gato-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    GatosComponent,
    RazasComponent,
    PaginaNoEncontradaComponent,
    GatoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
