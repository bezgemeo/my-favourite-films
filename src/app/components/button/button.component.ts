import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  public cssClass?: string;
  @Input()
  public buttonCaption?: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
