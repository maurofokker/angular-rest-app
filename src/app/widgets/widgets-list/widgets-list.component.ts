import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from 'app/shared';

/**
 * Presentational component using @Input and  @Output
 */
@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css']
})
export class WidgetsListComponent {

  // pass widgets collection to widgets-list component
  @Input() widgets: Widget[];

  @Input() readonly = false;

  // capture selected output event from widgets-list component
  @Output() selected = new EventEmitter();
  // create a deleted output event
  @Output() deleted = new EventEmitter();

}
