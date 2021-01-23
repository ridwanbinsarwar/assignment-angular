import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClientUserService } from '../../../core/services/http-client-user.service';
import { FormValidationService } from '../../../core/services/form-validation.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  public registrationForm: FormGroup;
  roles: any = ['USER', 'ADMIN']

  constructor(
    private router: Router,
    private userService: HttpClientUserService, 
    private validationService: FormValidationService, 
    public formBuilder: FormBuilder, ) {
    
      this.registrationForm = formBuilder.group({
      
      firstName: ['', [Validators.required, this.validationService.noWhitespaceValidator ]],
      lastName:  ['', [Validators.required, this.validationService.noWhitespaceValidator]],
      email:     ['', [Validators.required, Validators.email, Validators.pattern('[A-Za-z0-9_@.]*'),this.uniqueEmail.bind(this)]],
      password:  ['', [Validators.required, Validators.minLength(6), this.validationService.validatePassword, this.validationService.noWhitespaceValidator]],
      role:      ['',  Validators.required]

    });
   }

   
  ngOnInit(): void {}

  // Choose role using select dropdown
  changeRole(e: any) {
    
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
    
    if (this.registrationForm.valid ) { 
      const firstName = this.registrationForm.get('firstName')?.value;
      const lastName = this.registrationForm.get('lastName')?.value;
      const email = this.registrationForm.get('email')?.value;
      const password = this.registrationForm.get('password')?.value;
      const role = this.registrationForm.get('role')?.value;
      this.userService.addUser(firstName, lastName, email, password, role).subscribe(data => {
        
      });

      this.router.navigateByUrl("/auth/login");
    }
  }

  public uniqueEmail(control: FormControl) {
    let isValid: boolean = true;
    
    this.userService.searchUser(control.value).subscribe(data => { 
      
      if (data.length == 1 && data[0].email.length == control.value.length){
        control.setErrors({'uniqueEmail': true});
      }
    });
    
    return isValid ? null : { 'uniqueEmail': true };
  }

  loginRoute(){
    this.router.navigateByUrl("/auth/login");

  }

}
