import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BackOfficeComponent } from './back-office.component';
import { RouterModule } from '@angular/router';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { MatTableModule } from '@angular/material/table';
import { ContratModule } from '../contrat/contrat.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { SharedModule } from 'app/shared/shared.module';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { ListComponent } from './list/list.component';
import { BackOfficeRoutes } from './back-office.routing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddclientComponent } from './addclient/addclient.component';
import { EditclientComponent } from './editclient/editclient.component';

@NgModule({
  declarations: [
    BackOfficeComponent,
    SidebarComponent,
    ListComponent,
    ClientlistComponent,
    UserlistComponent,
    AdduserComponent,
    AddclientComponent,
    EditclientComponent

  ],
  imports: [
    MatTableModule,
    ContratModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    RouterModule.forChild(BackOfficeRoutes),
    FuseFindByKeyPipeModule,
    FuseNavigationModule,
    FuseScrollbarModule,
    FuseScrollResetModule,
    SharedModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule
  ], 
  exports: [
    BackOfficeComponent,
    UserlistComponent
   ]

})
export class BackOfficeModule { }
