import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../service/user.service';
import {Utils} from '../shared/utils';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
                private fb: FormBuilder,) {

        this.userForm = fb.group({
            name : [null, Validators.required],
            email : [null, Validators.required],
            password : [null],
        });
    }

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.userService.getUser().subscribe( res => {
            if (res.code === 200) {
                this.user = res.data;
                this.userId = res.data.id;

                this.userForm.patchValue({
                    name : res.data.name,
                    email : res.data.email,
                    password : '',
                });
            } else {
                this.utils.error(res.msg);
            }
        });
    }

    submitUser() {
        let userObj = this.userForm.value;
        let that = this;
        userObj.id = this.userId;

        this.userService.editUser(userObj).subscribe(res => {
            this.utils.showUitlsByResponse(res, function(){
                that.getUser();
            });
        });
    }

}
