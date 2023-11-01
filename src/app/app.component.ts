import { Component, DoCheck, OnInit, OnChanges, OnDestroy, SimpleChanges, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Image } from 'src/shared/models/Image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  @HostListener('mousemove',['$event'])
  cursorAnimation(e:MouseEvent){
    const cursorDot:HTMLDivElement = document.querySelector('.cursor-dot')as HTMLDivElement;
    const cursorOutline:HTMLDivElement = document.querySelector('.cursor-outline') as HTMLDivElement;
    
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    /*if we uncomment this the out cursor circle will move equal to
    the pinter*/
    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    /*
    The out cursor circle will move after the pointer
    */
    cursorOutline.animate(
      {
      left: `${posX}px`,
      top: `${posY}px`
      },
      {
        duration: 500, fill: 'forwards'
      }
    );
  }

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