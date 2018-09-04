import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { Configuration } from '../shared/configuration';
import { AuthenticationService } from './authentication.service';

import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    apiUrl: string;

    constructor(private config: Configuration,
                private authService: AuthenticationService,
                private router: Router) {
        this.apiUrl = config.API_URL;
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['login']);
        }

        return this.authService.isAuthenticated();
    }
}
