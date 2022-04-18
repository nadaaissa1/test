"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseConfirmationModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var button_1 = require("@angular/material/button");
var dialog_1 = require("@angular/material/dialog");
var icon_1 = require("@angular/material/icon");
var confirmation_service_1 = require("@fuse/services/confirmation/confirmation.service");
var dialog_component_1 = require("@fuse/services/confirmation/dialog/dialog.component");
var common_1 = require("@angular/common");
var FuseConfirmationModule = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseConfirmationModule(_fuseConfirmationService) {
        this._fuseConfirmationService = _fuseConfirmationService;
    }
    FuseConfirmationModule = tslib_1.__decorate([
        (0, core_1.NgModule)({
            declarations: [
                dialog_component_1.FuseConfirmationDialogComponent
            ],
            imports: [
                button_1.MatButtonModule,
                dialog_1.MatDialogModule,
                icon_1.MatIconModule,
                common_1.CommonModule
            ],
            providers: [
                confirmation_service_1.FuseConfirmationService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [confirmation_service_1.FuseConfirmationService])
    ], FuseConfirmationModule);
    return FuseConfirmationModule;
}());
exports.FuseConfirmationModule = FuseConfirmationModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm1hdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUF5QztBQUN6QyxtREFBMkQ7QUFDM0QsbURBQTJEO0FBQzNELCtDQUF1RDtBQUN2RCx5RkFBMkY7QUFDM0Ysd0ZBQXNHO0FBQ3RHLDBDQUErQztBQWdCL0M7SUFFSTs7T0FFRztJQUNILGdDQUFvQix3QkFBaUQ7UUFBakQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUF5QjtJQUVyRSxDQUFDO0lBUFEsc0JBQXNCO1FBZGxDLElBQUEsZUFBUSxFQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLGtEQUErQjthQUNsQztZQUNELE9BQU8sRUFBRTtnQkFDTCx3QkFBZTtnQkFDZix3QkFBZTtnQkFDZixvQkFBYTtnQkFDYixxQkFBWTthQUNmO1lBQ0QsU0FBUyxFQUFLO2dCQUNWLDhDQUF1QjthQUMxQjtTQUNKLENBQUM7aURBTWdELDhDQUF1QjtPQUw1RCxzQkFBc0IsQ0FRbEM7SUFBRCw2QkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLHdEQUFzQiJ9