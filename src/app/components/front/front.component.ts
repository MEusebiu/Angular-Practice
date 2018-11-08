import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  imagesUrl: any;
  constructor() { }

  ngOnInit() {
    this.imagesUrl=[
      '../../../assets/images/slider/photo10.jpg',
      '../../../assets/images/slider/photo11.jpg',
      '../../../assets/images/slider/photo12.jpg',
      '../../../assets/images/slider/photo13.jpg',
      '../../../assets/images/slider/photo14.jpg',
      '../../../assets/images/slider/photo15.jpg'
    ]
  }

}
