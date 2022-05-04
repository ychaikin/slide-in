import {
  AfterViewInit,
  ComponentRef,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { SlideInComponent } from '../slide-in/slide-in.component';

@Directive({
  selector: '[appSlideOutDir]',
})
export class SlideOutDirDirective implements AfterViewInit {
  slideOutComponent!: ComponentRef<SlideInComponent>;

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngAfterViewInit(): void {
    this.slideOutComponent =
      this.viewContainer.createComponent<SlideInComponent>(SlideInComponent);
    this.slideOutComponent.instance.innerTemplate = this.templateRef;
  }

  @Input() set appSlideOutDir(show: boolean) {
    this.slideOutComponent.instance.show = show;
  }
}
