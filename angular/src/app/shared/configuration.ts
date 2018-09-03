import { Injectable, isDevMode } from '@angular/core';

@Injectable()
export class Configuration {
    public DOMAIN: string;      // 接口域名，不带 http://
    public API_URL: string;     // 接口 URL 前缀
    public UPLOAD_URL: string;  // 上传接口
    public FILE_PREFIX: string; // 附件前缀

    constructor() {
        // 本地开发   | www.pixseed.test | 命令：ng serve
        // OpenStack | www.pixseed.test | 命令：ng build --bh=/admin/
        // 线上测试   | test.pixseed.com | 命令：ng build --bh=/amdin/ --prod
        // 生产环境   | www.pixseed.com  | 命令：ng build --bh=/amdin/ --prod
        this.DOMAIN = isDevMode()
            ? 'www.pixseed.test'
            : window.location.hostname;

        this.API_URL     = `//${this.DOMAIN}/admin/api`;
        this.FILE_PREFIX = '//files.pixseed.com/pixseed/';
        this.UPLOAD_URL  = `${this.API_URL}/upload/v2`;
    }
}
