import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  Subscription,
} from 'rxjs';

import { TabComponent } from './tabs/tab/tab.component';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnDestroy, OnInit {
  public activeTab: TabComponent;
  public tabs: number[] = [1, 2];

  @HostListener('click', ['$event.target'])
  private onMouseClick(targetNativeElement: HTMLElement): void {
    const tabTitleElement: HTMLElement = targetNativeElement.closest('tab-title');
    if (!tabTitleElement) {
      return;
    }
    const tabNumber: number = +tabTitleElement.firstElementChild.innerHTML;
    this.activate.emit(tabNumber);
  }

  @ViewChildren(TabComponent)
  private tabComponents: QueryList<TabComponent>;

  private activate: EventEmitter<number> = new EventEmitter<number>();
  private subscriptions: Subscription = new Subscription();


  public ngOnInit(): void {
    this.subscriptions.add(
      this.activate.subscribe((tabNumber: number) => {
        const tab: TabComponent = this.getTabComponentByIndex(tabNumber - 1);
        if (this.activeTab) {
          this.activeTab.active = false;
        }
        tab.active = true;
        this.activeTab = tab;
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


  public dec(): void {
    this.tabs = this.tabs.slice(0, -1);
  }

  public inc(): void {
    this.tabs = [...this.tabs, (this.tabs.length + 1)];
  }

  private getTabComponentByIndex(index: number): TabComponent {
    return this.tabComponents.toArray()[index];
  }
}
