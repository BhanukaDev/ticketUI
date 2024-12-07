import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

interface Vendor {
  name: string;
  targetTicketSales: number;
  releaseRate: number;
  ticketsReleased: number;
}

interface Customer {
  name: string;
  retrievalRate: number;
  ticketsBought: number;
}

@Component({
  selector: 'app-view-sim',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatButtonModule, CommonModule],
  templateUrl: './view-sim.component.html',
  styleUrl: './view-sim.component.scss',
})
export class ViewSimComponent {
  totalTicketsInPool = 100;

  vendorColumns = [
    'name',
    'targetTicketSales',
    'releaseRate',
    'ticketsReleased',
  ];
  customerColumns = ['name', 'retrievalRate', 'ticketsBought'];

  vendors: Vendor[] = [
    {
      name: 'Tech Tickets',
      targetTicketSales: 500,
      releaseRate: 20,
      ticketsReleased: 75,
    },
    {
      name: 'Event Masters',
      targetTicketSales: 300,
      releaseRate: 15,
      ticketsReleased: 45,
    },
  ];

  customers: Customer[] = [
    { name: 'Alice', retrievalRate: 10, ticketsBought: 25 },
    { name: 'Bob', retrievalRate: 8, ticketsBought: 18 },
  ];

  ngOnInit() {}
}
