import { Component, OnInit } from '@angular/core';
import { sidebarMenu } from '../../../constants/sidebarMenu';

@Component({
  selector: 'mm-dumb-sidebar',
  templateUrl: './dumb-sidebar.component.html',
  styleUrls: ['./dumb-sidebar.component.scss'],
})
export class DumbSidebarComponent implements OnInit {
  menuItems = sidebarMenu;

  constructor() {}

  ngOnInit(): void {}
}
