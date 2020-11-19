import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RForLifeComponent } from './rfor-life/rfor-life.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { SolarComponent } from './solar/solar.component';
import { ContatoComponent } from './contato/contato.component';
import { ImperialComponent } from './imperial/imperial.component';
import { BelvedereComponent } from './belvedere/belvedere.component';
import { AlamedaComponent } from './alameda/alameda.component';
import { FaggionComponent } from './faggion/faggion.component';
import { PhoenixComponent } from './phoenix/phoenix.component';
import { CarmenereComponent } from './carmenere/carmenere.component';
import { UnicoPoaComponent } from './unico-poa/unico-poa.component';
import { VilaSuzanoComponent } from './vila-suzano/vila-suzano.component';
import { DaVinciComponent } from './da-vinci/da-vinci.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    RForLifeComponent,
    ImoveisComponent,
    SolarComponent,
    ContatoComponent,
    ImperialComponent,
    BelvedereComponent,
    AlamedaComponent,
    FaggionComponent,
    PhoenixComponent,
    CarmenereComponent,
    UnicoPoaComponent,
    VilaSuzanoComponent,
    DaVinciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
