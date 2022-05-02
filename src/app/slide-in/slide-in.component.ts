import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-slide-in',
  templateUrl: './slide-in.component.html',
  styleUrls: ['./slide-in.component.css'],
})
export class SlideInComponent {
  constructor(public viewContainer: ViewContainerRef) {}

  @Input()
  show = false;
}
