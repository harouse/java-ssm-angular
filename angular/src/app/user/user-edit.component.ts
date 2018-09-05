import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../service/user.service';
import {Utils} from '../shared/utils';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../core/authentication.service';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
    user: any = [];
    userId: number;
    userForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private userService: UserService,
                private utils: Utils,
                private fb: FormBuilder,
                private userAuth: AuthenticationService) {

        this.userForm = fb.group({
            name: [null, Validators.required],
            email: [null, Validators.required],
            password: [null],
        });

        // 编辑用户
        if (location.href.split('user-edit').length > 1) {
            this.userId = userAuth.getUser().id;
        }
    }

    ngOnInit() {
        if (this.userId) {
            this.getUser();
        }
    }

    getUser() {
        this.userService.getUser().subscribe(res => {
            if (res.code === 200) {
                this.user = res.data;

                this.userForm.patchValue({
                    name: res.data.name,
                    email: res.data.email,
                    password: '',
                });
            } else {
                this.utils.error(res.msg);
            }
        });
    }

    submitUser() {
        let userObj = this.userForm.value;
        let that = this;

        if (this.userId) {
            userObj.id = this.userId;

            this.userService.editUser(userObj).subscribe(res => {
                this.utils.showUitlsByResponse(res, function () {
                    that.getUser();
                });
            });
        } else {
            // 添加用户
            this.userService.addUser(userObj).subscribe( res => {
                this.utils.showUitlsByResponse(res);
            });
        }
    }

}
