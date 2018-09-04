import {Component, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/authentication.service';
import { Configuration } from '../shared/configuration';
import { EmitService } from '../service/emit.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    isCollapsed = false;
    user: any = {};
    file_prefix: string;
    currentRoute: string;

    constructor(private router: Router,
                private authService: AuthenticationService,
                private config: Configuration,
                public emitService: EmitService) {
        this.file_prefix = config.FILE_PREFIX;
        this.currentRoute = router.url;
    }

    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.user = this.authService.getUser();
        }
    }

    logout(): void {
        this.authService.deleteToken();
        this.router.navigate(['/login']);
    }

    addPosts() {
        this.emitService.eventEmit.emit('1');
    }
}
