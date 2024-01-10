import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sebas-app-w-modules';

  changeTitle() {
    this.title = 'changed';
  }
  
}
