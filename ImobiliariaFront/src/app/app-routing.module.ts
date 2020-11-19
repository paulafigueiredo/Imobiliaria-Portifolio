import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlamedaComponent } from './alameda/alameda.component';
import { BelvedereComponent } from './belvedere/belvedere.component';
import { CarmenereComponent } from './carmenere/carmenere.component';
import { ContatoComponent } from './contato/contato.component';
import { DaVinciComponent } from './da-vinci/da-vinci.component';
import { FaggionComponent } from './faggion/faggion.component';
import { HomeComponent } from './home/home.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { ImperialComponent } from './imperial/imperial.component';
import { PhoenixComponent } from './phoenix/phoenix.component';
import { RForLifeComponent } from './rfor-life/rfor-life.component';
import { SolarComponent } from './solar/solar.component';
import { UnicoPoaComponent } from './unico-poa/unico-poa.component';
import { VilaSuzanoComponent } from './vila-suzano/vila-suzano.component';



const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
{ path: 'home', component: HomeComponent},
{path: 'imoveis', component: ImoveisComponent},
{path: 'contato', component:ContatoComponent},
{path: 'rforlife', component: RForLifeComponent},
{path:'alameda', component: AlamedaComponent},
{path: 'belvedere', component: BelvedereComponent},
{path: 'carmenere', component: CarmenereComponent},
{path: 'davinci', component: DaVinciComponent},
{path: 'solar', component: SolarComponent},
{path:'unicopoa', component: UnicoPoaComponent},
{path: 'vilasuzano', component: VilaSuzanoComponent},
{path: 'phoenix', component: PhoenixComponent},
{path: 'faggion', component: FaggionComponent},
{path: 'imperial', component: ImperialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
