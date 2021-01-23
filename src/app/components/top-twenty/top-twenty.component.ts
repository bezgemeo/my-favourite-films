import {Component, OnDestroy, OnInit} from '@angular/core';
import {IFilm} from '../../interfaces/film-interface';
import {FilmService} from '../../services/film.service';
import {TrailerService} from '../../services/trailer.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-top-twenty',
  templateUrl: './top-twenty.component.html',
  styleUrls: ['./top-twenty.component.scss']
})
export class TopTwentyComponent implements OnInit, OnDestroy {
  public topFilmsList?: IFilm[];
  public loading = false;
  private subscription: Subscription | undefined;

  constructor(public filmService: FilmService,
              public trailerService: TrailerService) {
  }

  ngOnInit(): void {
    this.getTop20Films();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getTop20Films(): void {
    this.loading = true;
    this.subscription = this.filmService.getFilms().subscribe(
      response => {
        const movies = response.data.movies; // objects array. idIMDB is film ID

        if (movies[0].trailers) {
          console.log('local');
          this.topFilmsList = movies;
          this.loading = false;
        } else {
          console.log('remote');
          movies.forEach((movie: IFilm, i: number, arr: IFilm[]) => {
            const id = movie.idIMDB;
            this.trailerService.getTrailer(id).subscribe(
              trailersResponse => {
                // @ts-ignore
                movies.find((item: IFilm) => {
                  return item.idIMDB === trailersResponse.data.movies[0].idIMDB;
                }).trailers = trailersResponse.data.movies[0].trailer.qualities;
                if (i === arr.length - 1) {
                  this.topFilmsList = movies;
                  this.loading = false;
                }
              });
          });
        }
      },
      error => {
        throw new Error(`ooops, something is wrong, ${error}`);
      });
  }
}
