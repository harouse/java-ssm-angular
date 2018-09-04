import {Component, OnInit} from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {DataService} from '../service/data.service';
import { Utils } from '../shared/utils';
import {AuthenticationService} from '../core/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    validateForm: FormGroup;

    constructor(private fb: FormBuilder,
                private data: DataService,
                private util: Utils,
                private router: Router,
                private authService: AuthenticationService) {
    }

    ngOnInit(): void {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/index']);
        }

        this.validateForm = this.fb.group({
            name: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }

    submitForm(): void {
        this.data.post<any>('http://localhost:8080/angular/user/login', this.validateForm.value).subscribe(res => {
            if (res.code === 200) {
                this.authService.setToken(res.data);
                this.util.info('登录成功');
                this.router.navigate(['/index']);
            } else {
                this.util.error(res.msg);
            }
        });
    }
}
