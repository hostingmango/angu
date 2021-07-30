import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { Routes } from '@angular/router';

const routers: Routes = [
  { path: 'sign-in', component: SignInComponent }
];

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    SignInComponent
  ]
})
export class SignInModule { }
