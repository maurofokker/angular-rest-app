import { OnInit, Component, Input } from '@angular/core';
import { WidgetsService, Widget } from 'app/shared';

// decorate widget component to use the template
@Component({
  selector: 'app-widget',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
})
export class WidgetComponent implements OnInit {

  selectedWidget: Widget;
  widgets: Widget[];

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit(): void {
    console.log('load widgets');
    this.widgets = this.widgetsService.loadWidgets();
  }

  // assign the selected widget to the selectedWidget property
  selected(widget) {
    this.selectedWidget = widget;
  }
}
