import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Output() textWrote:EventEmitter<string> = new EventEmitter<string>();

  writeSomething(e:Event){
    let target:HTMLTextAreaElement = e.target as HTMLTextAreaElement;
    this.textWrote.emit(target.value);
  }
}
