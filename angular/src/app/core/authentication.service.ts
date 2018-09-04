import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { JwtHelperService } from '../shared/jwt-helper.service';

@Injectable()
export class AuthenticationService {
    cachedRequests: Array<HttpRequest<any>> = [];

    constructor(private jwtHelper: JwtHelperService) {
    }

    /**
     * 保存管理员 email 和 token 到 sessionStorage
     * @param {Object} data
     */
    setToken(data: object): void {
        if (! sessionStorage.getItem('auth') === null) {
            sessionStorage.removeItem('auth');
        }

        sessionStorage.setItem('auth', JSON.stringify(data));
    }

    /**
     * 获取当前登录管理员 token
     * @returns {string}
     */
    getToken(): string {
        if (!sessionStorage.getItem('auth')) {
            return null;
        }
        return JSON.parse(sessionStorage.getItem('auth')).token;
    }

    /**
     * 删除token
     */
    deleteToken(): void {
        sessionStorage.removeItem('auth');
    }

    /**
     * 获取当前登录管理员信息
     * @returns {object}
     */
    getUser(): object | any {
        if (!sessionStorage.getItem('auth')) {
            return null;
        }

        const user = JSON.parse(sessionStorage.getItem('auth'));
         return {
             id: user.id,
             name: user.name,
             email: user.email,
             is_admin: user.is_admin,
             token: user.token,
        };
    }

    /**
     * 是否认证，并有有效 token
     * @returns {boolean}
     */
    isAuthenticated(): boolean {
        const token = this.getToken();

        if (!token) {
            return false;
        }

        return !this.jwtHelper.isTokenExpired(token);
    }
}
