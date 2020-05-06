import { PortfolioService } from './portfolio.service';
import { Component, OnInit } from '@angular/core';
import { Portfolio } from './portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  projects: Array<Portfolio>;
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.projects = this.portfolioService.projects;
  }
}
