import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import { QuillModule } from 'ngx-quill';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { SharedModule } from 'app/shared/shared.module';
import { PortalServicesComponent } from './portalservices.component';
import { PortalServicesListComponent } from './list/list.component';
import { PortalServicesRoutes } from './portalservices.routing';
import { PortalServicesSidebarComponent } from './sidebar/sidebar.component';
import { IaasComponent } from './iaas/iaas.component';
import { DraasComponent } from './draas/draas.component';
import { BaasoncloudComponent } from './baasoncloud/baasoncloud.component';
import { BaastocloudComponent } from './baastocloud/baastocloud.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
    declarations: [
        PortalServicesComponent,
        PortalServicesListComponent,
        PortalServicesSidebarComponent,
        IaasComponent,
        DraasComponent,
        BaasoncloudComponent,
        BaastocloudComponent
    ],
    imports     : [
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatTabsModule,
        MatInputModule,
        MatMenuModule,
        MatProgressBarModule,
        MatSelectModule,
        MatSidenavModule,
        QuillModule.forRoot(),
        FuseFindByKeyPipeModule,
        FuseNavigationModule,
        FuseScrollbarModule,
        FuseScrollResetModule,
        SharedModule,
        RouterModule.forChild(PortalServicesRoutes),
        QuillModule.forRoot(),
    ],
    entryComponents:[PortalServicesComponent]
})
export class PortalServicesModule
{
}
