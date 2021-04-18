import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPerdaComponent } from './components/add-perda/add-perda.component';
import { PerdasListComponent } from './components/perdas-list/perdas-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'perdas', pathMatch: 'full' },
  { path: 'perdas', component: PerdasListComponent },
  { path: 'add', component: AddPerdaComponent, runGuardsAndResolvers: 'always'},
  { path:'add/:id', component:AddPerdaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
