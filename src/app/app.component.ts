import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Favourite Films App';

  constructor(public router: Router) {
  }

  public routeIsActive(routePath: string): boolean {
    return this.router.url === routePath;
  }
}
