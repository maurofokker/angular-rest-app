import { OnInit, Component } from '@angular/core';

// decorate widget component to use the template
@Component({
  selector: 'app-widget',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
})
export class WidgetComponent implements OnInit {

  message = 'Hello Widget';

  ngOnInit(): void {
    console.log('implement this if u need')
  }

}
