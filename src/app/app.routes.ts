import { Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ViewSimComponent } from './components/view-sim/view-sim.component';

export const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
  },
  {
    path: 'view-sim',
    component: ViewSimComponent,
  },
];
