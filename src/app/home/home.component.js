var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
// @ts-ignore
import { Component } from '@angular/core';
// @ts-ignore
import { first } from 'rxjs/operators';
// @ts-ignore
import { UserService, AuthenticationService } from '../_services';
let HomeComponent = class HomeComponent {
    constructor(authenticationService, userService) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.users = [];
        this.currentUser = this.authenticationService.currentUserValue;
    }
    ngOnInit() {
        this.loadAllUsers();
    }
    deleteUser(id) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }
    loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
};
HomeComponent = __decorate([
    Component({ templateUrl: 'home.component.html' }),
    __metadata("design:paramtypes", [typeof (_a = typeof AuthenticationService !== "undefined" && AuthenticationService) === "function" ? _a : Object, typeof (_b = typeof UserService !== "undefined" && UserService) === "function" ? _b : Object])
], HomeComponent);
export { HomeComponent };
