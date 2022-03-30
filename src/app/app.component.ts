import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText = '';
  characters = [
    {
      name: 'picachu',
      type: 'eletric',
      ability: 'ablility-1',
    },
    {
      name: 'chamander',
      type: 'fire',
      ability: 'ablility-2',
    },
    {
      name: 'bulbasaur',
      type: 'grass',
      ability: 'ablility-3',
    },
    {
      name: 'snorlax',
      type: 'normal',
      ability: 'ablility-4',
    },
    {
      name: 'abra',
      type: 'psychic',
      ability: 'ablility-5',
    },
  ]
}
