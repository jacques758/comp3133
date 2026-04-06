import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  imports: [],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',

})
export class Heroes {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}

export interface Hero {
  id: number;
  name: string;
}
