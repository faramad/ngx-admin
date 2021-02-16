/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbMenuModule,
  NbChatModule,
  NbToastrModule,
  NbWindowModule,
  NbDialogModule,
  NbSidebarModule,
  NbDatepickerModule,
} from '@nebular/theme';

import { NbAuthModule } from '@nebular/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NbFirebaseAuthModule } from '@nebular/firebase-auth';
import { AuthGuard, RoleGuard } from './auth/auth-gard.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    
    NbAuthModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NbFirebaseAuthModule,

    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbChatModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbDatepickerModule.forRoot(),
  ],
  providers: [AuthGuard, RoleGuard],
  bootstrap: [AppComponent],
})

export class AppModule {}
