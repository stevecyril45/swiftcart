import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'service-list', component: ServiceListComponent },
  { path: 'air-freight', component: AirFreightComponent },
  { path: 'ocean-freight', component: OceanFreightComponent },
  { path: 'import-export', component: ImportExportComponent },
  { path: 'road-freight', component: RoadFreightComponent },
  { path: 'transportation', component: TransportationComponent },
  { path: 'forwarding', component: ForwardingComponent },
  { path: 'service-detail', component: ServiceDetailComponent },
  { path: 'about', component: AboutComponent },
  {path: 'booking', component:BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
