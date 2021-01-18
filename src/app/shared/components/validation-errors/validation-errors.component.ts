import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.css']
})
export class ValidationErrorsComponent implements OnInit {
  @Input() errors!: ValidationErrors;
  constructor() {
    
   }

  ngOnInit(): void {
    console.warn(this.errors);
  }

}
