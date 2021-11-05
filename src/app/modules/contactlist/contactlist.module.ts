import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactlistComponent } from './contactlist.component';
import { MatTableModule } from '@angular/material/table';
import { PubComponent } from '../pub/pub.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    ContactlistComponent,    
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    FuseFindByKeyPipeModule,
    FuseNavigationModule,
    FuseScrollbarModule,
    FuseScrollResetModule,
    SharedModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
  ],
  exports: [
    ContactlistComponent
  ]
})
export class ContactlistModule { }
