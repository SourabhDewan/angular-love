import { Component } from '@angular/core';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello-World';
  isActive = true;
  email = "me@gmail.com";
  onEnter(){
    console.log(this.email);
  }
  onSave(){
    console.log("Button is clicked")
  }
}
