import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent {
  simulationRunning = false;

  startSimulation() {
    this.simulationRunning = true;
    console.log('Simulation started');
  }

  stopSimulation() {
    this.simulationRunning = false;
    console.log('Simulation stopped');
  }

  editSimulation() {
    console.log('Edit simulation');
  }

  viewSimulation() {
    console.log('View simulation');
  }

  addCustomers() {
    console.log('Add customers');
  }

  addVendors() {
    console.log('Add vendors');
  }
}
