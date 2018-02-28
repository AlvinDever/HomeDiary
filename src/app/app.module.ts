
//这个根模块会告诉 Angular 如何组装该应用


//引入模块

import { BrowserModule } from '@angular/platform-browser'; //*BrowserModule，浏览器解析的模块*/
import { NgModule } from '@angular/core';  /*核心模块*/
import { HttpModule }    from '@angular/http';

import {AppRoutingModule} from './routers/app.routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page1Component } from './components/page1/page1.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ContactsComponent} from './components/contacts/contacts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JobsComponent } from './components/jobs/jobs.component';
 /*自定义的模块*/


/*@NgModule装饰器将AppModule标记为 Angular 模块类（也叫NgModule类）。
 @NgModule接受一个元数据对象，告诉 Angular 如何编译和启动应用。*/

@NgModule({
  declarations: [    /*引入当, JobsComponent前项目运行的�, DashboardComponent�组件  自定义组件都需要引入并且在这个里面配制*/
    AppComponent, HeaderComponent, FooterComponent, Page1Component, SidebarComponent, BreadcrumbsComponent, 
    ContactsComponent, JobsComponent,DashboardComponent
  ],
  imports: [  /*当前的项目依赖哪些模块*/
    BrowserModule,HttpModule,AppRoutingModule
  ],
  providers: [], /*定义的服务  回头放在这个里面*/
  bootstrap: [AppComponent]   /*默认启动那个组件*/
})


/*根模块不需要导出任何东西，   因为其它组件不需要导入根模块。 但是一定要写*/

export class AppModule { }
