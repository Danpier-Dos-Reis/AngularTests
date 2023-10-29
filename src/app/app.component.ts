import { Component, DoCheck, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Image } from 'src/shared/models/Image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  cssClass:boolean = false;
  displayParagraph(){
    this.cssClass = !this.cssClass;
  }

  hideParagraph(){
    this.cssClass = !this.cssClass;
  }

  //Component LifeCycle
  ngOnChanges(changes: SimpleChanges): void {
    console.log("appOnChange");
  }

  ngOnInit(): void {
    console.log("appOnInit");
  }

  ngDoCheck(): void {
    console.log("appDoCheck");
  }

  ngOnDestroy(): void {
    console.log("appOnDestroy");
  }
}