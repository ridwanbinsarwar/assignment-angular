import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ValidationErrorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ValidationErrorsComponent
  ]
})
export class SharedModule { }
