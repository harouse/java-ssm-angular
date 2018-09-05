import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {Observable} from 'rxjs';
import {Configuration} from '../shared/configuration';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    apiUrl: string;

    constructor(private config: Configuration,
                private data: DataService) {
        this.apiUrl = config.API_URL;
    }

    getUser(): Observable<any> {
        return this.data.get(this.apiUrl + 'user/get');
    }

    editUser(user: object): Observable<any> {
        return this.data.post( this.apiUrl + 'user/edit', user);
    }
}
