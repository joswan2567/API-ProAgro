import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPerdaComponent } from './components/add-perda/add-perda.component';
import { PerdaDetailsComponent } from './components/perda-details/perda-details.component';
import { PerdasListComponent } from './components/perdas-list/perdas-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'perdas', pathMatch: 'full' },
  { path: 'perdas', component: PerdasListComponent },
  { path: 'perdas/:id', component: PerdaDetailsComponent },
  { path: 'perdas/:locLat,:locLng,:date', component: PerdaDetailsComponent },
  { path: 'add', component: AddPerdaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
