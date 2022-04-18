"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseAlertModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var alert_component_1 = require("@fuse/components/alert/alert.component");
var FuseAlertModule = /** @class */ (function () {
    function FuseAlertModule() {
    }
    FuseAlertModule = tslib_1.__decorate([
        (0, core_1.NgModule)({
            declarations: [
                alert_component_1.FuseAlertComponent
            ],
            imports: [
                common_1.CommonModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule
            ],
            exports: [
                alert_component_1.FuseAlertComponent
            ]
        })
    ], FuseAlertModule);
    return FuseAlertModule;
}());
exports.FuseAlertModule = FuseAlertModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxlcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLG1EQUEyRDtBQUMzRCwrQ0FBdUQ7QUFDdkQsMEVBQTRFO0FBZTVFO0lBQUE7SUFFQSxDQUFDO0lBRlksZUFBZTtRQWIzQixJQUFBLGVBQVEsRUFBQztZQUNOLFlBQVksRUFBRTtnQkFDVixvQ0FBa0I7YUFDckI7WUFDRCxPQUFPLEVBQU87Z0JBQ1YscUJBQVk7Z0JBQ1osd0JBQWU7Z0JBQ2Ysb0JBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQU87Z0JBQ1Ysb0NBQWtCO2FBQ3JCO1NBQ0osQ0FBQztPQUNXLGVBQWUsQ0FFM0I7SUFBRCxzQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLDBDQUFlIn0=