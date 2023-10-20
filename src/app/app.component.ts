import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myTitle?:string;
  writeSomething(event:Event){
    let target:HTMLTextAreaElement = event.target as HTMLTextAreaElement;
    this.myTitle = target.value;
  }
}