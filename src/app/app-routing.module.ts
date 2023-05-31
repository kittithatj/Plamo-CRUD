import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPlamoComponent } from './components/add-plamo/add-plamo.component';
import { PlamoInfoComponent } from './components/plamo-info/plamo-info.component';
import { PlamoListComponent } from './components/plamo-list/plamo-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'plamo-list' },
  { path: 'add-plamo', component: AddPlamoComponent },
  { path: 'plamo-list', component: PlamoListComponent },
  { path: 'update-plamo/:id', component: PlamoInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
