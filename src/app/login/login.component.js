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
import { Router, ActivatedRoute } from '@angular/router';
// @ts-ignore
import { FormBuilder, Validators } from '@angular/forms';
// @ts-ignore
import { first } from 'rxjs/operators';
// @ts-ignore
import { AuthenticationService, AlertService } from '../_services';
let LoginComponent = class LoginComponent {
    // error: string;
    // success: string
    constructor(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        // // show success message on registration
        // if (this.route.snapshot.queryParams['registered']) {
        //     this.success = 'Registration successful';
        // }
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // // reset alerts on submit
        // this.error = null;
        // this.success = null;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(data => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            // this.error = error;
            this.alertService.error(error);
            this.loading = false;
        });
    }
};
LoginComponent = __decorate([
    Component({ templateUrl: 'login.component.html' }),
    __metadata("design:paramtypes", [typeof (_a = typeof FormBuilder !== "undefined" && FormBuilder) === "function" ? _a : Object, typeof (_b = typeof ActivatedRoute !== "undefined" && ActivatedRoute) === "function" ? _b : Object, typeof (_c = typeof Router !== "undefined" && Router) === "function" ? _c : Object, typeof (_d = typeof AuthenticationService !== "undefined" && AuthenticationService) === "function" ? _d : Object, typeof (_e = typeof AlertService !== "undefined" && AlertService) === "function" ? _e : Object])
], LoginComponent);
export { LoginComponent };
