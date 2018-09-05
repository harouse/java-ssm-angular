import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {Observable} from 'rxjs';
import { Configuration } from '../shared/configuration';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
    apiUrl: string;

    constructor(private config: Configuration,
        private data: DataService) {
        this.apiUrl = config.API_URL;
    }

    addPosts(data: any): Observable<any> {
        return this.data.post<any>(this.apiUrl + 'posts/add', data);
    }

    editPosts(data: any): Observable<any> {
        return this.data.post<any>(this.apiUrl + 'posts/edit', data);
    }

    deletePosts(id: number): Observable<any> {
        let data = {
            id : id,
        };

        return this.data.post<any>(this.apiUrl + 'posts/delete', data);
    }
}
