import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GeneralListComponent} from './components/general-list/general-list.component';
import {TopTwentyComponent} from './components/top-twenty/top-twenty.component';
import {FavouriteFilmsComponent} from './components/favourite-films/favourite-films.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {FavouriteFilmsGuard} from './guards/favourite-films.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/general-list'},
  {path: 'general-list', component: GeneralListComponent},
  {path: 'top-20', component: TopTwentyComponent},
  {path: 'favourites', component: FavouriteFilmsComponent, canActivate: [FavouriteFilmsGuard]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
