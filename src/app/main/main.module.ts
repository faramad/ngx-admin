import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { MainRoutingModule } from './main-routing.module';

import {
  NbMenuModule,
  NbIconModule,
  NbCardModule,
  NbInputModule,
  NbBadgeModule,
  NbRadioModule,
  NbTabsetModule,
  NbSelectModule,
  NbButtonModule,
  NbLayoutModule,
  NbSpinnerModule,
  NbActionsModule,
  NbCheckboxModule,
  NbAccordionModule,
  NbProgressBarModule,
} from '@nebular/theme';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    ThemeModule,
    MainRoutingModule,
    NbMenuModule,
    NbIconModule,
    NbCardModule,
    NbInputModule,
    NbBadgeModule,
    NbRadioModule,
    NbTabsetModule,
    NbSelectModule,
    NbButtonModule,
    NbLayoutModule,
    NbSpinnerModule,
    NbActionsModule,
    NbCheckboxModule,
    NbAccordionModule,
    NbProgressBarModule,
  ],
  declarations: [
    MainComponent,
    HomeComponent,
  ],
})

export class MainModule {}
