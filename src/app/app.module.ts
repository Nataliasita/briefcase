import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { WorksComponent } from './components/works/works.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimationComponent } from './components/home/animation/animation.component';
import { SnowComponent } from './components/home/animation/snow/snow.component';
import { AnimaligthComponent } from './components/works/animations_works/animaligth/animaligth.component';
import { AnimationdarkComponent } from './components/works/animations_works/animationdark/animationdark.component';
import { ItemsCarruselComponent } from './components/works/carrusel/items-carrusel/items-carrusel.component';
import { InformationGamesComponent } from './components/works/information-games/information-games.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    WorksComponent,
    FooterComponent,
    ContactComponent,
    AnimationComponent,
    SnowComponent,
    AnimaligthComponent,
    AnimationdarkComponent,
    ItemsCarruselComponent,
    InformationGamesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
