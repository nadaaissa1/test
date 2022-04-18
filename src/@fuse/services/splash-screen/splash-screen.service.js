"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseSplashScreenService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var FuseSplashScreenService = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseSplashScreenService(_document, _router) {
        var _this = this;
        this._document = _document;
        this._router = _router;
        // Hide it on the first NavigationEnd event
        this._router.events
            .pipe((0, operators_1.filter)(function (event) { return event instanceof router_1.NavigationEnd; }), (0, operators_1.take)(1))
            .subscribe(function () {
            _this.hide();
        });
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Show the splash screen
     */
    FuseSplashScreenService.prototype.show = function () {
        this._document.body.classList.remove('fuse-splash-screen-hidden');
    };
    /**
     * Hide the splash screen
     */
    FuseSplashScreenService.prototype.hide = function () {
        this._document.body.classList.add('fuse-splash-screen-hidden');
    };
    FuseSplashScreenService = tslib_1.__decorate([
        (0, core_1.Injectable)(),
        tslib_1.__param(0, (0, core_1.Inject)(common_1.DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [Object, router_1.Router])
    ], FuseSplashScreenService);
    return FuseSplashScreenService;
}());
exports.FuseSplashScreenService = FuseSplashScreenService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsYXNoLXNjcmVlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BsYXNoLXNjcmVlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQ0FBbUQ7QUFDbkQsMENBQTJDO0FBQzNDLDBDQUF3RDtBQUN4RCw0Q0FBOEM7QUFHOUM7SUFFSTs7T0FFRztJQUNILGlDQUM4QixTQUFjLEVBQ2hDLE9BQWU7UUFGM0IsaUJBY0M7UUFiNkIsY0FBUyxHQUFULFNBQVMsQ0FBSztRQUNoQyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBR3ZCLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07YUFDZCxJQUFJLENBQ0QsSUFBQSxrQkFBTSxFQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxZQUFZLHNCQUFhLEVBQTlCLENBQThCLENBQUMsRUFDL0MsSUFBQSxnQkFBSSxFQUFDLENBQUMsQ0FBQyxDQUNWO2FBQ0EsU0FBUyxDQUFDO1lBQ1AsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHdHQUF3RztJQUN4RyxtQkFBbUI7SUFDbkIsd0dBQXdHO0lBRXhHOztPQUVHO0lBQ0gsc0NBQUksR0FBSjtRQUVJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQ0FBSSxHQUFKO1FBRUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUF2Q1EsdUJBQXVCO1FBRG5DLElBQUEsaUJBQVUsR0FBRTtRQU9KLG1CQUFBLElBQUEsYUFBTSxFQUFDLGlCQUFRLENBQUMsQ0FBQTt5REFDQSxlQUFNO09BUGxCLHVCQUF1QixDQXdDbkM7SUFBRCw4QkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLDBEQUF1QiJ9