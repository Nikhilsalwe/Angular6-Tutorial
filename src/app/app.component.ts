import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTutorial';
  color = 'red';
  header = 'blue';
  public name = "This data we are sending to child component which is chil-test component";

  public message = "";
}
