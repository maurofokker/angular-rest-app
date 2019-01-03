import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  simple = 'Hello review!';

  list = ['one', 'two', 'three', 'four'];

  ngOnInit(): void {
    console.log('on init...');
  }

}
