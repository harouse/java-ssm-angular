import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './core/auth-guard.service';
import {LayoutComponent} from './partial/layout.component';
import {UserEditComponent} from './user/user-edit.component';


const routes: Routes = [
  // 设置默认跳转路由， full表示与path为空的路由完全匹配
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  {
      path: '',
      component: LayoutComponent,
      canActivate: [AuthGuard],
      children: [
          { path: 'index', component: IndexComponent},
          { path: 'user-edit', component: UserEditComponent},
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  // 你通常不会在路由模块中声明组件，所以可以删除 @NgModule.declarations,并删除对 CommonModule 的引用。
  // declarations: []
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
