import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  paragraph:string = "";
  enable:boolean = false;
  //Tow data binding
  leftContent:string = "";
  rightContent:string = "";
  //ngModel
  rContent:string = "";


  disableButton(){ this.enable = !this.enable; }

  copyAndPaste(){
    let textInput:any = document.getElementById("mainTextBox");
    this.paragraph = textInput.value;
  }

  reWrite(event:Event){
    const element:HTMLTextAreaElement = event.target as HTMLTextAreaElement;

    if(element.id == "leftTextArea"){
      let r:HTMLTextAreaElement = document.getElementById("rightTextArea") as HTMLTextAreaElement;
      r.value = element.value;
    }
    else if(element.id == "rightTextArea"){
      let l:HTMLTextAreaElement = document.getElementById("leftTextArea") as HTMLTextAreaElement;
      l.value = element.value;
    }
  }
}
