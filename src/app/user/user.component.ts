import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

// import datepickerJAFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-en-GB'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private router: Router ) { }
  ngOnInit(): void {
    // this.router.navigateByUrl("/auth/login");

  }

  
}
