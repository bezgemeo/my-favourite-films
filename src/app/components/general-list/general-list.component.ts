import {Component, OnInit, OnDestroy} from '@angular/core';
import {FilmService} from '../../services/film.service';
import {IFilm} from '../../interfaces/film-interface';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html',
  styleUrls: ['./general-list.component.scss']
})
export class GeneralListComponent implements OnInit, OnDestroy {

  constructor(public filmService: FilmService) {
  }

  public filmsList: IFilm[] | undefined;
  public error: any;

  ngOnInit(): void {
    this.getFilms();
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }

  getFilms(): Observable<IFilm[] | undefined> {
    this.filmService.getFilms().subscribe(
      filmsList => this.filmsList = filmsList.data.movies,
      error => this.error = error);
    return of(this.filmsList);
  }
}
