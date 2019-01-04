import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Widget } from 'app/shared';

@Component({
  selector: 'app-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.css']
})
export class WidgetDetailsComponent {

  originalName: string;
  selectedWidget: Widget;

  // create saved output event
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  // display selected widget in the widget-details component
  @Input() set widget(value: Widget) {
    if (value) { this.originalName = value.name; }
    this.selectedWidget = Object.assign({}, value);
  }

}
