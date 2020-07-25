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

@NgModule({
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
export class AppModule { };