import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the GreekPlanets pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'greekPlanets'
})
@Injectable()
export class GreekPlanets {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {
    value = value + ''; // make sure it's a string
    let planets = value.replace(/jupiter/gi, 'Zeus');
    planets = planets.replace(/venus/gi, 'Aphrodite');
    planets = planets.replace(/mars/gi, 'Ares');
    planets = planets.replace(/saturn/gi, 'Kronos');
    return planets;
  }
}
