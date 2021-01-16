import {Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  @Input()
  public showModal = false;
  @Input()
  public videoSrc?: string;
  @Input()
  public qualities?: Array<{
    quality: string;
    videoURL: string;
  }>;
  @Input()
  public content?: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
