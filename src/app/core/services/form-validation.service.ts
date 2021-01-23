import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class FormValidationService {
  constructor() {}

  // custom validator to check if password is strong
  validatePassword(control: FormControl): { [key: string]: any } | null {
    let isValid: boolean = false;
    for (var i = 0; i < control.value.length; i++) {
      var ch = control.value.charAt(i);
      if (!isNaN(ch * 1)) {
        isValid = true;
      }
    }
    if (!isValid) {
      return { notStrong: { message: "password must containt number" } };
    }
    return null;
  }

  public noWhitespaceValidator(control: FormControl) {
    let isValid: boolean = true;
    if (control.value.charAt(0) == " ") {
      isValid = false;
    }
    return isValid ? null : { whitespace: true };
  }
}
