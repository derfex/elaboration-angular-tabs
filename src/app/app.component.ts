import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public tabs: number[] = [1, 2];

  public dec(): void {
    this.tabs = this.tabs.slice(0, -1);
  }

  public inc(): void {
    this.tabs = [...this.tabs, (this.tabs.length + 1)];
  }
}
