import {
  Component,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';


@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.sass'],
})
export class TabComponent {
  @Input()
  public get active(): boolean {
    return this._active;
  }

  public set active(active: boolean) {
    this.renderActive(active);
    this._active = active;
  }

  private _active: boolean = false;


  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
  ) {
  }


  private renderActive(active: boolean): void {
    const method: string = active ? 'addClass' : 'removeClass';
    const tabTitle: HTMLElement = this.elementRef.nativeElement.firstElementChild;
    this.renderer[method](tabTitle, cssClassTitleActive);
  }
}

const cssClassTitleActive: string = 'tabs__title--active';
