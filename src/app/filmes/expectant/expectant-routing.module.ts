import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpectantPage } from './expectant.page';

const routes: Routes = [
  {
    path: '',
    component: ExpectantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpectantPageRoutingModule {}
