import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.css']
})
export class ValidationErrorsComponent implements OnInit {
  // @Input() errors?: ValidationErrors;
  @Input() control!: AbstractControl;
  constructor() {

   }

  ngOnInit(): void {
  }

}
