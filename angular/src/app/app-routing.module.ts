import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from './index/index.component';


const routes: Routes = [
  // 设置默认跳转路由， full表示与path为空的路由完全匹配
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent}
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
