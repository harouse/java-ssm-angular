import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/internal/operators';

import { Utils } from '../shared/utils';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    constructor(private router: Router,
                private util: Utils) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request)
            .pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        // console.log('processing response', event);

                        switch (event.body.status) {
                            case 200:
                                return event;
                            case 400:
                                this.util.error(event.body.message);
                                break;
                            case 401:
                                // sessionStorage.removeItem('admin');
                                this.router.navigate(['/exception', '401']);
                                break;
                            case 403:
                                this.router.navigate(['/exception', '403']);
                                break;
                            case 404:
                                // 无需处理，路由里已添加 ** 这条规则
                                break;
                            case 500:
                                this.router.navigate(['/exception', '500']);
                                break;
                            default:
                                return event;
                        }

                    }
                }),
                catchError(response => {
                    if (response instanceof HttpErrorResponse) {
                        // console.log('processing http error', response);
                        switch (response.status) {
                            case 401:
                                sessionStorage.removeItem('admin');
                                this.router.navigate(['/exception', '401']);
                                break;
                            case 403:
                                this.router.navigate(['/exception', '403']);
                                break;
                            case 404:
                                // 无需处理，路由里已添加 ** 这条规则
                                break;
                            case 500:
                                this.router.navigate(['/exception', '500']);
                                break;
                            default:
                                // this.router.navigate(['/exception', '0']);
                                break;
                        }
                    }

                    return observableThrowError(response);
                })
            );
    }
}
