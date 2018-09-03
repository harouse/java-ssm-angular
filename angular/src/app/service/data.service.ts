import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  /**
   *
   * @param {string} url
   * @param {object} param
   * @returns {Observable<T>}
   */
  get<T>(url: string, param?: object): Observable<T> {
    return this.http.get<T>(url, {params: this.prepareParams(param)});
  }

    /**
     * post 请求 - CREATE
     * @param {string} url
     * @param {any} body
     * @returns {Observable<T>}
     */
    post<T>(url: string, body?: any): Observable<T> {
        return this.http.post<T>(url, body);
    }

  /**
   * 对象转成 HttpParams 供 HTTP 请求使用
   * @param {Object} params
   * @returns {HttpParams}
   */
  prepareParams(params: object): HttpParams {
    let httpParams = new HttpParams();
    if (params) {
      for (let key in params) {

        // GET 请求的一些优化，空的默认的都不传
        if (params[key] === '' || params[key] === null) {
          continue;
        }
        if (key === 'page' && params[key] === 1) {
          continue;
        }
        if (key === 'per_page' && params[key] === 20) {
          continue;
        }

        httpParams = httpParams.append(key, params[key]);
      }
    }

    return httpParams;
  }
}
