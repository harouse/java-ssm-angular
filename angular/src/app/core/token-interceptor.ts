import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {b} from '../../../node_modules/@angular/core/src/render3';
import {isNull} from 'util';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getToken();

        if (token) {
            request = request.clone({
                headers: request.headers.set('authorization', `${token}`),
                body: this.dealWithBody(request.body)
            });
        }

        return next.handle(request);
    }

    dealWithBody(body) {
        let map = {};

        if (body) {
            for (let index in body) {
                map[index] = isNull(body[index]) || !body[index] ? '' : body[index];
            }
        }

        return map;
    }

}
