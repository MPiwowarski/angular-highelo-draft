import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app-routes';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/common/pageNotFound/pageNotFound.component';
import { MenuComponent } from './components/mainRoute/shared/menu/menu.component';
import { HomeComponent } from './components/mainRoute/home/home.component';
import { LayoutComponent as MainRouteLayout } from './components/mainRoute/shared/layout/layout.component';
import { FaqComponent } from './components/mainRoute/faq/faq.component';
import { WinsBoostPurchaseComponent } from './components/mainRoute/winsBoostPurchase/wins-boost-purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MenuComponent,
    HomeComponent,
    FaqComponent,
    WinsBoostPurchaseComponent,
    MainRouteLayout,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
