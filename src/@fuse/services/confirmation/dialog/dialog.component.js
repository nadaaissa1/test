"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseConfirmationDialogComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var FuseConfirmationDialogComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseConfirmationDialogComponent(data, matDialogRef) {
        this.data = data;
        this.matDialogRef = matDialogRef;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FuseConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    FuseConfirmationDialogComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-confirmation-dialog',
            templateUrl: './dialog.component.html',
            styles: [
                /* language=SCSS */
                "\n            .fuse-confirmation-dialog-panel {\n                @screen md {\n                    @apply w-128;\n                }\n\n                .mat-dialog-container {\n                    padding: 0 !important;\n                }\n            }\n        "
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__param(0, (0, core_1.Inject)(dialog_1.MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [Object, dialog_1.MatDialogRef])
    ], FuseConfirmationDialogComponent);
    return FuseConfirmationDialogComponent;
}());
exports.FuseConfirmationDialogComponent = FuseConfirmationDialogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUE2RTtBQUM3RSxtREFBeUU7QUFzQnpFO0lBRUk7O09BRUc7SUFDSCx5Q0FDb0MsSUFBNEIsRUFDckQsWUFBMkQ7UUFEbEMsU0FBSSxHQUFKLElBQUksQ0FBd0I7UUFDckQsaUJBQVksR0FBWixZQUFZLENBQStDO0lBR3RFLENBQUM7SUFFRCx3R0FBd0c7SUFDeEcsb0JBQW9CO0lBQ3BCLHdHQUF3RztJQUV4Rzs7T0FFRztJQUNILGtEQUFRLEdBQVI7SUFHQSxDQUFDO0lBdEJRLCtCQUErQjtRQW5CM0MsSUFBQSxnQkFBUyxFQUFDO1lBQ1AsUUFBUSxFQUFPLDBCQUEwQjtZQUN6QyxXQUFXLEVBQUkseUJBQXlCO1lBQ3hDLE1BQU0sRUFBUztnQkFDWCxtQkFBbUI7Z0JBQ25CLHdRQVVDO2FBQ0o7WUFDRCxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUN4QyxDQUFDO1FBT08sbUJBQUEsSUFBQSxhQUFNLEVBQUMsd0JBQWUsQ0FBQyxDQUFBO3lEQUNILHFCQUFZO09BUDVCLCtCQUErQixDQTRCM0M7SUFBRCxzQ0FBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLDBFQUErQiJ9