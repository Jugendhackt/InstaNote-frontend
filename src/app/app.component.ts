import {Component, OnInit} from '@angular/core';
import {SearchService} from "./search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public searchService: SearchService) { }
  public wasSearched = this.searchService.wasSearched;
  ngOnInit() {
  }

}
