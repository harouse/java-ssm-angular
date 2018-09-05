import {Component, OnInit} from '@angular/core';
import {DataService} from '../service/data.service';
import {AuthenticationService} from '../core/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmitService} from '../service/emit.service';
import {Utils} from '../shared/utils';
import {PostsService} from '../service/posts.service';

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
                private posts: PostsService,
                private fb: FormBuilder,
                private auth: AuthenticationService,
                public emitService: EmitService,
                private util: Utils) {

        this.user = this.auth.getUser();
        // 帖子 添加/编辑 窗体
        this.postsForm = fb.group({
            title: [null, Validators.required],
            contents: [null, Validators.required],
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

        this.emitService.eventEmit.subscribe(res => {
            this.isAddPostsVisible = res;
        });
    }

    deletePosts(id: number) {
        let that = this;
        this.posts.deletePosts(id).subscribe( res => {
            this.util.showUitlsByResponse(res, function() {
                that.getList();
            });
        });
    }

    editPosts(postsItem: any) {
        this.isAddPostsVisible = true;
        this.postsId = postsItem.id;

        this.postsForm.patchValue({
            'title': postsItem.title,
            'contents': postsItem.contents,
        });
    }

    getLocalTime(timeStamp) {
        return new Date(timeStamp).toLocaleString();
    }

    cancelPosts() {
        this.isAddPostsVisible = false;
        this.postsId = 0;
        this.postsForm.reset();
    }

    submitPosts() {
        let data: any = {...this.postsForm.value};
        let that = this;
        if (this.postsId) {
            data.id = this.postsId;

            this.posts.editPosts(data).subscribe( res => {
                this.util.showUitlsByResponse(res, function(){
                    that.getList();
                    that.cancelPosts();
                });
            });
        } else {
            this.posts.addPosts(data).subscribe(res => {
                that.util.showUitlsByResponse(res, function () {
                    that.getList();
                    that.cancelPosts();
                });
            });
        }
    }

}
