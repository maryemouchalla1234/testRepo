import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { DataListComponent } from './data-list/data-list.component';


const routes: Routes = [
  {
    path:'afficher',
    component: DataListComponent
  },
  {
    path:'',
    component: UserComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
