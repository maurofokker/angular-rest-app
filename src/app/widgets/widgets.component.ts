import { OnInit, Component, Input } from '@angular/core';
import { WidgetsService, Widget } from 'app/shared';

// decorate widget component to use the template
@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
})
export class WidgetsComponent implements OnInit {

  selectedWidget: Widget;
  widgets: Widget[];

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit(): void {
    console.log('load widgets');
    this.widgets = this.widgetsService.loadWidgets();
    this.reset();
  }

  /**
   * to prepopulate form object
   * with pristine object
   */
  reset() {
    this.selectedWidget = {
      id: null,
      name: '',
      description: ''
    };
  }

  // assign the selected widget to the selectedWidget property
  selected(widget) {
    this.selectedWidget = widget;
  }

  save(widget) {
    console.log('SAVING WIDGET', widget);
    // this.widgets.push(widget);
    this.reset()
  }

  cancel() {
    this.reset();
  }
}
