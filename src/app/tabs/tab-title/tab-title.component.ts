import {
  Component,
  ElementRef,
  Renderer2,
} from '@angular/core';


@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.sass'],
})
export class TabTitleComponent {
  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
  ) {
    renderer.addClass(elementRef.nativeElement, cssClassTitle);
  }
}

const cssClassTitle: string = 'tabs__title';
