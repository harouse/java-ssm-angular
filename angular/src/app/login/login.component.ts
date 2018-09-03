import {Component, OnInit} from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {DataService} from '../service/data.service';
import { Utils } from '../shared/utils';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    validateForm: FormGroup;

    constructor(private fb: FormBuilder,
                private data: DataService,
                private util: Utils) {
    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            name: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }

    submitForm(): void {
        this.data.post<any>('http://localhost:8080/angular/user/login', this.validateForm.value).subscribe(res => {
            if (res.code === 200) {
                console.dir(res);
            } else {
                this.util.error(res.msg);
            }
        });
    }
}
