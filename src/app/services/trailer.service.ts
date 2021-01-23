import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const token1 = '2c64fd4c-c1b1-4b93-8db9-12682a7dacc5';
const token2 = 'ac0b35af-3207-48a4-9513-d440689db6c0';

interface IRemoteTrailer {
  data: {
    movies: Array<{
      idIMDB: string;
      trailer: {
        qualities: Array<{ quality: string; videoURL: string; }>;
      };
    }>;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TrailerService {

  constructor(private http: HttpClient) {
  }

  getTrailer(filmId: string): Observable<IRemoteTrailer> {
    return this.http.get<IRemoteTrailer>(
      `https://www.myapifilms.com/imdb/idIMDB?idIMDB=${filmId}&token=${token1}&format=json&language=en-us&trailers=1`
    );
  }
}
