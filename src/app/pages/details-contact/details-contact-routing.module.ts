import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsContactComponent } from './details-contact.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsContactRoutingModule { }
