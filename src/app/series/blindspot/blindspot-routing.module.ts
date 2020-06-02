import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlindspotPage } from './blindspot.page';

const routes: Routes = [
  {
    path: '',
    component: BlindspotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlindspotPageRoutingModule {}
