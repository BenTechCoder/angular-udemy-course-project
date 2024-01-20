import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-udemy-course-project';
  loadedFeature: string = 'recipe';
  loadNav(link: string) {
    this.loadedFeature = link;
  }
}
