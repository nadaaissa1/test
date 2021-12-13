import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PubService } from '../choose-pub/pub.service';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.scss']
})
export class PubComponent implements OnInit {

  constructor(private pubService: PubService) { }

  ngOnInit(): void {
    this.getImages();
  }

  imageObject: Array<object> = [];
  getImages(): void {
    this.pubService.getImages()
      .subscribe((response) => {

        response.forEach((img: any) => {
          if (img.name != "cloudPortal-icon.png") {
            let url = img.base64Img;
            this.imageObject.push({
              image: url,
              thumbImage: url,
            })
          }
        });
      }, error => {
      }
      )
  }

}
