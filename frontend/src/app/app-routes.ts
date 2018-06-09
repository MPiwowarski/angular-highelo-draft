import { Routes } from '@angular/router';
import { HomeComponent } from './components/mainRoute/home/home.component';
import { FaqComponent } from './components/mainRoute/faq/faq.component';
import { PageNotFoundComponent } from './components/common/pageNotFound/pageNotFound.component';
import { DuoQueuePurchaseComponent } from './components/mainRoute/boostPurchase/duoQueuePurchase/duo-queue-purchase.component';

export const AppRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'duo-queue-purchase', component: DuoQueuePurchaseComponent },
    { path: 'faq', component: FaqComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
