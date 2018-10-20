import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-block-controller',
  templateUrl: './block-controller.component.html',
  styleUrls: ['./block-controller.component.scss']
})
export class BlockControllerComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $('.block-card').click((e) => {
      $(e.target).closest(".card").toggleClass("active");
      $(e.target).closest(".card").toggleClass("green");
      $(e.target).closest(".card").toggleClass("red");
    })
  }

}
