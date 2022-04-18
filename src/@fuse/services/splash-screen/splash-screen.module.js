"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseSplashScreenModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var splash_screen_service_1 = require("@fuse/services/splash-screen/splash-screen.service");
var FuseSplashScreenModule = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseSplashScreenModule(_fuseSplashScreenService) {
        this._fuseSplashScreenService = _fuseSplashScreenService;
    }
    FuseSplashScreenModule = tslib_1.__decorate([
        (0, core_1.NgModule)({
            providers: [
                splash_screen_service_1.FuseSplashScreenService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [splash_screen_service_1.FuseSplashScreenService])
    ], FuseSplashScreenModule);
    return FuseSplashScreenModule;
}());
exports.FuseSplashScreenModule = FuseSplashScreenModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsYXNoLXNjcmVlbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGxhc2gtc2NyZWVuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQXlDO0FBQ3pDLDRGQUE2RjtBQU83RjtJQUVJOztPQUVHO0lBQ0gsZ0NBQW9CLHdCQUFpRDtRQUFqRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO0lBRXJFLENBQUM7SUFQUSxzQkFBc0I7UUFMbEMsSUFBQSxlQUFRLEVBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsK0NBQXVCO2FBQzFCO1NBQ0osQ0FBQztpREFNZ0QsK0NBQXVCO09BTDVELHNCQUFzQixDQVFsQztJQUFELDZCQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksd0RBQXNCIn0=