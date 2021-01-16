import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GeneralListComponent} from './components/general-list/general-list.component';
import {TopTwentyComponent} from './components/top-twenty/top-twenty.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/general-list'},
  {path: 'general-list', component: GeneralListComponent},
  {path: 'top-20', component: TopTwentyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
