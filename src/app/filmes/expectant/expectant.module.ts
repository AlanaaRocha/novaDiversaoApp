import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpectantPageRoutingModule } from './expectant-routing.module';

import { ExpectantPage } from './expectant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpectantPageRoutingModule
  ],
  declarations: [ExpectantPage]
})
export class ExpectantPageModule {}
