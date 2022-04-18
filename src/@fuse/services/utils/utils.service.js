"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseUtilsService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var FuseUtilsService = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseUtilsService() {
    }
    Object.defineProperty(FuseUtilsService.prototype, "exactMatchOptions", {
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Get the equivalent "IsActiveMatchOptions" options for "exact = true".
         */
        get: function () {
            return {
                paths: 'exact',
                fragment: 'ignored',
                matrixParams: 'ignored',
                queryParams: 'exact'
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuseUtilsService.prototype, "subsetMatchOptions", {
        /**
         * Get the equivalent "IsActiveMatchOptions" options for "exact = false".
         */
        get: function () {
            return {
                paths: 'subset',
                fragment: 'ignored',
                matrixParams: 'ignored',
                queryParams: 'subset'
            };
        },
        enumerable: false,
        configurable: true
    });
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Generates a random id
     *
     * @param length
     */
    FuseUtilsService.prototype.randomId = function (length) {
        if (length === void 0) { length = 10; }
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var name = '';
        for (var i = 0; i < 10; i++) {
            name += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return name;
    };
    FuseUtilsService = tslib_1.__decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseUtilsService);
    return FuseUtilsService;
}());
exports.FuseUtilsService = FuseUtilsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUEyQztBQU0zQztJQUVJOztPQUVHO0lBQ0g7SUFFQSxDQUFDO0lBU0Qsc0JBQUksK0NBQWlCO1FBUHJCLHdHQUF3RztRQUN4RyxjQUFjO1FBQ2Qsd0dBQXdHO1FBRXhHOztXQUVHO2FBQ0g7WUFFSSxPQUFPO2dCQUNILEtBQUssRUFBUyxPQUFPO2dCQUNyQixRQUFRLEVBQU0sU0FBUztnQkFDdkIsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLFdBQVcsRUFBRyxPQUFPO2FBQ3hCLENBQUM7UUFDTixDQUFDOzs7T0FBQTtJQUtELHNCQUFJLGdEQUFrQjtRQUh0Qjs7V0FFRzthQUNIO1lBRUksT0FBTztnQkFDSCxLQUFLLEVBQVMsUUFBUTtnQkFDdEIsUUFBUSxFQUFNLFNBQVM7Z0JBQ3ZCLFlBQVksRUFBRSxTQUFTO2dCQUN2QixXQUFXLEVBQUcsUUFBUTthQUN6QixDQUFDO1FBQ04sQ0FBQzs7O09BQUE7SUFFRCx3R0FBd0c7SUFDeEcsbUJBQW1CO0lBQ25CLHdHQUF3RztJQUV4Rzs7OztPQUlHO0lBQ0gsbUNBQVEsR0FBUixVQUFTLE1BQW1CO1FBQW5CLHVCQUFBLEVBQUEsV0FBbUI7UUFFeEIsSUFBTSxLQUFLLEdBQUcsZ0VBQWdFLENBQUM7UUFDL0UsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWQsS0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFDNUI7WUFDSSxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsRTtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUEzRFEsZ0JBQWdCO1FBSDVCLElBQUEsaUJBQVUsRUFBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7O09BQ1csZ0JBQWdCLENBNEQ1QjtJQUFELHVCQUFDO0NBQUEsQUE1REQsSUE0REM7QUE1RFksNENBQWdCIn0=