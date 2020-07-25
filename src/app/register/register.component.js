var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
// @ts-ignore
import { Component } from '@angular/core';
// @ts-ignore
import { Router } from '@angular/router';
// @ts-ignore
import { FormBuilder, Validators } from '@angular/forms';
// @ts-ignore
import { first } from 'rxjs/operators';
// @ts-ignore
import { UserService, AuthenticationService, AlertService } from '../_services';
let RegisterComponent = class RegisterComponent {
    // error: string;
    constructor(formBuilder, router, authenticationService, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(4)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
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
            .subscribe(data => {
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/login'], { queryParams: { registered: true } });
        }, error => {
            // this.error = error;
            this.alertService.error(error);
            this.loading = false;
        });
    }
};
RegisterComponent = __decorate([
    Component({ templateUrl: 'register.component.html' }),
    __metadata("design:paramtypes", [typeof (_a = typeof FormBuilder !== "undefined" && FormBuilder) === "function" ? _a : Object, typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object, typeof (_c = typeof AuthenticationService !== "undefined" && AuthenticationService) === "function" ? _c : Object, typeof (_d = typeof UserService !== "undefined" && UserService) === "function" ? _d : Object, typeof (_e = typeof AlertService !== "undefined" && AlertService) === "function" ? _e : Object])
], RegisterComponent);
export { RegisterComponent };
