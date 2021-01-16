import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { GeneralListComponent } from './components/general-list/general-list.component';
import { TopTwentyComponent } from './components/top-twenty/top-twenty.component';
import { ButtonComponent } from './components/button/button.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    GeneralListComponent,
    TopTwentyComponent,
    ButtonComponent,
    ModalWindowComponent
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
