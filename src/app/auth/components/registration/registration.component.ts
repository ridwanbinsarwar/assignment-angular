import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public registrationForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registrationForm =  new FormGroup({
      'firstName': new FormControl('',Validators.required ),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9.@]*')]),
      'password': new FormControl('',Validators.required)
    })
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registrationForm.value);
  }

}
