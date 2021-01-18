import {Component, OnInit, OnDestroy} from '@angular/core';
import {FilmService} from '../../services/film.service';
import {IFilm} from '../../interfaces/film-interface';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html',
  styleUrls: ['./general-list.component.scss']
})
export class GeneralListComponent {

  constructor() {
  }
  public title = 'Welcome!';


}
