import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-draas',
  templateUrl: './draas.component.html',
  styleUrls: ['./draas.component.scss']
})
export class DraasComponent implements OnInit {
  draasVMWareText ='';
  draasHyperVText ='';

  constructor() { }

  ngOnInit(): void {
  }

  changedEditorVMWare(event: EditorChangeContent | EditorChangeSelection) {
    this.draasVMWareText = event['editor']['root']['innerHTML'];
  }

  changedEditorHyperV(event: EditorChangeContent | EditorChangeSelection) {
    this.draasHyperVText = event['editor']['root']['innerHTML'];
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
