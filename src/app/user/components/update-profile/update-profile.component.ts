import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientUserService } from '../../../core/services/http-client-user.service';
import { UserTransferService } from '../../../core/services/user-transfer.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  public updatedRegistrationForm: FormGroup;
  roles: any = ['USER', 'ADMIN']

  constructor(
    private router: Router,
    private userService: HttpClientUserService, 
    public formBuilder: FormBuilder,
    public userTransferService: UserTransferService
     ) {
    
      this.updatedRegistrationForm = formBuilder.group({
      
      firstName: ['', [Validators.required, this.noWhitespaceValidator ]],
      lastName:  ['', [Validators.required, this.noWhitespaceValidator]],
      email:     ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9.@]*')]],
      password:  ['', [Validators.required, Validators.minLength(6), this.validatePassword, this.noWhitespaceValidator]],
      role:      ['',  Validators.required]

    });
   }

  
  ngOnInit(): void {
    const user = this.userTransferService.getUser();
    this.updatedRegistrationForm.setValue({
      
      firstName:  user?.firstName,
      lastName:   user?.lastName,
      email:      user?.email,
      password:   user?.password,
      role:       user?.role
});
  }

  // Choose role using select dropdown
  changeRole(e: any) {
    console.log(e.value)
    this.updatedRegistrationForm.get("role")?.setValue(e.target.value, {
      onlySelf: true
    })
  }
  // Getter method to access formcontrols
  get roleName() {
    return this.updatedRegistrationForm.get('role');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.updatedRegistrationForm.value);
    if (this.updatedRegistrationForm.valid ) { 
      const firstName = this.updatedRegistrationForm.get('firstName')?.value;
      const lastName = this.updatedRegistrationForm.get('lastName')?.value;
      const email = this.updatedRegistrationForm.get('email')?.value;
      const password = this.updatedRegistrationForm.get('password')?.value;
      const role = this.updatedRegistrationForm.get('role')?.value;
 
      this.userService.updateUser(firstName, lastName, email, password, role).subscribe(data => {
        console.warn(data);

      });

      this.router.navigateByUrl("/user/list");
    }
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
