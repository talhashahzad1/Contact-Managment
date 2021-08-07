import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard/dashboard.component";
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes: Routes = [
  
      { 
        path: 'dashboard', 
        component: DashboardComponent,
        children:[
          { path: 'contact-detail/:id', component:  ContactDetailComponent}
        ]
      },
      
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
