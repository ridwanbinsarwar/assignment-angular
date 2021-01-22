import { formatDate } from '@angular/common';
import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-date-picker',
  templateUrl: './custom-date-picker.component.html',
  styleUrls: ['./custom-date-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
          () => CustomDatePickerComponent
      ),
      multi: true
    }
  ]
})
export class CustomDatePickerComponent implements ControlValueAccessor {

  constructor() {}
  
  public value?:string;
   
  myGroup = new FormGroup({
    date: new FormControl()
  });

  public onChange?: (value:string ) => void;

  public touched!: () => void;

  public isDisabled!: boolean;

  writeValue(obj: string ): void {
    this.myGroup.setValue({
      date:obj
      
    });
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    // this.onChange = fn;
  }

  valueChange(){
    let g:Date = this.myGroup.get('date')?.value;
    let x  = formatDate(g,'yyyy-MM-dd','en-US');
    this.value = x;
    this.onChange!(this.value!);
    console.log("hello");
  }


}
