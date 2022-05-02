import {
  AfterContentInit,
  Directive,
  EmbeddedViewRef,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { SlideInComponent } from '../slide-in/slide-in.component';

@Directive({
  selector: '[appSlideOutDir]',
})
export class SlideOutDirDirective implements OnInit {
  templateView!: EmbeddedViewRef<any>;

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit() {
    // const container = this.viewContainer.detach();
    // this.viewContainer.createComponent<SlideInComponent>(SlideInComponent);
    // const oldView = this.viewContainer.detach();
    // console.log('oldView', oldView);
    // this.viewContainer.clear();
    // const slideOut =
    //   this.viewContainer.createComponent<SlideInComponent>(SlideInComponent);

    const slideOutComponent =
      this.viewContainer.createComponent<SlideInComponent>(SlideInComponent);
    slideOutComponent.instance.viewContainer.clear();
    slideOutComponent.instance.viewContainer.createEmbeddedView(
      this.templateRef
    );
    // const slideContainerRef = slideOutComponent.injector.get(ViewContainerRef);
    // slideContainerRef.createEmbeddedView(this.templateRef);
  }
}

// ngAfterContentInit(): void {
//   // console.log('template', this.templateRef);
//   // const oldView = this.viewContainer.detach();
//   // this.viewContainer.clear();
//   // const slideOut =
//   //   this.viewContainer.createComponent<SlideInComponent>(SlideInComponent);
// }
