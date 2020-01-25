import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h3>My favourite hero is {{myHero.name}}</h3>
  <p>Heroes</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{hero.name}}
    </li>
  </ul>
  <div *ngIf="heroes.length > 3">
    There are many heroes!!
  </div>
  `
})
export class AppComponent  {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Superman'),
    new Hero(2, 'Batman'),
    new Hero(3, 'Spiderman'),
    new Hero(4, 'Hulk')
  ];
  myHero = this.heroes[0];
}
