/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';

import { NbFirebasePasswordStrategy } from '@nebular/firebase-auth';

import { LoginComponent } from './login/login.component';
import { RequestPasswordComponent } from './request-password/request-password.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbAuthModule.forRoot({
      strategies: [
        NbFirebasePasswordStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {
        login: {
          redirectDelay: 0,
          rememberMe: false,
          showMessages: {
            succes: false,
            error: true
          }
        },
        logout: {
          strategy: 'email',
          redirectDelay: 0,
        },
        requestPassword: {
          redirectDelay: 0,
          strategy: 'email',
          showMessages: {
            success: false,
            error: true,
          },
        },
        validation: {
          password: {
            required: true,
            minLength: 8,
            maxLength: 50,
          },
          email: {
            required: true,
          },
        },
      },
    }),
  ],
  declarations: [
    LoginComponent,
    RequestPasswordComponent,
  ],
})

export class AuthModule {
}
