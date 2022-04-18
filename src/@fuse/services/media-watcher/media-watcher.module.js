"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseMediaWatcherModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var media_watcher_service_1 = require("@fuse/services/media-watcher/media-watcher.service");
var FuseMediaWatcherModule = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseMediaWatcherModule(_fuseMediaWatcherService) {
        this._fuseMediaWatcherService = _fuseMediaWatcherService;
    }
    FuseMediaWatcherModule = tslib_1.__decorate([
        (0, core_1.NgModule)({
            providers: [
                media_watcher_service_1.FuseMediaWatcherService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [media_watcher_service_1.FuseMediaWatcherService])
    ], FuseMediaWatcherModule);
    return FuseMediaWatcherModule;
}());
exports.FuseMediaWatcherModule = FuseMediaWatcherModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtd2F0Y2hlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZWRpYS13YXRjaGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQXlDO0FBQ3pDLDRGQUE2RjtBQU83RjtJQUVJOztPQUVHO0lBQ0gsZ0NBQW9CLHdCQUFpRDtRQUFqRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO0lBRXJFLENBQUM7SUFQUSxzQkFBc0I7UUFMbEMsSUFBQSxlQUFRLEVBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsK0NBQXVCO2FBQzFCO1NBQ0osQ0FBQztpREFNZ0QsK0NBQXVCO09BTDVELHNCQUFzQixDQVFsQztJQUFELDZCQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksd0RBQXNCIn0=