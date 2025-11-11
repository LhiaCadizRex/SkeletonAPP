import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nomad-budget',
  templateUrl: './nomad-budget.component.html',
  styleUrls: ['./nomad-budget.component.scss'],
})
export class NomadBudgetComponent {

  constructor() { }

   @Input() NomadBudget: string = 'Mi Empresa'; // Valor predeterminado

}
