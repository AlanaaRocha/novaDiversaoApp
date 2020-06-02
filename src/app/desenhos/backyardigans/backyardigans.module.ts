import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackyardigansPageRoutingModule } from './backyardigans-routing.module';

import { BackyardigansPage } from './backyardigans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackyardigansPageRoutingModule
  ],
  declarations: [BackyardigansPage]
})
export class BackyardigansPageModule {}
