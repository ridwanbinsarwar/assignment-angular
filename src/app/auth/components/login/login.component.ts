import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientUserService } from '../../../core/services/http-client-user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loginFail: boolean = false;
  constructor(
    private router: Router,
    private authService: AuthService, 
    public formBuilder: FormBuilder, ) {
    
      this.loginForm = formBuilder.group({
      
     
      email:     ['', [Validators.required, Validators.email, Validators.pattern('[A-Za-z0-9_@.]*')]],
      password:  ['', [Validators.required, Validators.minLength(6),this.noWhitespaceValidator]]

    });
   }

   
  ngOnInit(): void {}


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    if (this.loginForm.valid ) { 

      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      
      this.authService.login(email,password);
      this.loginFail = true;

    }
  }


  public noWhitespaceValidator(control: FormControl) {
    let isValid: boolean = true;
    if (control.value.charAt(0) == ' '){
      isValid = false;
    }
    return isValid ? null : { 'whitespace': true };
  }

  register(){
    this.router.navigateByUrl("/auth/register");

  }

}
