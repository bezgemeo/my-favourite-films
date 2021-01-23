import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {IFilm} from '../interfaces/film-interface';

const token1 = '2c64fd4c-c1b1-4b93-8db9-12682a7dacc5';
const token2 = 'ac0b35af-3207-48a4-9513-d440689db6c0';

const remoteData = `https://www.myapifilms.com/imdb/top?start=1&end=20&token=${token1}&format=json&data=1`;
const localData = '../../assets/localData_with-trailers.json';

interface IRemoteData {
  data: {
    movies: IFilm[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) {
  }

  // get films from remote host
  getFilms(): Observable<IRemoteData> {
    return this.http.get<IRemoteData>(remoteData)
      .pipe(
        catchError( _ => this.getLocalFilms())
      );
  }

  // get films list from localhost with trailers at once
  getLocalFilms(): Observable<IRemoteData> {
    return this.http.get<IRemoteData>(localData);
  }
}
