import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserFavouritesService} from '../../services/user-favourites.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {

  public userFavouriteFilmsNumber = '0';

  constructor(public userFav: UserFavouritesService) {
  }

  ngOnInit(): void {
    this.userFav.sharedQuantity.subscribe(quantity => this.userFavouriteFilmsNumber = quantity);
  }

  public getFavouritesNumber(): void {
    this.userFav.nextQuantity(this.userFav.getUserFavouriteFilms().toString());
  }

}
