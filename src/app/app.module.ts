import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SlideInComponent } from './slide-in/slide-in.component';
import { SlideOutDirDirective } from './slide-out-dir/slide-out-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    SlideInComponent,
    SlideOutDirDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
