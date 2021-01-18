import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const token1 = '2c64fd4c-c1b1-4b93-8db9-12682a7dacc5';
const token2 = 'ac0b35af-3207-48a4-9513-d440689db6c0';

const remoteData = `https://www.myapifilms.com/imdb/top?start=1&end=20&token=${token1}&format=json&data=1`;
const localData = '../../assets/localData_with-trailers.json';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) {
  }

  // get films from remote host
  getFilms(): Observable<any> {
    return this.http.get(remoteData);
  }

  // get films list from localhost with trailers at once
  getLocalFilms(): Observable<any> {
    return this.http.get(localData);
  }
}
