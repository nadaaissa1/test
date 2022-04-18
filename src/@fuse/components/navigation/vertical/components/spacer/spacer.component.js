"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseVerticalNavigationSpacerItemComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var navigation_service_1 = require("@fuse/components/navigation/navigation.service");
var FuseVerticalNavigationSpacerItemComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseVerticalNavigationSpacerItemComponent(_changeDetectorRef, _fuseNavigationService) {
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
    FuseVerticalNavigationSpacerItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the parent navigation component
        this._fuseVerticalNavigationComponent = this._fuseNavigationService.getComponent(this.name);
        // Subscribe to onRefreshed on the navigation component
        this._fuseVerticalNavigationComponent.onRefreshed.pipe((0, operators_1.takeUntil)(this._unsubscribeAll)).subscribe(function () {
            // Mark for check
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * On destroy
     */
    FuseVerticalNavigationSpacerItemComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Object)
    ], FuseVerticalNavigationSpacerItemComponent.prototype, "item", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseVerticalNavigationSpacerItemComponent.prototype, "name", void 0);
    FuseVerticalNavigationSpacerItemComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-vertical-navigation-spacer-item',
            templateUrl: './spacer.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            navigation_service_1.FuseNavigationService])
    ], FuseVerticalNavigationSpacerItemComponent);
    return FuseVerticalNavigationSpacerItemComponent;
}());
exports.FuseVerticalNavigationSpacerItemComponent = FuseVerticalNavigationSpacerItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwYWNlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUFnSDtBQUNoSCw0Q0FBMkM7QUFDM0MsNkJBQStCO0FBRS9CLHFGQUF1RjtBQVF2RjtJQVFJOztPQUVHO0lBQ0gsbURBQ1ksa0JBQXFDLEVBQ3JDLHNCQUE2QztRQUQ3Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7UUFQakQsb0JBQWUsR0FBaUIsSUFBSSxjQUFPLEVBQU8sQ0FBQztJQVUzRCxDQUFDO0lBRUQsd0dBQXdHO0lBQ3hHLG9CQUFvQjtJQUNwQix3R0FBd0c7SUFFeEc7O09BRUc7SUFDSCw0REFBUSxHQUFSO1FBQUEsaUJBYUM7UUFYRyxzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVGLHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsZ0NBQWdDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbEQsSUFBQSxxQkFBUyxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FDbEMsQ0FBQyxTQUFTLENBQUM7WUFFUixpQkFBaUI7WUFDakIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0RBQVcsR0FBWDtRQUVJLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQTlDUTtRQUFSLElBQUEsWUFBSyxHQUFFOzsyRUFBMEI7SUFDekI7UUFBUixJQUFBLFlBQUssR0FBRTs7MkVBQWM7SUFIYix5Q0FBeUM7UUFMckQsSUFBQSxnQkFBUyxFQUFDO1lBQ1AsUUFBUSxFQUFTLHNDQUFzQztZQUN2RCxXQUFXLEVBQU0seUJBQXlCO1lBQzFDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2xELENBQUM7aURBYWtDLHdCQUFpQjtZQUNiLDBDQUFxQjtPQWJoRCx5Q0FBeUMsQ0FpRHJEO0lBQUQsZ0RBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSw4RkFBeUMifQ==