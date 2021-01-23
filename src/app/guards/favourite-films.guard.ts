import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteFilmsGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const LS = window.localStorage;
    let result = false;

    for (const item in LS) {
      if (LS.hasOwnProperty(item)) {
        result = item.startsWith('favourite_');
      }
    }
    return result;
  }
}
