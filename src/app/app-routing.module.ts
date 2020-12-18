import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponentComponent } from './components/details-component/details-component.component';


const routes: Routes = [
  {
    path: 'details/:id',
    pathMatch: 'full',
    component : DetailsComponentComponent
  },
  { path: 'home', component: AppComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
