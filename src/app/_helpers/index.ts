// @ts-ignore
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "./jwt.interceptor";
import {ErrorInterceptor} from "./error.interceptor";
// used to create fake backend
// @ts-ignore
import { fakeBackendProvider } from './fakebackend.interceptor';

export * from './auth.guard';

export const httpInterceptorProvider = [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
];