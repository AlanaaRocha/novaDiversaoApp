import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurviveTheNightPage } from './survive-the-night.page';

const routes: Routes = [
  {
    path: '',
    component: SurviveTheNightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurviveTheNightPageRoutingModule {}
