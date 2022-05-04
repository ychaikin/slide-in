import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show1 = false;
  show2 = false;

  toggle1() {
    this.show1 = !this.show1;
  }

  toggle2() {
    this.show2 = !this.show2;
  }
}
