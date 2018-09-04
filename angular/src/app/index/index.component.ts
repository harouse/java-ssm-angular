import {Component, OnInit} from '@angular/core';
import {DataService} from '../service/data.service';
import {AuthenticationService} from '../core/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EmitService} from '../service/emit.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    listPosts: any = [];
    user: any = [];
    isAddPostsVisible = false;
    postsForm: FormGroup;
    postsId = 0;

    constructor(private data: DataService,
                private fb: FormBuilder,
                private auth: AuthenticationService,
                public emitService: EmitService) {

        this.user = this.auth.getUser();
        // 帖子 添加/编辑 窗体
        this.postsForm = fb.group({
            title:        [null, Validators.required],
            contents:      [null, Validators.required],
        });
    }


    ngOnInit() {
        this.getList();
    }

    getList() {
        let list = this.data.get<any>('http://localhost:8080/angular/posts/lists');
        list.subscribe(res => {
            if (res.code === 200) {
                this.listPosts = res.data;
            }
        });

        this. emitService.eventEmit.subscribe(res => {
            this.isAddPostsVisible = res;
        });
    }

    deletePosts() {

    }

    getLocalTime(timeStamp) {
        return new Date(timeStamp).toLocaleString().replace(/年|月/g, '-').replace(/日/g, ' ');
    }

    cancelPosts() {
        this.isAddPostsVisible = false;
        this.postsId = 0;
        this.postsForm.reset();
    }

    submitPosts() {
        let data: any = { ...this.postsForm.value };
        this.data.post('http://localhost:8080/angular/posts/add', data).subscribe( res => {
            console.dir(res);
        });
    }

}
