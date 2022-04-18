"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseConfigService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var lodash_es_1 = require("lodash-es");
var config_constants_1 = require("@fuse/services/config/config.constants");
var FuseConfigService = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseConfigService(config) {
        // Private
        this._config = new rxjs_1.BehaviorSubject(config);
    }
    Object.defineProperty(FuseConfigService.prototype, "config", {
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Setter & getter for config
         */
        set: function (value) {
            // Merge the new config over to the current config
            var config = (0, lodash_es_1.merge)({}, this._config.getValue(), value);
            // Execute the observable
            this._config.next(config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuseConfigService.prototype, "config$", {
        get: function () {
            return this._config.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Resets the config to the default
     */
    FuseConfigService.prototype.reset = function () {
        // Set the config
        this._config.next(this.config);
    };
    FuseConfigService = tslib_1.__decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        }),
        tslib_1.__param(0, (0, core_1.Inject)(config_constants_1.FUSE_APP_CONFIG)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], FuseConfigService);
    return FuseConfigService;
}());
exports.FuseConfigService = FuseConfigService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQW1EO0FBQ25ELDZCQUFtRDtBQUNuRCx1Q0FBa0M7QUFDbEMsMkVBQXlFO0FBS3pFO0lBSUk7O09BRUc7SUFDSCwyQkFBcUMsTUFBVztRQUU1QyxVQUFVO1FBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHNCQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQVNELHNCQUFJLHFDQUFNO1FBUFYsd0dBQXdHO1FBQ3hHLGNBQWM7UUFDZCx3R0FBd0c7UUFFeEc7O1dBRUc7YUFDSCxVQUFXLEtBQVU7WUFFakIsa0RBQWtEO1lBQ2xELElBQU0sTUFBTSxHQUFHLElBQUEsaUJBQUssRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUV6RCx5QkFBeUI7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzQ0FBTzthQUFYO1lBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBRUQsd0dBQXdHO0lBQ3hHLG1CQUFtQjtJQUNuQix3R0FBd0c7SUFFeEc7O09BRUc7SUFDSCxpQ0FBSyxHQUFMO1FBRUksaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBN0NRLGlCQUFpQjtRQUg3QixJQUFBLGlCQUFVLEVBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO1FBUWUsbUJBQUEsSUFBQSxhQUFNLEVBQUMsa0NBQWUsQ0FBQyxDQUFBOztPQVAzQixpQkFBaUIsQ0E4QzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSw4Q0FBaUIifQ==