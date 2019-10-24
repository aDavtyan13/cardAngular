import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  numberOnly(event){
   
    var code = event.keyCode;
    if(code > 47 && code < 57){
      return true;
    }
    return false;

  }

}
