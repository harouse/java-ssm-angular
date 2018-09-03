import {Component, OnInit} from '@angular/core';
import {DataService} from '../service/data.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

    constructor(private data: DataService) {
    }

    listPosts: any = [];

    ngOnInit() {
        let list = this.data.get<any>('http://localhost:8080/angular/posts/lists');

        list.subscribe(res => {
            if (res.code === 200) {
                this.listPosts = res.data;
            }
        });
    }

}
