"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseHorizontalNavigationSpacerItemComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var navigation_service_1 = require("@fuse/components/navigation/navigation.service");
var FuseHorizontalNavigationSpacerItemComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseHorizontalNavigationSpacerItemComponent(_changeDetectorRef, _fuseNavigationService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._fuseNavigationService = _fuseNavigationService;
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FuseHorizontalNavigationSpacerItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the parent navigation component
        this._fuseHorizontalNavigationComponent = this._fuseNavigationService.getComponent(this.name);
        // Subscribe to onRefreshed on the navigation component
        this._fuseHorizontalNavigationComponent.onRefreshed.pipe((0, operators_1.takeUntil)(this._unsubscribeAll)).subscribe(function () {
            // Mark for check
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * On destroy
     */
    FuseHorizontalNavigationSpacerItemComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Object)
    ], FuseHorizontalNavigationSpacerItemComponent.prototype, "item", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseHorizontalNavigationSpacerItemComponent.prototype, "name", void 0);
    FuseHorizontalNavigationSpacerItemComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-horizontal-navigation-spacer-item',
            templateUrl: './spacer.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            navigation_service_1.FuseNavigationService])
    ], FuseHorizontalNavigationSpacerItemComponent);
    return FuseHorizontalNavigationSpacerItemComponent;
}());
exports.FuseHorizontalNavigationSpacerItemComponent = FuseHorizontalNavigationSpacerItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwYWNlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUFnSDtBQUNoSCw0Q0FBMkM7QUFDM0MsNkJBQStCO0FBRS9CLHFGQUF1RjtBQVF2RjtJQVFJOztPQUVHO0lBQ0gscURBQ1ksa0JBQXFDLEVBQ3JDLHNCQUE2QztRQUQ3Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7UUFQakQsb0JBQWUsR0FBaUIsSUFBSSxjQUFPLEVBQU8sQ0FBQztJQVUzRCxDQUFDO0lBRUQsd0dBQXdHO0lBQ3hHLG9CQUFvQjtJQUNwQix3R0FBd0c7SUFFeEc7O09BRUc7SUFDSCw4REFBUSxHQUFSO1FBQUEsaUJBYUM7UUFYRyxzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlGLHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsa0NBQWtDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDcEQsSUFBQSxxQkFBUyxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FDbEMsQ0FBQyxTQUFTLENBQUM7WUFFUixpQkFBaUI7WUFDakIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUVBQVcsR0FBWDtRQUVJLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQTlDUTtRQUFSLElBQUEsWUFBSyxHQUFFOzs2RUFBMEI7SUFDekI7UUFBUixJQUFBLFlBQUssR0FBRTs7NkVBQWM7SUFIYiwyQ0FBMkM7UUFMdkQsSUFBQSxnQkFBUyxFQUFDO1lBQ1AsUUFBUSxFQUFTLHdDQUF3QztZQUN6RCxXQUFXLEVBQU0seUJBQXlCO1lBQzFDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2xELENBQUM7aURBYWtDLHdCQUFpQjtZQUNiLDBDQUFxQjtPQWJoRCwyQ0FBMkMsQ0FpRHZEO0lBQUQsa0RBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSxrR0FBMkMifQ==