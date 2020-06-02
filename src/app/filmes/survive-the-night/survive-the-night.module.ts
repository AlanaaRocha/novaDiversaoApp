import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurviveTheNightPageRoutingModule } from './survive-the-night-routing.module';

import { SurviveTheNightPage } from './survive-the-night.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurviveTheNightPageRoutingModule
  ],
  declarations: [SurviveTheNightPage]
})
export class SurviveTheNightPageModule {}
