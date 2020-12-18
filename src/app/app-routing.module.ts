import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponentComponent } from './components/details-component/details-component.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  // {
  //   path: 'details/:id',
  //   pathMatch: 'full',
  //   component : DetailsComponentComponent
  // },
  // { path: 'home', component: AppComponent },
  // { path: '',   redirectTo: '/home', pathMatch: 'full' },

  {
    path: '',
    children: [
    // {
    //   path: '',
    //   // pathMatch: 'full',
    //   component: UsersComponent,
    // },
    {
      path: 'details/:id',
      pathMatch: 'full',
      component: DetailsComponentComponent
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
