import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RazasComponent } from './razas/razas.component';
import { GatosComponent } from './gatos/gatos.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { GatoDetalleComponent } from './gato-detalle/gato-detalle.component';


const routes: Routes = [
  { path: 'razas', component: RazasComponent }, 
  { path: 'razas/:raza', component: RazasComponent }, 
  { path: 'gatos', component: GatosComponent },
  { path: 'detalle/:id', component: GatoDetalleComponent },
  { path: '',   redirectTo: '/gatos', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
