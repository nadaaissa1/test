import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-baasoncloud',
  templateUrl: './baasoncloud.component.html',
  styleUrls: ['./baasoncloud.component.scss']
})
export class BaasoncloudComponent implements OnInit {
  baasOnCloudVMWareText ='';
  baasOnCloudHyperVText ='';

  constructor() {}

  ngOnInit(): void {}

  changedEditorVMWare(event: EditorChangeContent | EditorChangeSelection) {
    this.baasOnCloudVMWareText = event['editor']['root']['innerHTML'];
  }

  changedEditorHyperV(event: EditorChangeContent | EditorChangeSelection) {
    this.baasOnCloudHyperVText = event['editor']['root']['innerHTML'];
  }

  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']                                         // remove formatting button
    ]
  };
}
