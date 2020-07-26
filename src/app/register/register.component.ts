import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, ValidatorFn} from '@angular/forms';
import {first} from 'rxjs/operators';

import {UserService, AuthenticationService, AlertService} from '../_services';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(4)]],
        repeatPassword: ['']
      }
      , {validator: matchPassword}
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login'], {queryParams: {registered: true}});
        },
        error => {
          // this.error = error;
          this.alertService.error(error);
          this.loading = false;
        });
  }
}

const matchPassword: ValidatorFn = (fg: FormGroup) => {
  const password = fg.get('password').value;
  const repeatPassword = fg.get('repeatPassword').value;
  return password !== null && repeatPassword !== null && password === repeatPassword
    ? null
    : {matchPassword: true};
};

