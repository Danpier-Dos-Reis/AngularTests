import { Component, DoCheck, OnInit, HostListener } from '@angular/core';
import { Location } from 'src/shared/models/Location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  Endpoint?: string;
  sendEndPoint?: string; //ParentInput

  ngOnInit(): void {
    console.log("AppInit");
  }

  ngDoCheck(): void {
    console.log("AppDpoCheck");
  }
  
  @HostListener('window:beforeunload', ['$event'])

  displayContent(e: Event) {
    let target = e.target as HTMLLinkElement;
    this.Endpoint = Location.C1;
    this.Endpoint = this.Endpoint + '' + target.getAttribute('href');
    console.log(this.Endpoint);
  }

  unloadNotification($event: any): void {
    // Aquí puedes ejecutar acciones antes de que ocurra la recarga de la página.
    // Por ejemplo, mostrar un mensaje de confirmación.
    $event.returnValue = true; // Esto muestra un mensaje de confirmación al usuario.
  }
}