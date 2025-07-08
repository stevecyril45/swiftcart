import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceListComponent } from './pages/services/service-list/service-list.component';
import { AirFreightComponent } from './pages/services/air-freight/air-freight.component';
import { OceanFreightComponent } from './pages/services/ocean-freight/ocean-freight.component';
import { ImportExportComponent } from './pages/services/import-export/import-export.component';
import { RoadFreightComponent } from './pages/services/road-freight/road-freight.component';
import { TransportationComponent } from './pages/services/transportation/transportation.component';
import { ForwardingComponent } from './pages/services/forwarding/forwarding.component';
import { ServiceDetailComponent } from './pages/services/service-detail/service-detail.component';
import { AboutComponent } from './pages/pages/basic pages/about/about.component';
import { BookingComponent } from './pages/booking/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ServiceListComponent,
    AirFreightComponent,
    OceanFreightComponent,
    ImportExportComponent,
    RoadFreightComponent,
    TransportationComponent,
    ForwardingComponent,
    ServiceDetailComponent,
    AboutComponent,
    BookingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
