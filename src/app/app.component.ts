import { Component, DoCheck, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Image } from 'src/shared/models/Image';
import { register } from 'swiper/element/bundle';

// register Swiper custom elements
register();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  pictures:Image[] = [Image.img1,Image.img2,Image.img3,Image.img4,Image.img5,Image.img6,Image.img7];

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