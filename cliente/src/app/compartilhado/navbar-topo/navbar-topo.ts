import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar-topo',
  templateUrl: 'navbar-topo.html'
})
export class NavBarComponent {
  changeTheme(color: string): void {
    let link: any = $('<link>');
    link
      .appendTo('head')
      .attr({ type: 'text/css', rel: 'stylesheet' })
      .attr('href', 'themes/app-' + color + '.css');
  }

  rtl(): void {
    let body: any = $('body');
    body.toggleClass('rtl');
  }

  navBarToggler(): void {
    let sidebar: any = $('#sidebar');
    let mainContainer: any = $('.main-container');
    sidebar.toggleClass('sidebar-left-zero');
    mainContainer.toggleClass('main-container-ml-zero');
  }
}
