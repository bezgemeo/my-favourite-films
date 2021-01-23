import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFavouritesService {
  private quantity = new BehaviorSubject(this.getUserFavouriteFilms().toString());
  public sharedQuantity = this.quantity.asObservable();

  constructor() {
  }

  getUserFavouriteFilms(): number {
    const LS = window.localStorage;
    let quantity = 0;

    for (const favouriteFilm in LS) {
      if (LS.hasOwnProperty(favouriteFilm)) {
        quantity += favouriteFilm.startsWith('favourite_') ? 1 : 0;
      }
    }
    return quantity;
  }

  nextQuantity(favFilmsQuantity: string): void {
    this.quantity.next(favFilmsQuantity);
  }
}
