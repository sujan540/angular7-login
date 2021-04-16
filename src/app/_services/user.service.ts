// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import { HttpClient, HttpHeaders } from '@angular/common/http';

// @ts-ignore
import { environment } from '@environments/environment';
import { Payload } from './payload';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Payload>(`/users`);
    }

    register(user) {
        return this.http.post(`/users/register`, user);
    }

    delete(id) {
        return this.http.delete(`/users/${id}`);
    }
}
