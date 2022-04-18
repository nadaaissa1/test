"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseAlertService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var FuseAlertService = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseAlertService() {
        this._onDismiss = new rxjs_1.ReplaySubject(1);
        this._onShow = new rxjs_1.ReplaySubject(1);
    }
    Object.defineProperty(FuseAlertService.prototype, "onDismiss", {
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Getter for onDismiss
         */
        get: function () {
            return this._onDismiss.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuseAlertService.prototype, "onShow", {
        /**
         * Getter for onShow
         */
        get: function () {
            return this._onShow.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Dismiss the alert
     *
     * @param name
     */
    FuseAlertService.prototype.dismiss = function (name) {
        // Return if the name is not provided
        if (!name) {
            return;
        }
        // Execute the observable
        this._onDismiss.next(name);
    };
    /**
     * Show the dismissed alert
     *
     * @param name
     */
    FuseAlertService.prototype.show = function (name) {
        // Return if the name is not provided
        if (!name) {
            return;
        }
        // Execute the observable
        this._onShow.next(name);
    };
    FuseAlertService = tslib_1.__decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseAlertService);
    return FuseAlertService;
}());
exports.FuseAlertService = FuseAlertService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUEyQztBQUMzQyw2QkFBaUQ7QUFLakQ7SUFLSTs7T0FFRztJQUNIO1FBTmlCLGVBQVUsR0FBMEIsSUFBSSxvQkFBYSxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLFlBQU8sR0FBMEIsSUFBSSxvQkFBYSxDQUFTLENBQUMsQ0FBQyxDQUFDO0lBTy9FLENBQUM7SUFTRCxzQkFBSSx1Q0FBUztRQVBiLHdHQUF3RztRQUN4RyxjQUFjO1FBQ2Qsd0dBQXdHO1FBRXhHOztXQUVHO2FBQ0g7WUFFSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSxvQ0FBTTtRQUhWOztXQUVHO2FBQ0g7WUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFFRCx3R0FBd0c7SUFDeEcsbUJBQW1CO0lBQ25CLHdHQUF3RztJQUV4Rzs7OztPQUlHO0lBQ0gsa0NBQU8sR0FBUCxVQUFRLElBQVk7UUFFaEIscUNBQXFDO1FBQ3JDLElBQUssQ0FBQyxJQUFJLEVBQ1Y7WUFDSSxPQUFPO1NBQ1Y7UUFFRCx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwrQkFBSSxHQUFKLFVBQUssSUFBWTtRQUViLHFDQUFxQztRQUNyQyxJQUFLLENBQUMsSUFBSSxFQUNWO1lBQ0ksT0FBTztTQUNWO1FBRUQseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFwRVEsZ0JBQWdCO1FBSDVCLElBQUEsaUJBQVUsRUFBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7O09BQ1csZ0JBQWdCLENBc0U1QjtJQUFELHVCQUFDO0NBQUEsQUF0RUQsSUFzRUM7QUF0RVksNENBQWdCIn0=