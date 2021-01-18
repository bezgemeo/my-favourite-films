import {Component} from '@angular/core';
import {IFilm} from '../../interfaces/film-interface';
import {FilmService} from '../../services/film.service';
import {TrailerService} from '../../services/trailer.service';

@Component({
  selector: 'app-top-twenty',
  templateUrl: './top-twenty.component.html',
  styleUrls: ['./top-twenty.component.scss']
})
export class TopTwentyComponent {
  public topFilmsList?: IFilm[];
  public loading = false;

  constructor(public filmService: FilmService,
              public trailerService: TrailerService) {
    this.getTop20Films();
  }

  getTop20Films(): void {
    this.loading = true;
    this.filmService.getFilms().subscribe(
      response => {
        const movies = response.data.movies; // objects array. idIMDB is film ID
        movies.forEach((movie: IFilm, i: number, arr: []) => {
          const id = movie.idIMDB;
          this.trailerService.getTrailer(id).subscribe(
            trailersResponse => {
              movies.find((item: any) => {
                return item.idIMDB === trailersResponse.data.movies[0].idIMDB;
              }).trailers = trailersResponse.data.movies[0].trailer.qualities;
              if (i === arr.length - 1) {
                this.topFilmsList = movies;
                this.loading = false;
              }
            });
        });
      }, error => {
        console.log('\n%cConnection with Remote Host Error! Working from local JSON file\n', 'color: lightGreen', error);
        this.filmService.getLocalFilms().subscribe(
          response => {
            this.topFilmsList = response.data.movies;
            this.loading = false;
          }
        );
      });
  }
}
