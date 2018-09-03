import { Injectable } from '@angular/core';

@Injectable()
export class PageMemoryService {

    constructor() {
    }

    get(key: string): number {
        if (sessionStorage.getItem('page-memory') === null) {
            return 0;
        }

        let pages = JSON.parse(sessionStorage.getItem('page-memory'));

        if (pages[key]) {
            return pages[key];
        }

        return 0;
    }

    set(key: string, value: number) {
        let data = {};
        if (sessionStorage.getItem('page-memory') === null) {
            data[key] = value;
            sessionStorage.setItem('page-memory', JSON.stringify(data));
        } else {
            data = JSON.parse(sessionStorage.getItem('page-memory'));
            data[key] = value;
            sessionStorage.setItem('page-memory', JSON.stringify(data));
        }
    }

}
