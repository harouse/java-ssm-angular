import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd';

declare let jQuery: any;
import * as _ from 'lodash';
import * as moment from 'moment';
import * as alertify from 'alertifyjs';

@Injectable()
export class Utils {

    constructor(private modalService: NzModalService,
                private msgService: NzMessageService) {
    }

    /**
     * 确认对话框，用于删除等操作的确认
     * @param {string} title 对话框标题
     * @param {string} content 确认的内容，可包含 HTML
     * @param {() => void} callback 点击确认回调函数
     * @param {string} icon 确认对话框内容左侧的图标，antd icon，默认 question-circle
     */
    confirm(
        title: string,
        content: string,
        callback: () => void,
        icon?: string): void {

        let iconType = icon || 'question-circle';

        this.modalService.confirm({
            nzTitle: title,
            nzContent: content,
            nzIconType: iconType,
            nzOkText: '确定',
            nzCancelText: '取消',
            nzOnOk: callback
        });
    }

    /**
     * 成功消息
     * @param {string} body
     */
    success(body: string) {
        this.msgService.success(body);
        // alertify.success(body);
    }

    /**
     * 信息消息
     * @param {string} body
     */
    info(body: string) {
        this.msgService.info(body);
        // alertify.info(body);
    }

    /**
     * 警告消息
     * @param {string} body
     */
    warning(body: string) {
        this.msgService.warning(body);
        // alertify.warning(body);
    }

    /**
     * 失败消息
     * @param {string} body
     */
    error(body: string) {
        // this.msgService.error(body);
        this.modalService.error({
            nzTitle: '操作失败',
            nzContent: body
        });
    }

    /**
     * 多条失败消息
     * 数据结构为 { errors: { err1: 'err1 message', err2: 'err2 message' } }
     * @param body
     */
    errors(body: any) {
        if (typeof body === 'object') { // 键值对
            Object.keys(body).map((key) => {
                this.error(body[key]);
            });
        } else { // 单个字符串错误
            this.error(body);
        }
    }

    /**
     * Laravel 422 转成错误提示数组
     * @param data
     * @returns {Array<string>}
     */
    errorMessages(data: any): Array<string> {
        let arr = [];

        if (typeof data === 'object') {
            Object.keys(data).forEach(key => {
                if (Array.isArray(data[key])) {
                    data[key].forEach(e => arr.push(e));
                } else {
                    arr.push(data[key])
                }
            });
        }

        return arr;
    }

    /**
     * moment 日期格式化
     * 参考文档 https://momentjs.com/docs/#/displaying/format/
     * @param  {string} datetime 日期字符串
     * @param  {string} formatString 格式化字符串
     * @returns string 返回格式化后的日期字符串
     */
    dateTimeFormater(datetime: any, formatString: string): string {
        return moment(datetime).format(formatString);
    }

    /**
     * 时长转换成 hh:mm:ss
     * @param duration 时长/秒
     * @returns {string} 返回 hh:mm:ss
     */
    durationToHms(duration: number): string {
        let h = Math.floor(duration / 3600);
        let m = Math.floor(duration % 3600 / 60);
        let s = Math.floor(duration % 3600 % 60);
        return ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2);
    }

    /**
     * hh:mm:ss 转换成时长 s
     * @param {string} hms
     * @returns {number}
     */
    hmsToDuration(hms: string): number {
        let arr: Array<String> = hms.split(':');
        return (+arr[0]) * 60 * 60 + (+arr[1]) * 60 + (+arr[2]);
    }

    /**
     * date1 减 date2 所得天数
     * @param {Date} date1
     * @param {Date} date2
     * @returns {number}
     */
    diffDays(date1: Date, date2: Date): number {
        return Math.floor((date1.getTime() - date2.getTime()) / (1000 * 3600 *24));
    }

    /**
     * 检查 value 是否为空
     * 借用 lodash _.isEmpty
     * @param  {any} value 可以是 object, collection, map, set 等类型
     * @returns boolean
     */
    isEmpty(value: any): boolean {
        return _.isEmpty(value);
    }

    /**
     * 判断一个对象是否是数组
     * @param o
     * @returns {boolean}
     */
    isArray(o: any): boolean {
        return Object.prototype.toString.call(o) === '[object Array]';
    }

    /**
     * 删除空值
     * @param {object} data
     */
    removeEmptyProperty(data: object) {
        Object.keys(data).forEach(key => {
            if (data[key] === null) {
                delete data[key];
            }
        });
    }

    /**
     * 获取文件扩展名
     * @param filename
     */
    getFileExt(filename: string): string {
        return filename.substr(filename.lastIndexOf('.') + 1).toLowerCase();
    }

    /**
     * 文件扩展名转换为font-awesome类名
     * @param ext
     */
    fileExtToIcon(ext: string): string {
        let icon = '';

        // doc/docx, xls/xlsx, ppt/pptx, pdf, zip, rar, 7z, png, jpg/jpeg, gif, bmp
        switch (ext) {
            case 'png':
            case 'jpg':
            case 'jpeg':
            case 'gif':
            case 'bmp':
                icon = 'fa-file-image-o';
                break;
            case 'doc':
            case 'docx':
                icon = 'fa-file-word-o';
                break;
            case 'xls':
            case 'xlsx':
                icon = 'fa-file-excel-o';
                break;
            case 'ppt':
            case 'pptx':
                icon = 'fa-file-powerpoint-o';
                break;
            case 'pdf':
                icon = 'fa-file-pdf-o';
                break;
            case 'zip':
            case 'rar':
            case '7z':
                icon = 'fa-file-archive-o';
                break;
            default:
                icon = 'fa-file-o';
                break;
        }

        return icon;
    }

    /**
     * 是图片
     * @param path
     */
    isImage(path: string): boolean {
        return ['jpg', 'jpeg', 'png', 'gif', 'bmp'].indexOf(this.getFileExt(path)) > -1;
    }

    /**
     * 常用正则表达式
     * @type {{phone: RegExp}}
     */
    regex = {
        phone: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        adminpassword: /^(?=\S*?[A-Za-z])(?=\S*?\d)\S{6,}$/,
    };

}
