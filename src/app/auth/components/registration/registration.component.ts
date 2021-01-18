import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      firstName: ['',Validators.required ],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9.@]*')]],
      password: ['',[Validators.required, Validators.minLength(6), this.validatePassword]]

    });
   }

  ngOnInit(): void {
    // this.registrationForm =  new FormGroup({
    //   'firstName': new FormControl('',Validators.required ),
    //   'lastName': new FormControl('', Validators.required),
    //   'email': new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9.@]*')]),
    //   'password': new FormControl('',[Validators.required, Validators.minLength(6), this.validatePassword])
    // })
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

}
