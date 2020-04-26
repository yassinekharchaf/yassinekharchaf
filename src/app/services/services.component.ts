import { ServiceService } from './service.service';
import { Component, OnInit } from '@angular/core';
import { Service } from './service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: Array<Service>;
  currentService: Service;
  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.services = this.serviceService.services;
    this.currentService = this.services[0];
  }
  updateCurrentService(service: Service) {
    this.currentService = service;
  }
}
