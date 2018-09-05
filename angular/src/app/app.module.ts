import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {IndexComponent} from './index/index.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {Utils} from './shared/utils';
import {AuthenticationService} from './core/authentication.service';
import {JwtHelperService} from './shared/jwt-helper.service';
import {AuthGuard} from './core/auth-guard.service';
import {Configuration} from './shared/configuration';
import {LayoutComponent} from './partial/layout.component';
import {EmitService} from './service/emit.service';
import {JWTInterceptor} from './core/jwt-interceptor';
import {TokenInterceptor} from './core/token-interceptor';
import {PostsService} from './service/posts.service';
import {UserService} from './service/user.service';

registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        LoginComponent,
        LayoutComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
    ],
    providers: [
        {provide: NZ_I18N, useValue: zh_CN},
        Utils,
        AuthGuard,
        Configuration,
        AuthenticationService,
        JwtHelperService,
        EmitService,
        PostsService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
