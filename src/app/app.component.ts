import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  title: string = 'memory-tasks';



  changeTitle(activeComponentTitle: string){
    this.title = activeComponentTitle;
    

  }
  
}
