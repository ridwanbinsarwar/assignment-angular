import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  public registrationForm: FormGroup;
  roles: any = ['USER', 'ADMIN']

  constructor(public formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      
      firstName: ['', [Validators.required, this.noWhitespaceValidator ]],
      lastName:  ['', [Validators.required, this.noWhitespaceValidator]],
      email:     ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9.@]*')]],
      password:  ['', [Validators.required, Validators.minLength(6), this.validatePassword, this.noWhitespaceValidator]],
      role:      ['',  Validators.required]

    });
   }

  
  ngOnInit(): void {}

  // Choose role using select dropdown
  changeRole(e: any) {
    console.log(e.value)
    this.registrationForm.get("role")?.setValue(e.target.value, {
      onlySelf: true
    })
  }
  // Getter method to access formcontrols
  get roleName() {
    return this.registrationForm.get('role');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registrationForm.value);
  }

   // custom validator to check if password is strong
   validatePassword(control: FormControl): {[key: string]: any} | null  {
    if (control.value && control.value.length < 8) {
      return { 'notStrong': {message: "password must containt number"} };
    }
    return null;
  }

  public noWhitespaceValidator(control: FormControl) {
    let isValid: boolean = true;
    if (control.value.charAt(0) == ' '){
      isValid = false;
    }
    return isValid ? null : { 'whitespace': true };
}

}
