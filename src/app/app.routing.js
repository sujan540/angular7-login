// @ts-ignore
import { RouterModule } from '@angular/router';
// @ts-ignore
import { HomeComponent } from './home';
// @ts-ignore
import { LoginComponent } from './login';
// @ts-ignore
import { RegisterComponent } from './register';
// @ts-ignore
import { AuthGuard } from './_helpers';
const routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
export const appRoutingModule = RouterModule.forRoot(routes);
