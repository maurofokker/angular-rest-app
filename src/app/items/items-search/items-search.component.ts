import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ItemsService } from '../../shared/items.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.css']
})
export class ItemsSearchComponent implements OnInit {
  // look for local variable in the template #itemsSearch and create a reference
  @ViewChild('itemsSearch') itemsSearch;
  @Output() results = new EventEmitter();

  constructor(private itemsService: ItemsService) {
  }

  ngOnInit() {
    const search$ = Observable.fromEvent(this.getNativeElement(this.itemsSearch), 'keyup')
      .debounceTime(200)
      .distinctUntilChanged()
      // .filter((event: any) => event.shiftKey)
      .map((event: any) => event.target.value)
      // .map(query => query.toUpperCase())
      .switchMap(query => this.itemsService.search(query))
      .subscribe(items => this.results.emit(items)) // kick out result to parent component (Home)
  }

  getNativeElement(element) {
    return element.nativeElement;
  }
}
