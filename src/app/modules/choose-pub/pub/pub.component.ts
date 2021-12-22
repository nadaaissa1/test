import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { PubService } from '../pub.service';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.scss']
})
export class PubComponent implements OnInit {
  @Output() reload: EventEmitter<any> = new EventEmitter();
  @Input() item;
  file: File;

  uploadProgress: number;
  uploadSub: Subscription;
  constructor(public activeModal: NgbActiveModal,
    private sanitizer: DomSanitizer,
    private pubService: PubService
  ) {

  }

  ngOnInit(): void {
    this.sanitizer.bypassSecurityTrustResourceUrl(this.item.base64Img);

  }
  closeModal(): void {
    this.activeModal.close();
    this.reload.emit();
  }
  Pick(): void {
    let data = {
      "picked": !this.item.picked
    }
    this.pubService.PickImage(this.item.name, data).subscribe((response) => {
      this.item = response
      this.closeModal();
    }, error => {
    })
  }
  delete(): void {
    this.pubService.deleteImage(this.item.name).subscribe((response) => {
      this.activeModal.close();
    }, error => {
    })
  }
  onFileSelected(event) {

    this.file = event.target.files[0];


  }
  upload(): void {
    if (this.file) {

      const fileName = this.file.name;

      const formData = new FormData();

      formData.append("imageFile", this.file);
      let _upload = this.pubService.uploadImage(formData).pipe(
        finalize(() => this.reset())
      );
      this.uploadSub = _upload.subscribe(event => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        }
      });

    }

  }
  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
    this.reload.emit();
  }

}
