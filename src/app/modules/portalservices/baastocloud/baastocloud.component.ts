import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-baastocloud',
  templateUrl: './baastocloud.component.html',
  styleUrls: ['./baastocloud.component.scss']
})
export class BaastocloudComponent implements OnInit {
  baasToCloudVMWareText ='';
  baasToCloudHyperVText ='';

  constructor() { }

  ngOnInit(): void {
  }

  changedEditorVMWare(event: EditorChangeContent | EditorChangeSelection) {
    this.baasToCloudVMWareText = event['editor']['root']['innerHTML'];
  }

  changedEditorHyperV(event: EditorChangeContent | EditorChangeSelection) {
    this.baasToCloudHyperVText = event['editor']['root']['innerHTML'];
  }

  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],       
      ['blockquote', 'code-block'],
    
      [{ 'header': 1 }, { 'header': 2 }],               
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      
      [{ 'indent': '-1'}, { 'indent': '+1' }],          
      [{ 'direction': 'rtl' }],                         
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],         
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']                                        
    ]
  };

}
