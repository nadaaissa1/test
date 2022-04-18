"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseDrawerService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var FuseDrawerService = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseDrawerService() {
        this._componentRegistry = new Map();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    FuseDrawerService.prototype.registerComponent = function (name, component) {
        this._componentRegistry.set(name, component);
    };
    /**
     * Deregister drawer component
     *
     * @param name
     */
    FuseDrawerService.prototype.deregisterComponent = function (name) {
        this._componentRegistry.delete(name);
    };
    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    FuseDrawerService.prototype.getComponent = function (name) {
        return this._componentRegistry.get(name);
    };
    FuseDrawerService = tslib_1.__decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseDrawerService);
    return FuseDrawerService;
}());
exports.FuseDrawerService = FuseDrawerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkcmF3ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQTJDO0FBTTNDO0lBSUk7O09BRUc7SUFDSDtRQUxRLHVCQUFrQixHQUFxQyxJQUFJLEdBQUcsRUFBK0IsQ0FBQztJQU90RyxDQUFDO0lBRUQsd0dBQXdHO0lBQ3hHLG1CQUFtQjtJQUNuQix3R0FBd0c7SUFFeEc7Ozs7O09BS0c7SUFDSCw2Q0FBaUIsR0FBakIsVUFBa0IsSUFBWSxFQUFFLFNBQThCO1FBRTFELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsK0NBQW1CLEdBQW5CLFVBQW9CLElBQVk7UUFFNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHdDQUFZLEdBQVosVUFBYSxJQUFZO1FBRXJCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBNUNRLGlCQUFpQjtRQUg3QixJQUFBLGlCQUFVLEVBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDOztPQUNXLGlCQUFpQixDQTZDN0I7SUFBRCx3QkFBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLDhDQUFpQiJ9