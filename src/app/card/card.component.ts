import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Slide } from '../interfaces/slide.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

@Input() slide!: Slide;

@Input() myColor!: string;

@Input() selectedID!: number;

@Output() emitColor = new EventEmitter();

@Output() emitSelected = new EventEmitter();

thecolor = "#"+Math.floor(Math.random()*16777215).toString(16);

updateCardColor() {
  //console.log(this.slide.id);
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  this.emitColor.emit("#"+randomColor);
  this.thecolor = "#"+randomColor;
  this.emitSelected.emit(this.slide.id);
}

}
