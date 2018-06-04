import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent} from './components/mainRoute/shared/menu/menu.component';
import { HomeComponent } from './components/mainRoute/home/home.component';
import { LayoutComponent as MainRouteLayout } from './components/mainRoute/shared/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MainRouteLayout,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
