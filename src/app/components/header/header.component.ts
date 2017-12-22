import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',  /*表示使用这个组件的名称*/
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  pageTitle: string;

  msg: any;

  menu1: any;

  menus: any[];


  constructor() {

  }   /*构造函数*/

  ngOnInit() {  /*生命周期函数  加载触发的方法*/
    this.pageTitle = 'Home-Draiy';
    this.menus = ['Dashboard', 'To-Do', 'Property', 'Consume', 'More'];
    this.menu1 = 'Dashboard';
    this.msg = '数据';
  }

}
