import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  title = 'angular-udemy-course-project';
  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
