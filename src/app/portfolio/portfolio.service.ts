import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  projects: Array<Portfolio> = [
    {
      name: 'MolenGeek CodingSchool',
      imgUrl: '',
      description: '',
    },
    {
      name: 'ULB HeLSci',
      imgUrl: '',
      description: '',
    },
    {
      name: 'MolenGeek Lead Developper',
      imgUrl: '',
      description: '',
    },
    {
      name: 'RVA Office 365 training',
      imgUrl: '',
      description: '',
    },
    {
      name: 'YakPress',
      imgUrl: '',
      description: '',
    },
    {
      name: 'Smartrii Instructor',
      imgUrl: '',
      description: '',
    },
    {
      name: 'JEF',
      imgUrl: '',
      description: '',
    },
    {
      name: 'JobYourself',
      imgUrl: '',
      description: '',
    },
  ];
  constructor() {}
}
