import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/pages/basic pages/about/about.component';
import { BookingComponent } from './pages/booking/booking/booking.component';
import { GoodsFurnitureComponent } from './pages/services/goods-furniture/goods-furniture.component';
import { ProvisionAndSupplyComponent } from './pages/services/provision-and-supply/provision-and-supply.component';
import { FURNITUREFormComponent } from './pages/booking/GOODS/furniture-form/furniture-form.component';
import { PROVISIONFormComponent } from './pages/booking/provision-form/provision-form.component';
import { QuoteComponent } from './shared/quote/quote.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  {path: 'booking', component:BookingComponent},
  {path: 'goods&furniture', component:GoodsFurnitureComponent},
  {path: 'provision&supply', component:ProvisionAndSupplyComponent},
  {path: 'furniture', component:FURNITUREFormComponent},
  {path: 'provision', component:PROVISIONFormComponent},
  {path: 'quote', component:QuoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
     scrollPositionRestoration: 'enabled', // ✅ always go to top on navigation
    anchorScrolling: 'enabled'   })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
