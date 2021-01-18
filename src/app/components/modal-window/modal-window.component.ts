import {Component, Input, Output, TemplateRef, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  @Input()
  public modalShown = false;
  @Input()
  public content?: TemplateRef<any>;

  @Output()
  public modalClosed = new EventEmitter();

  constructor() {
  }

  public closeModal(): void {
    this.modalShown = !this.modalShown;
    this.modalClosed.emit();
  }
}
