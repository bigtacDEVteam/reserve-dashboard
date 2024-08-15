import { Component, Input } from '@angular/core';

import {
  faGaugeSimpleHigh,
  faChartLine,
  faFile,
  faUser,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  faGaugeSimpleHigh = faGaugeSimpleHigh;
  faChartLine = faChartLine;
  faFile = faFile;
  faUser = faUser;
  faCircleQuestion = faCircleQuestion;
  @Input() isCollapsed = true;
}
