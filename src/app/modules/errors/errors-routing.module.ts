import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoudComponent } from './not-foud/not-foud.component';

const routes: Routes = [
  {path:'**',redirectTo:'404'},
 {path:'404',component:NotFoudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }
