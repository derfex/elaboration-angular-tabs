import {
  Component,
  ElementRef,
  Renderer2,
} from '@angular/core';


@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass'],
})
export class TabsComponent {
  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
  ) {
    renderer.addClass(elementRef.nativeElement, cssClassTabs);
  }
}

const cssClassTabs: string = 'tabs__titles';
