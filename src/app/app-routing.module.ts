import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditGarantiaComponent } from './components/add-edit-garantia/add-edit-garantia.component';
import { ListGarantiasComponent } from './components/list-garantias/list-garantias.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  { path: '', component: ListGarantiasComponent },
  { path: 'add', component: AddEditGarantiaComponent },
  { path: 'edit/:id', component: AddEditGarantiaComponent },
  { path: 'detalles/:id', component: DetallesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
