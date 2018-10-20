import { Component, OnInit } from '@angular/core';
import {SearchService} from "../search.service";

declare var $: any;

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  searchval = "";
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    $('#searchbar-input').focusout(() => {
      this.submit()
    })
  }
  submit() {
    this.searchService.sendSearch(this.searchval);
  }
}
