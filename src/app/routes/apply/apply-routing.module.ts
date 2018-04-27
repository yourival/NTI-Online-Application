import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DomesticFormComponent } from './domestic-form/domestic-form.component'

const routes: Routes = [
  {
    path: '',
    children: [
        { path: 'domestic', component: DomesticFormComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ApplyRoutingModule {
  
 }
