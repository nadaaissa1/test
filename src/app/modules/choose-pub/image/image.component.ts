import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PubService } from '../pub.service';
import { PubComponent } from '../pub/pub.component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() item;
  @Output() reload: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: NgbModal, private pubService: PubService) { }

  ngOnInit(): void {
    console.log(this.item)
  }
  open(): void {
    const modalRef = this.modalService.open(PubComponent, {ariaLabelledBy: 'modal-basic-title'});
    modalRef.componentInstance.item = this.item;
    modalRef.componentInstance.reload.subscribe(() => {
      console.log("here")
      this.reload.emit();
    })
 }
  openUpload(): void {
    const modalRef = this.modalService.open(PubComponent, {ariaLabelledBy: 'modal-basic-title'});
    modalRef.componentInstance.item = true;
  }
  pick(): void {
    let data = {
      "picked": !this.item.picked
    }
    this.pubService.PickImage(this.item.name, data).subscribe((response) => {
      this.item = response
      this.reload.emit();
    }, error => {
    })
  }
  delete(): void {
    this.pubService.deleteImage(this.item.name).subscribe((response) => {
      this.reload.emit();
    }, error => {
    })
  }

}
