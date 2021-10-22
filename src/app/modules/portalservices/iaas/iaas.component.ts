import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-iaas',
  templateUrl: './iaas.component.html',
  styleUrls: ['./iaas.component.scss']
})
export class IaasComponent implements OnInit {
  iaasVMWareText ='';
  iaasHyperVText ='';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  changedEditorVMWare(event: EditorChangeContent | EditorChangeSelection) {
    this.iaasVMWareText = event['editor']['root']['innerHTML'];
  }

  changedEditorHyperV(event: EditorChangeContent | EditorChangeSelection) {
    this.iaasHyperVText = event['editor']['root']['innerHTML'];
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
