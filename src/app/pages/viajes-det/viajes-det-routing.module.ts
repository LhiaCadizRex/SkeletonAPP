import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajesDetPage } from './viajes-det.page';

const routes: Routes = [
  {
    path: '',
    component: ViajesDetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesDetPageRoutingModule {}
