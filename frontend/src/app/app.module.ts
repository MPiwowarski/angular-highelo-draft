import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app-routes';

import { DuoQueuePurchaseService } from './services/mainRoute/boostPurchase/duoQueuePurchase/duo-queue-purchase.service';
import { OrderImageService } from './services/common/orderImage/order-image.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/common/pageNotFound/pageNotFound.component';
import { MenuComponent } from './components/mainRoute/shared/menu/menu.component';
import { HomeComponent } from './components/mainRoute/home/home.component';
import { LayoutComponent as MainRouteLayout } from './components/mainRoute/shared/layout/layout.component';
import { FaqComponent } from './components/mainRoute/faq/faq.component';
import { DuoQueuePurchaseComponent } from './components/mainRoute/boostPurchase/duoQueuePurchase/duo-queue-purchase.component';
import { OrderImageComponent } from './components/common/orderImage/order-image.component';
import { PaymentComponent } from './components/mainRoute/boostPurchase/shared/payment.component';

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
    PaymentComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    DuoQueuePurchaseService,
    OrderImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
