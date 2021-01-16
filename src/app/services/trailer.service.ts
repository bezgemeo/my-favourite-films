import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const token1 = '2c64fd4c-c1b1-4b93-8db9-12682a7dacc5';
const token2 = 'ac0b35af-3207-48a4-9513-d440689db6c0';

@Injectable({
  providedIn: 'root'
})
export class TrailerService {

  constructor(private http: HttpClient) {
  }

  // todo: add request to local storage if there is an error
  getTrailer(filmId: string): Observable<any> {
    return this.http.get(
      `https://www.myapifilms.com/imdb/idIMDB?idIMDB=${filmId}&token=${token2}&format=json&language=en-us&trailers=1`
    );
  }
}
