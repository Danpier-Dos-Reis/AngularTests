import { Component, DoCheck, OnInit, OnChanges, OnDestroy, SimpleChanges, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  //Component LifeCycle
  ngOnChanges(changes: SimpleChanges): void {
    // console.log("appOnChange");
  }

  ngOnInit(): void {
    // console.log("appOnInit");
  }

  ngDoCheck(): void {
    // console.log("appDoCheck");
  }

  ngOnDestroy(): void {
    // console.log("appOnDestroy");
  }
}