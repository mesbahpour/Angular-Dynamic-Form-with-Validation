import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '../shared/form/form.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    NotFoundComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FormModule,
    SharedModule
  ]
})
export class SessionModule { }
