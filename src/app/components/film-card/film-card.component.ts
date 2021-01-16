import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  @Input()
  public idIMDB?: string;
  @Input()
  public poster?: string;
  @Input()
  public title?: string;
  @Input()
  public year?: string;
  @Input()
  public rating?: string;
  @Input()
  public countries?: string[];
  @Input()
  public directors?: Array<{ id: string; name: string; }>;
  public favourite = false;
  public fieldName = 'favouriteFilms';
  public modalShown = false;
  @Input()
  public trailerQualitiesList?: any;
  public chosenQuality = '';

  constructor() {}

  ngOnInit(): void {
    this.checkFavourite(this.idIMDB);
  }

  public toggleFavourite(id: string): void {
    const LS = window.localStorage;

    if (!LS.getItem(this.fieldName)) {
      LS.setItem(this.fieldName, JSON.stringify([id]));
    } else {
      const filmsIdArray = JSON.parse(LS.getItem(this.fieldName) as string);
      if (!filmsIdArray.includes(id)) {
        filmsIdArray.push(id);
      } else {
        filmsIdArray.splice(filmsIdArray.indexOf(id), 1);
      }
      LS.setItem(this.fieldName, JSON.stringify(filmsIdArray));
      this.checkFavourite(id);
    }
  }

  public checkFavourite(id: string | undefined): void {
    if (id !== undefined) {
      const filmsArray = JSON.parse(window.localStorage.getItem(this.fieldName) as string);
      this.favourite = filmsArray.includes(id);
    }
  }

  public openModalWithTrailer(): void {
    this.modalShown = true;
  }

  public chooseQuality(quality: string): void {
    this.chosenQuality = quality;
    this.openModalWithTrailer();
  }
}
