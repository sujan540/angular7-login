var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { ReactiveFormsModule } from '@angular/forms';
// @ts-ignore
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app.routing';
// @ts-ignore
import { httpInterceptorProvider } from './_helpers';
import { AppComponent } from './app.component';
// @ts-ignore
import { HomeComponent } from './home';
// @ts-ignore
import { LoginComponent } from './login';
// @ts-ignore
import { RegisterComponent } from './register';
// @ts-ignore
import { AlertComponent } from './_components';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            ReactiveFormsModule,
            HttpClientModule,
            appRoutingModule
        ],
        declarations: [
            AppComponent,
            HomeComponent,
            LoginComponent,
            RegisterComponent,
            AlertComponent
        ],
        providers: [
            httpInterceptorProvider
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
;
