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
  { path: 'destination', component: DestinationComponent,
    children: [
      { path: '', redirectTo: 'Moon', pathMatch: 'full' },
      { path: ':name', component: DestinationComponent }
    ]
  },
  { path: 'crew', component: CrewComponent,
    children: [
      { path: '', redirectTo: '1', pathMatch: 'full' },
      { path: ':id', component: CrewComponent }
    ]
  },
  { path: 'technology', component: TechnologyComponent,
    children: [
      { path: '', redirectTo: '1', pathMatch: 'full' },
      { path: ':id', component: TechnologyComponent }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
