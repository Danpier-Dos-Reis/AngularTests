import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Location} from 'src/shared/models/Location';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{

  home?:string = Location.C1; one?:string = Location.C2;
  two?:string = Location.C3; three?:string = Location.C4;

  @Input() sendEndPoint?:string;

  ngOnInit(): void { }
}
