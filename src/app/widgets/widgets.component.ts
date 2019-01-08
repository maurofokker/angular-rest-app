import { OnInit, Component } from '@angular/core';
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
    this.loadWidgets();
    this.reset();
  }

  loadWidgets() {
    this.widgetsService.all()
      .subscribe(widgets => this.widgets = widgets);
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

  cancel() {
    this.reset();
  }

  save(widget) {
    console.log('SAVING WIDGET', widget);
    if (!widget.id) {
      this.create(widget);
    } else {
      this.update(widget);
    }
  }

  /*
  // reuse logic but is not pretty readable
  execute(widget, action) {
    this.widgetsService[action](widget)
      .subscribe(res => {
        this.loadWidgets();
        this.reset();
      });
  }
  */

  create(widget) {
    this.widgetsService.create(widget)
      .subscribe(res => {
        this.loadWidgets();
        this.reset();
      });
  }

  update(widget) {
    this.widgetsService.update(widget)
      .subscribe(res => {
        this.loadWidgets();
        this.reset();
      })
  }

  delete(widget) {
    console.log('DELETING WIDGET', widget);
    // this.execute(widget, 'delete');

    this.widgetsService.delete(widget)
      .subscribe(res => {
        this.loadWidgets();
        this.reset();
      });

  }

}
