import { Injectable } from '@angular/core';
import { Service } from './service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  services: Array<Service> = [
    {
      name: 'WebApp',
      imgUrl: 'webapp.jpg',
      description:
        'I provide custome solution for companies. Could be to help them to be present online or to offer their product or even to digitalise and automate their services and tasks',
    },
    {
      name: 'Training',
      imgUrl: 'training.jpg',
      description:
        'After creating an innovative learning methodologie, I have been teaching more than hundred people hard skills in coding. I also train teams in company to upgrade their skills or get new one.',
    },
  ];
  constructor() {}
}
