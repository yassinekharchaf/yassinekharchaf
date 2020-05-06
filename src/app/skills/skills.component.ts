import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { Skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: Array<Skill>;
  currentSkill: Skill;
  constructor(private skillService: SkillsService) {}

  ngOnInit(): void {
    this.skills = this.skillService.skills;
    this.currentSkill = this.skillService.currentSkill;
    this.skillService.updateCurrentSkill(this.currentSkill);
  }

  updateCurrentSkill(skill: Skill) {
    this.currentSkill = skill;
    this.skillService.updateCurrentSkill(skill);
  }
}
