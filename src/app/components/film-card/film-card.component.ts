import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {UserFavouritesService} from '../../services/user-favourites.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  @Input()
  public idIMDB = '';
  @Input()
  public poster?: string;
  @Input()
  public title = '';
  @Input()
  public year?: string;
  @Input()
  public rating?: string;
  @Input()
  public countries?: string[];
  @Input()
  public directors?: Array<{ id: string; name: string; }>;

  @Input()
  public trailerQualitiesList?: any;
  public chosenQuality?: string;

  public localId = '';

  public addedToFavourite = false;

  public trailerModalShown = false;
  public favouriteModalShown = false;
  public watched = false;
  public dateToWatch = null;
  public remember = false;
  public review = '';

  public message = '';

  constructor(private userFav: UserFavouritesService) {
  }

  ngOnInit(): void {
    this.localId = `favourite_${this.idIMDB}`;
    this.addedToFavourite = this.checkFavourite();
    this.fillFromStorage();
    this.userFav.sharedQuantity.subscribe(quantity => quantity);
  }

  public showForm(): void {
    this.favouriteModalShown = true;
  }

  public editFavourite(event: Event): void {
    const LS = window.localStorage;
    LS.setItem(this.localId, JSON.stringify(event) as string);
    this.fillFromStorage();
    this.addedToFavourite = true;
    this.favouriteModalShown = false;
    this.updateFavouriteFilmsQuantity();
  }

  public updateFavouriteFilmsQuantity(): void {
    this.userFav.nextQuantity(this.userFav.getUserFavouriteFilms().toString());
  }

  public fillFromStorage(): void {
    if (this.checkFavourite()) {
      const data = JSON.parse(window.localStorage.getItem(this.localId) as string);
      this.watched = data.watched;
      this.dateToWatch = data.dateToWatch;
      this.remember = data.remember;
      this.review = data.review;
    }
  }

  public checkFavourite(): boolean {
    return !!window.localStorage.getItem(this.localId);
  }

  public openModalWithTrailer(): void {
    this.trailerModalShown = true;
  }

  public clearChosenQuality(): void {
    if (this.trailerModalShown) {
      this.chosenQuality = '';
      this.trailerModalShown = false;
    }
  }

  public chooseQuality(quality: string): void {
    this.openModalWithTrailer();
    this.chosenQuality = quality;
  }
}
