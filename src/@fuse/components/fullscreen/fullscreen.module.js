"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseFullscreenModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var tooltip_1 = require("@angular/material/tooltip");
var fullscreen_component_1 = require("@fuse/components/fullscreen/fullscreen.component");
var common_1 = require("@angular/common");
var FuseFullscreenModule = /** @class */ (function () {
    function FuseFullscreenModule() {
    }
    FuseFullscreenModule = tslib_1.__decorate([
        (0, core_1.NgModule)({
            declarations: [
                fullscreen_component_1.FuseFullscreenComponent
            ],
            imports: [
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                tooltip_1.MatTooltipModule,
                common_1.CommonModule
            ],
            exports: [
                fullscreen_component_1.FuseFullscreenComponent
            ]
        })
    ], FuseFullscreenModule);
    return FuseFullscreenModule;
}());
exports.FuseFullscreenModule = FuseFullscreenModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmdWxsc2NyZWVuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQXlDO0FBQ3pDLG1EQUEyRDtBQUMzRCwrQ0FBdUQ7QUFDdkQscURBQTZEO0FBQzdELHlGQUEyRjtBQUMzRiwwQ0FBK0M7QUFnQi9DO0lBQUE7SUFFQSxDQUFDO0lBRlksb0JBQW9CO1FBZGhDLElBQUEsZUFBUSxFQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLDhDQUF1QjthQUMxQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3QkFBZTtnQkFDZixvQkFBYTtnQkFDYiwwQkFBZ0I7Z0JBQ2hCLHFCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQU87Z0JBQ1YsOENBQXVCO2FBQzFCO1NBQ0osQ0FBQztPQUNXLG9CQUFvQixDQUVoQztJQUFELDJCQUFDO0NBQUEsQUFGRCxJQUVDO0FBRlksb0RBQW9CIn0=