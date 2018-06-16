import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app-routes';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/common/pageNotFound/pageNotFound.component';
import { MenuComponent } from './components/mainRoute/shared/menu/menu.component';
import { HomeComponent } from './components/mainRoute/home/home.component';
import { LayoutComponent as MainRouteLayout } from './components/mainRoute/shared/layout/layout.component';
import { FaqComponent } from './components/mainRoute/faq/faq.component';
import { DuoQueuePurchaseComponent } from './components/mainRoute/boostPurchase/duoQueuePurchase/duo-queue-purchase.component';
import { OrderImageComponent } from './components/common/orderImage/order-image.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MenuComponent,
    HomeComponent,
    FaqComponent,
    MainRouteLayout,
    DuoQueuePurchaseComponent,
    OrderImageComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
