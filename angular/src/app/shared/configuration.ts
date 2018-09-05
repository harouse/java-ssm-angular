import { Injectable, isDevMode } from '@angular/core';

@Injectable()
export class Configuration {
    public DOMAIN: string;      // 接口域名，不带 http://
    public API_URL: string;     // 接口 URL 前缀

    constructor() {
        // 本地开发   | localhost:8080 | 命令：ng serve
        // 生产环境   | ssm.angular.com | 命令：ng build --bh=/angular/ --prod
        this.DOMAIN = isDevMode()
            ? 'localhost:8080'
            : window.location.hostname;

        this.API_URL     = `//${this.DOMAIN}/angular/`;
    }
}
