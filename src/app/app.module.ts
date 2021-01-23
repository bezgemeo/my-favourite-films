import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilmCardComponent} from './components/film-card/film-card.component';
import {GeneralListComponent} from './components/general-list/general-list.component';
import {TopTwentyComponent} from './components/top-twenty/top-twenty.component';
import {ModalWindowComponent} from './components/modal-window/modal-window.component';
import {FavouriteDetailsComponent} from './components/favourite-details/favourite-details.component';
import { FavouriteFilmsComponent } from './components/favourite-films/favourite-films.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    GeneralListComponent,
    TopTwentyComponent,
    ModalWindowComponent,
    FavouriteDetailsComponent,
    FavouriteFilmsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
