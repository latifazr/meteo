import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeteoComponent } from './meteo/meteo.component';

const routes: Routes = [{path:'home',component:HomeComponent},{path:'meteo',component:MeteoComponent},{ path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
