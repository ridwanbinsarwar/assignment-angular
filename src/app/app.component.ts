import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-angular';
  constructor( ) { }
  ngOnInit(): void {
    // this.router.navigateByUrl("/auth/login");

  }
}
