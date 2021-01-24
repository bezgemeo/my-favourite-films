import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-remove-from-fav',
  templateUrl: './remove-from-fav.component.html',
  styleUrls: ['./remove-from-fav.component.scss']
})
export class RemoveFromFavComponent {
  @Input()
  public filmName = '';
  @Input()
  public shown = true;

  @Output()
  public remove = new EventEmitter();
  @Output()
  public goBack = new EventEmitter();

  constructor() {
  }

  public closeModal(): void {
    this.goBack.emit();
  }

  public removeFav(): void {
    this.remove.emit();
  }
}
