import {Component, Input, OnInit} from '@angular/core';

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

  public addedToFavourite = false;

  public trailerModalShown = false;
  public favouriteModalShown = false;
  public watched = false;
  public dateToWatch = null;
  public remember = false;
  public review = '';

  constructor() {
  }

  ngOnInit(): void {
    this.addedToFavourite = this.checkFavourite();
    this.fillFromStorage();
  }

  public showForm(): void {
    this.favouriteModalShown = true;
  }

  public editFavourite(event: Event): void {
    const LS = window.localStorage;
    LS.setItem(this.idIMDB, JSON.stringify(event) as string);
    this.fillFromStorage();
    this.addedToFavourite = true;
    this.favouriteModalShown = false;
  }

  public fillFromStorage(): void {
    if (this.checkFavourite()) {
      const data = JSON.parse(window.localStorage.getItem(this.idIMDB) as string);
      this.watched = data.watched;
      this.dateToWatch = data.dateToWatch;
      this.remember = data.remember;
      this.review = data.review;
    }
  }

  public checkFavourite(): boolean {
    return !!window.localStorage.getItem(this.idIMDB);
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
