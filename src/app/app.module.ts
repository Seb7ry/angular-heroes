import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//Servicios
import { HeroesService } from './services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FormsModule } from '@angular/forms';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { TarjetaComponent } from './components/shared/tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroeComponent,
    AboutComponent,
    NavbarComponent,
    HeroesComponent,
    BuscadorComponent,
    TarjetaComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
