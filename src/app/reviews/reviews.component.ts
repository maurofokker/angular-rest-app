import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  simple = 'Hello review!';

  list = ['one', 'two', 'three', 'four'];

  ngOnInit(): void {
    console.log('on init...');
  }

}
