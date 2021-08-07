import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule , FormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [
    DashboardComponent,
    ContactDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    DashboardRoutingModule,
    MatRippleModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
