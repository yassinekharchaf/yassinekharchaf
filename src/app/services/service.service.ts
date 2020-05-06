import { Injectable } from '@angular/core';
import { Service } from './service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  services: Array<Service> = [
    {
      name: 'Apps',
      imgUrl: 'webapp.jpg',
      description:
        'I provide custome solution for companies. Could be to help them to be present online or to offer their product or even to digitalise and automate their services and tasks',
      subservices: [
        'Website',
        'E-shop',
        'Web Application',
        'Mobile Application',
        'PWA',
      ],
    },
    {
      name: 'Training',
      imgUrl: 'training.jpg',
      description:
        'After creating an innovative learning methodologie, I have been teaching more than hundred people hard skills in coding. I also train teams in company to upgrade their skills or get new one.',
      subservices: [
        'Route for training web developers (hard skills)',
        'Office 365',
        'How to interact and work with developers as a project manager',
      ],
    },
    {
      name: 'Company Digitalisation',
      imgUrl: 'digitalisation.jpg',
      description:
        'Many company are looking for some specific tools that will automate their tasks. For that I provide a strategie plan to cocreate those tools and train the staff and follow them all along this transition.',
      subservices: [
        'Analyse the process',
        'Imagine, create and develope process',
        'Developping tools and integrate them',
        'Training and follow up of the team',
      ],
    },
  ];
  constructor() {}
}
