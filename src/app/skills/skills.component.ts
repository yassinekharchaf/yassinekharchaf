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
  constructor(public skillService: SkillsService) {}

  ngOnInit(): void {
    this.skills = this.skillService.skills;
    this.currentSkill = this.skills[0];
  }

  updateCurrentSkill(skill: Skill) {
    this.currentSkill = skill;
  }
}
