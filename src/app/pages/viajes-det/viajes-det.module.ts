import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesDetPageRoutingModule } from './viajes-det-routing.module';

import { ViajesDetPage } from './viajes-det.page';

import { NomadBudgetComponent } from '../../nomad-budget/nomad-budget.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesDetPageRoutingModule,
    NomadBudgetComponent
  ],
  declarations: [ViajesDetPage]
})
export class ViajesDetPageModule {}
