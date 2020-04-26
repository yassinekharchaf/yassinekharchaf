import { Injectable } from '@angular/core';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skills: Array<Skill> = [
    {
      name: 'Angular',
      imgUrl: 'angular.png',
      description:
        'Loving to work with angular that allows you to scale your apps easily and provide an awsome developer experience thanks to typescript.',
    },
    {
      name: 'Laravel',
      imgUrl: 'laravel.png',
      description:
        'Here is the Framework that made me love PHP. I even got inspired to create YakPress (a nano framework for wordpress).',
    },
    {
      name: 'Wordpress Dev',
      imgUrl: 'wordpress.png',
      description:
        "Often badly treated, I really think this CMS is awsome when you know how to use it. That's why I use it for some of my client which can keep the control. I also love to develop custome plugin and theme using the nano framework Yakpress that I created. ",
    },
    {
      name: 'Mysql',
      imgUrl: 'mysql.png',
      description:
        'I love this tool for my sql databases. One of my first sql tool that keeps suprising me even more since mysql 8.',
    },
    {
      name: 'Vue',
      imgUrl: 'vue.png',
      description:
        "I use view when I have to add small features to and exesting webapp. It's really convenient and easy to learn. This is the framework I choose to teach to beginner in coding.",
    },
    {
      name: 'React',
      imgUrl: 'react.png',
      description:
        'Not a real fan of react in the beginning because of the jsx syntaxe. But I felt in love with it after the hook functions came and that wordpress choose to use it for its gutenberg editor.',
    },
    {
      name: 'Rest API',
      imgUrl: 'rest-api.png',
      description:
        'One must to have and must know for the futur of web... Guess what ! The futur is know. You need to deeply understand how works server-less app and how to set up all your endpoint.',
    },
    {
      name: 'Git',
      imgUrl: 'git.png',
      description:
        'No Git ?! No code !! Who is know crazy enough to attempt to play a whole game on his favorite console whithout saving the progression of the game ?! Learn Git, Do Git Love Git!!!',
    },
  ];
  constructor() {}
}
