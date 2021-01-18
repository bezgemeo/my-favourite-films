import {Component, EventEmitter, Input, OnInit, AfterViewInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-favourite-details',
  templateUrl: './favourite-details.component.html',
  styleUrls: ['./favourite-details.component.scss']
})
export class FavouriteDetailsComponent implements OnInit {
  @Input()
  public filmID = '';
  @Input()
  public incomingFilmName = '';
  @Input()
  public watched = false;
  @Input()
  public dateToWatch = '';
  @Input()
  public remember = false;
  @Input()
  public review = '';
  @Input()
  public addedToFav = false;

  @Output()
  public submitForm = new EventEmitter();

  favouriteFilmForm = this.fb.group({
    incomingFilmName: [''],
    watched: [''],
    dateToWatch: ['', [Validators.required]],
    remember: [''],
    review: ['']
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.fillForm();
    // this.setValidatorToInputData();

  }

  public sendData(): void {
    this.submitForm.emit(this.favouriteFilmForm.value);
  }

  public currentName(): string {
    const storageName = JSON.parse(window.localStorage.getItem(this.filmID) as string);
    if (storageName) {
      return storageName.incomingFilmName;
    } else {
      return this.incomingFilmName;
    }
  }

  public setValidatorToInputData(): void {
    const selectInput = this.favouriteFilmForm.get('watched');
    const dateInput = this.favouriteFilmForm.get('dateToWatch');
    const reviewInput = this.favouriteFilmForm.get('review');
    if (selectInput && selectInput.value === 'yes') {
      dateInput?.clearValidators();
      dateInput?.updateValueAndValidity();
      reviewInput?.setValidators([Validators.required, Validators.minLength(20)]);
      reviewInput?.updateValueAndValidity();
    } else if (selectInput && selectInput.value === 'no') {
      dateInput?.setValidators([Validators.required]);
      dateInput?.updateValueAndValidity();
      reviewInput?.clearValidators();
      reviewInput?.updateValueAndValidity();
    }
  }

  public fillForm(): void {
    this.favouriteFilmForm.patchValue({
      incomingFilmName: this.currentName(),
      watched: this.watched,
      dateToWatch: this.dateToWatch,
      remember: this.remember,
      review: this.review
    });
  }
}
