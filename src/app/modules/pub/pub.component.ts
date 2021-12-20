import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.scss']
})
export class PubComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  imageObject: Array<object> = [
    {
      image: '../../../assets/ImageSlider1.PNG',
      thumbImage: '../../../assets/ImageSlider1.PNG',
    }, 
    {
      image: '../../../assets/ImageSlider2.png',
      thumbImage: '../../../assets/ImageSlider2.png',
    },
    {
      image: '../../../assets/ImageSlider3.png',
      thumbImage: '../../../assets/ImageSlider3.png',
    }
  ];
}
