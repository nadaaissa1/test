"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseScrollResetDirective = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var FuseScrollResetDirective = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseScrollResetDirective(_elementRef, _router) {
        this._elementRef = _elementRef;
        this._router = _router;
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FuseScrollResetDirective.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to NavigationEnd event
        this._router.events.pipe((0, operators_1.filter)(function (event) { return event instanceof router_1.NavigationEnd; }), (0, operators_1.takeUntil)(this._unsubscribeAll)).subscribe(function () {
            // Reset the element's scroll position to the top
            _this._elementRef.nativeElement.scrollTop = 0;
        });
    };
    /**
     * On destroy
     */
    FuseScrollResetDirective.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    FuseScrollResetDirective = tslib_1.__decorate([
        (0, core_1.Directive)({
            selector: '[fuseScrollReset]',
            exportAs: 'fuseScrollReset'
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef,
            router_1.Router])
    ], FuseScrollResetDirective);
    return FuseScrollResetDirective;
}());
exports.FuseScrollResetDirective = FuseScrollResetDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXJlc2V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjcm9sbC1yZXNldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBd0Q7QUFDeEQsNkJBQStCO0FBQy9CLDRDQUFtRDtBQU1uRDtJQUlJOztPQUVHO0lBQ0gsa0NBQ1ksV0FBdUIsRUFDdkIsT0FBZTtRQURmLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFQbkIsb0JBQWUsR0FBaUIsSUFBSSxjQUFPLEVBQU8sQ0FBQztJQVUzRCxDQUFDO0lBRUQsd0dBQXdHO0lBQ3hHLG9CQUFvQjtJQUNwQix3R0FBd0c7SUFFeEc7O09BRUc7SUFDSCwyQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFURyxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNwQixJQUFBLGtCQUFNLEVBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLFlBQVksc0JBQWEsRUFBOUIsQ0FBOEIsQ0FBQyxFQUMvQyxJQUFBLHFCQUFTLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUNsQyxDQUFDLFNBQVMsQ0FBQztZQUVSLGlEQUFpRDtZQUNqRCxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHO0lBQ0gsOENBQVcsR0FBWDtRQUVJLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQTFDUSx3QkFBd0I7UUFKcEMsSUFBQSxnQkFBUyxFQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsaUJBQWlCO1NBQzlCLENBQUM7aURBUzJCLGlCQUFVO1lBQ2QsZUFBTTtPQVRsQix3QkFBd0IsQ0EyQ3BDO0lBQUQsK0JBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSw0REFBd0IifQ==