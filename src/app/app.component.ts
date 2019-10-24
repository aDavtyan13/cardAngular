import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'cardcard';


  values = '';

  onKey(event) {
//   //   if(event.target.value.length%4==0){
//   //     this.values+=event.target.value + '...';
//   //   }
//   //   console.log('dam')
//   // }

  if(event.target.value.length%4==0){
    event.target.value +='...';
    this.values += event.target.value + ' ';
  }
}


}
