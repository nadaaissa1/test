"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseUtilsModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var utils_service_1 = require("@fuse/services/utils/utils.service");
var FuseUtilsModule = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseUtilsModule(_fuseUtilsService) {
        this._fuseUtilsService = _fuseUtilsService;
    }
    FuseUtilsModule = tslib_1.__decorate([
        (0, core_1.NgModule)({
            providers: [
                utils_service_1.FuseUtilsService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [utils_service_1.FuseUtilsService])
    ], FuseUtilsModule);
    return FuseUtilsModule;
}());
exports.FuseUtilsModule = FuseUtilsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXRpbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsb0VBQXNFO0FBT3RFO0lBRUk7O09BRUc7SUFDSCx5QkFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFFdkQsQ0FBQztJQVBRLGVBQWU7UUFMM0IsSUFBQSxlQUFRLEVBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsZ0NBQWdCO2FBQ25CO1NBQ0osQ0FBQztpREFNeUMsZ0NBQWdCO09BTDlDLGVBQWUsQ0FRM0I7SUFBRCxzQkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLDBDQUFlIn0=