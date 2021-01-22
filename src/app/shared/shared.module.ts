import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';
import { CustomDatePickerComponent } from './components/custom-date-picker/custom-date-picker.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ValidationErrorsComponent,
    CustomDatePickerComponent
  ],
  imports: [
    CommonModule,
    DatePickerModule,
    ReactiveFormsModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ValidationErrorsComponent,
    CustomDatePickerComponent
  ]
})
export class SharedModule { }
