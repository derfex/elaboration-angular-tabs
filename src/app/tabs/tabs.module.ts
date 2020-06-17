import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TabContentComponent } from './tab-content/tab-content.component';
import { TabTitleComponent } from './tab-title/tab-title.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    TabContentComponent,
    TabTitleComponent,
    TabComponent,
    TabsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TabContentComponent,
    TabTitleComponent,
    TabComponent,
    TabsComponent,
  ],
})
export class TabsModule {
}
