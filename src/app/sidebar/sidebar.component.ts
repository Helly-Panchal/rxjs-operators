import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public operatorsList = [
    {
      name: 'of',
      link: '/of'
    },
    {
      name: 'from',
      link: '/from'
    }
  ];

}
