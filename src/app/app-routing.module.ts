import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CrewComponent } from './pages/crew/crew.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { TechnologyComponent } from './pages/technology/technology.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'destination/:name', component: DestinationComponent },
  { path: 'crew/:id', component: CrewComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'technology/:id', component: TechnologyComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
