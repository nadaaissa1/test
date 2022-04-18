"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseConfigModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var config_service_1 = require("@fuse/services/config/config.service");
var config_constants_1 = require("@fuse/services/config/config.constants");
var FuseConfigModule = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseConfigModule(_fuseConfigService) {
        this._fuseConfigService = _fuseConfigService;
    }
    FuseConfigModule_1 = FuseConfigModule;
    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    FuseConfigModule.forRoot = function (config) {
        return {
            ngModule: FuseConfigModule_1,
            providers: [
                {
                    provide: config_constants_1.FUSE_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    };
    var FuseConfigModule_1;
    FuseConfigModule = FuseConfigModule_1 = tslib_1.__decorate([
        (0, core_1.NgModule)(),
        tslib_1.__metadata("design:paramtypes", [config_service_1.FuseConfigService])
    ], FuseConfigModule);
    return FuseConfigModule;
}());
exports.FuseConfigModule = FuseConfigModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUE4RDtBQUM5RCx1RUFBeUU7QUFDekUsMkVBQXlFO0FBR3pFO0lBRUk7O09BRUc7SUFDSCwwQkFBb0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFFekQsQ0FBQzt5QkFQUSxnQkFBZ0I7SUFTekI7Ozs7T0FJRztJQUNJLHdCQUFPLEdBQWQsVUFBZSxNQUFXO1FBRXRCLE9BQU87WUFDSCxRQUFRLEVBQUcsa0JBQWdCO1lBQzNCLFNBQVMsRUFBRTtnQkFDUDtvQkFDSSxPQUFPLEVBQUcsa0NBQWU7b0JBQ3pCLFFBQVEsRUFBRSxNQUFNO2lCQUNuQjthQUNKO1NBQ0osQ0FBQztJQUNOLENBQUM7O0lBekJRLGdCQUFnQjtRQUQ1QixJQUFBLGVBQVEsR0FBRTtpREFNaUMsa0NBQWlCO09BTGhELGdCQUFnQixDQTBCNUI7SUFBRCx1QkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLDRDQUFnQiJ9