import {
  NgModule,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabsModule } from './tabs/tabs.module';
import { TestComponent } from './test.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
