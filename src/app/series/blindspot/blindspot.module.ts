import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlindspotPageRoutingModule } from './blindspot-routing.module';

import { BlindspotPage } from './blindspot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlindspotPageRoutingModule
  ],
  declarations: [BlindspotPage]
})
export class BlindspotPageModule {}
