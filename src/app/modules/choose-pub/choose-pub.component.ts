import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PubService } from './pub.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PubComponent } from './pub/pub.component';


@Component({
  selector: 'app-choose-pub',
  templateUrl: './choose-pub.component.html',
  styleUrls: ['./choose-pub.component.scss']
})
export class ChoosePubComponent implements OnInit {
  items: any[]=[];
  NonChosenItems: any[]=[];
  uploadItem:any;
  constructor(private pubService: PubService,
     private sanitizer: DomSanitizer,
     private modalService: NgbModal) {
   
  }

  ngOnInit(): void {
    this.getImages();
  }
  getImages(): void{
    this.NonChosenItems = [];
    this.items = [];
    this.pubService.getImages()
    .subscribe((response) => {

     response.forEach(img => {
       this.sanitizer.bypassSecurityTrustResourceUrl(img.base64Img);
       // if(img.picked){
          this.items.push(img);
      //  } else this.NonChosenItems.push(img);
       
       
      });
    }, error => {
    }
    )
  }
  open(): void {
    const modalRef = this.modalService.open(PubComponent, {ariaLabelledBy: 'modal-basic-title'});
    modalRef.componentInstance.item = true;
    modalRef.componentInstance.reload.subscribe(() => {
      console.log("here")
      this.getImages();
    })
 }

}
