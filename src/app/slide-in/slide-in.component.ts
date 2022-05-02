import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-in',
  templateUrl: './slide-in.component.html',
  styleUrls: ['./slide-in.component.css'],
})
export class SlideInComponent {
  @Input()
  show = false;
}
