import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WhoAmIComponent,
    pathMatch: 'full',
    data: { animation: 'home' },
  },
  { path: 'skills', component: SkillsComponent, data: { animation: 'skills' } },
  {
    path: 'services',
    component: ServicesComponent,
    data: { animation: 'services' },
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animation: 'portfolio' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
