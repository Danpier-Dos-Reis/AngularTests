import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  paragraph:string = "";
  enable:boolean = false;

  disableButton(){ this.enable = !this.enable; }

  copyAndPaste(){
    let textInput:any = document.getElementById("mainTextBox");
    this.paragraph = textInput.value;
  }
}
