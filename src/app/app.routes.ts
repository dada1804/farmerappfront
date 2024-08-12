import { Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { FarmersComponent } from './components/farmers/farmers.component';
import { FarmsComponent } from './components/farms/farms.component';
import { SchedulesComponent } from './components/schedules/schedules.component';

export const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: 'farmers', component: FarmersComponent },
  { path: 'farms', component: FarmsComponent },
  { path: 'schedules', component: SchedulesComponent },
  { path: '', redirectTo: '/countries', pathMatch: 'full' }
];
