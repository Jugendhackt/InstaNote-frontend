import { Component, OnInit } from '@angular/core';
import {SearchService} from "../search.service";
declare var $:any;
@Component({
  selector: 'app-block-controller',
  templateUrl: './block-controller.component.html',
  styleUrls: ['./block-controller.component.scss']
})
export class BlockControllerComponent implements OnInit {
  constructor(public searchService: SearchService) { }
  public newObject;
  ngOnInit() {
  }
  change(e) {
    console.log('a')
    $(e.target).closest(".card").toggleClass("active");
    $(e.target).closest(".card").toggleClass("green");
    $(e.target).closest(".card").toggleClass("red");

    // ///////////////////////////////////////////////////////////////

    this.newObject = this.searchService.search;
    let status = $(e.event).closest('.card').hasClass('active');
    let cardID = $(e.event).closest('.card').data('name');
    if(!status) {
      delete this.newObject.results[cardID]
    } else {
      this.newObject.results[cardID] = this.searchService.search.results[cardID];
    }
    console.log(this.newObject);
  }

}
