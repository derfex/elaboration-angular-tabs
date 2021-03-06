import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
import {
  filter,
  map,
} from 'rxjs/operators';

import { TabComponent } from './tabs/tab/tab.component';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements AfterViewInit, OnDestroy, OnInit {
  public activeTab: TabComponent = null;
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


  constructor(
    private readonly cdr: ChangeDetectorRef,
  ) {
  }

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

  public ngAfterViewInit(): void {
    // Activate the first tab.
    this.activate.emit(1);
    this.cdr.detectChanges();

    // Activate the first tab when there is no active tab.
    this.subscriptions.add(
      this.tabComponents.changes
        .pipe(
          filter((changes: QueryList<TabComponent>) => {
            return !changes.find((tab: TabComponent) => tab === this.activeTab);
          }),
          map((changes: QueryList<TabComponent>) => {
            return changes.first || null;
          }),
        )
        .subscribe((tab: TabComponent | null) => {
          if (tab) {
            tab.active = true;
          }
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
