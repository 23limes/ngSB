import { Component, Input, Output, EventEmitter } from '@angular/core';

/*
  Generated class for the SpaceText component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'space-text',
  templateUrl: 'space-text.html'
})
export class SpaceTextComponent {

  @Input('babelfish') newText;
  @Output() translate = new EventEmitter();

  text: string;

  constructor() {
    console.log('Hello SpaceText Component');
    this.text = 'Hello ngSB';
  }

  ngAfterViewInit(){
    this.text = this.newText;

    let interval = setInterval(() => {
      this.translate.emit("42");
    }, 2000);
  }

}
