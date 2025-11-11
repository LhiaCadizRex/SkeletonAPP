import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesFormPageRoutingModule } from './viajes-form-routing.module';

import { ViajesFormPage } from './viajes-form.page';

import { NomadBudgetComponent } from '../../nomad-budget/nomad-budget.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesFormPageRoutingModule,
    NomadBudgetComponent
  ],
  declarations: [ViajesFormPage]
})
export class ViajesFormPageModule {}
