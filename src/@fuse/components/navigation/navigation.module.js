"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseNavigationModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var button_1 = require("@angular/material/button");
var divider_1 = require("@angular/material/divider");
var icon_1 = require("@angular/material/icon");
var menu_1 = require("@angular/material/menu");
var tooltip_1 = require("@angular/material/tooltip");
var public_api_1 = require("@fuse/directives/scrollbar/public-api");
var basic_component_1 = require("@fuse/components/navigation/horizontal/components/basic/basic.component");
var branch_component_1 = require("@fuse/components/navigation/horizontal/components/branch/branch.component");
var divider_component_1 = require("@fuse/components/navigation/horizontal/components/divider/divider.component");
var spacer_component_1 = require("@fuse/components/navigation/horizontal/components/spacer/spacer.component");
var horizontal_component_1 = require("@fuse/components/navigation/horizontal/horizontal.component");
var aside_component_1 = require("@fuse/components/navigation/vertical/components/aside/aside.component");
var basic_component_2 = require("@fuse/components/navigation/vertical/components/basic/basic.component");
var collapsable_component_1 = require("@fuse/components/navigation/vertical/components/collapsable/collapsable.component");
var divider_component_2 = require("@fuse/components/navigation/vertical/components/divider/divider.component");
var group_component_1 = require("@fuse/components/navigation/vertical/components/group/group.component");
var spacer_component_2 = require("@fuse/components/navigation/vertical/components/spacer/spacer.component");
var vertical_component_1 = require("@fuse/components/navigation/vertical/vertical.component");
var FuseNavigationModule = /** @class */ (function () {
    function FuseNavigationModule() {
    }
    FuseNavigationModule = tslib_1.__decorate([
        (0, core_1.NgModule)({
            declarations: [
                basic_component_1.FuseHorizontalNavigationBasicItemComponent,
                branch_component_1.FuseHorizontalNavigationBranchItemComponent,
                divider_component_1.FuseHorizontalNavigationDividerItemComponent,
                spacer_component_1.FuseHorizontalNavigationSpacerItemComponent,
                horizontal_component_1.FuseHorizontalNavigationComponent,
                aside_component_1.FuseVerticalNavigationAsideItemComponent,
                basic_component_2.FuseVerticalNavigationBasicItemComponent,
                collapsable_component_1.FuseVerticalNavigationCollapsableItemComponent,
                divider_component_2.FuseVerticalNavigationDividerItemComponent,
                group_component_1.FuseVerticalNavigationGroupItemComponent,
                spacer_component_2.FuseVerticalNavigationSpacerItemComponent,
                vertical_component_1.FuseVerticalNavigationComponent
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                button_1.MatButtonModule,
                divider_1.MatDividerModule,
                icon_1.MatIconModule,
                menu_1.MatMenuModule,
                tooltip_1.MatTooltipModule,
                public_api_1.FuseScrollbarModule
            ],
            exports: [
                horizontal_component_1.FuseHorizontalNavigationComponent,
                vertical_component_1.FuseVerticalNavigationComponent
            ]
        })
    ], FuseNavigationModule);
    return FuseNavigationModule;
}());
exports.FuseNavigationModule = FuseNavigationModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQywwQ0FBK0M7QUFDL0MsbURBQTJEO0FBQzNELHFEQUE2RDtBQUM3RCwrQ0FBdUQ7QUFDdkQsK0NBQXVEO0FBQ3ZELHFEQUE2RDtBQUM3RCxvRUFBNEU7QUFDNUUsMkdBQXFJO0FBQ3JJLDhHQUF3STtBQUN4SSxpSEFBMkk7QUFDM0ksOEdBQXdJO0FBQ3hJLG9HQUFnSDtBQUNoSCx5R0FBaUk7QUFDakkseUdBQWlJO0FBQ2pJLDJIQUFtSjtBQUNuSiwrR0FBdUk7QUFDdkkseUdBQWlJO0FBQ2pJLDRHQUFvSTtBQUNwSSw4RkFBMEc7QUFnQzFHO0lBQUE7SUFFQSxDQUFDO0lBRlksb0JBQW9CO1FBOUJoQyxJQUFBLGVBQVEsRUFBQztZQUNOLFlBQVksRUFBRTtnQkFDViw0REFBMEM7Z0JBQzFDLDhEQUEyQztnQkFDM0MsZ0VBQTRDO2dCQUM1Qyw4REFBMkM7Z0JBQzNDLHdEQUFpQztnQkFDakMsMERBQXdDO2dCQUN4QywwREFBd0M7Z0JBQ3hDLHNFQUE4QztnQkFDOUMsOERBQTBDO2dCQUMxQywwREFBd0M7Z0JBQ3hDLDREQUF5QztnQkFDekMsb0RBQStCO2FBQ2xDO1lBQ0QsT0FBTyxFQUFPO2dCQUNWLHFCQUFZO2dCQUNaLHFCQUFZO2dCQUNaLHdCQUFlO2dCQUNmLDBCQUFnQjtnQkFDaEIsb0JBQWE7Z0JBQ2Isb0JBQWE7Z0JBQ2IsMEJBQWdCO2dCQUNoQixnQ0FBbUI7YUFDdEI7WUFDRCxPQUFPLEVBQU87Z0JBQ1Ysd0RBQWlDO2dCQUNqQyxvREFBK0I7YUFDbEM7U0FDSixDQUFDO09BQ1csb0JBQW9CLENBRWhDO0lBQUQsMkJBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSxvREFBb0IifQ==