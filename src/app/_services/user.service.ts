// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import { HttpClient } from '@angular/common/http';

// @ts-ignore
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`${environment.apiUrl}/users`);
    }

    register(user) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    delete(id) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
}
