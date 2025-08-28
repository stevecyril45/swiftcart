import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/pages/basic pages/about/about.component';
import { BookingComponent } from './pages/booking/booking/booking.component';
import { GoodsFurnitureComponent } from './pages/services/goods-furniture/goods-furniture.component';
import { ProvisionAndSupplyComponent } from './pages/services/provision-and-supply/provision-and-supply.component';
import { FURNITUREFormComponent } from './pages/booking/GOODS/furniture-form/furniture-form.component';
import { PROVISIONFormComponent } from './pages/booking/provision-form/provision-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    BookingComponent,
    GoodsFurnitureComponent,
    ProvisionAndSupplyComponent,
    FURNITUREFormComponent,
    PROVISIONFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
