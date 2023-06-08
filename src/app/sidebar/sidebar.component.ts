import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public operatorsList = [
    {
      name: 'Of',
      link: '/of'
    },
    {
      name: 'From',
      link: '/from'
    },
    {
      name: 'Take',
      link: '/take'
    },
    {
      name: 'TakeUntil',
      link: '/take-until'
    },
    {
      name: 'Debounce Time',
      link: '/debounce-time'
    },
    {
      name: 'ConcatWith',
      link: '/concat'
    },
    {
      name: 'Merge',
      link: '/merge'
    },
    {
      name: 'Map',
      link: '/map'
    },
    {
      name: 'Interval',
      link: '/interval'
    },
    {
      name: 'Timer',
      link: '/timer'
    },
    {
      name: 'Filter',
      link: '/filter'
    },
  ];

}
