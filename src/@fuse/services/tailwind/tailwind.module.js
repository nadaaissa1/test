"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseTailwindConfigModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var tailwind_service_1 = require("@fuse/services/tailwind/tailwind.service");
var FuseTailwindConfigModule = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseTailwindConfigModule(_fuseTailwindConfigService) {
        this._fuseTailwindConfigService = _fuseTailwindConfigService;
    }
    FuseTailwindConfigModule = tslib_1.__decorate([
        (0, core_1.NgModule)({
            providers: [
                tailwind_service_1.FuseTailwindService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [tailwind_service_1.FuseTailwindService])
    ], FuseTailwindConfigModule);
    return FuseTailwindConfigModule;
}());
exports.FuseTailwindConfigModule = FuseTailwindConfigModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFpbHdpbmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsNkVBQStFO0FBTy9FO0lBRUk7O09BRUc7SUFDSCxrQ0FBb0IsMEJBQStDO1FBQS9DLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBcUI7SUFFbkUsQ0FBQztJQVBRLHdCQUF3QjtRQUxwQyxJQUFBLGVBQVEsRUFBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCxzQ0FBbUI7YUFDdEI7U0FDSixDQUFDO2lEQU1rRCxzQ0FBbUI7T0FMMUQsd0JBQXdCLENBUXBDO0lBQUQsK0JBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSw0REFBd0IifQ==