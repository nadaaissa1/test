"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseHorizontalNavigationBranchItemComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var menu_1 = require("@angular/material/menu");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var navigation_service_1 = require("@fuse/components/navigation/navigation.service");
var FuseHorizontalNavigationBranchItemComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseHorizontalNavigationBranchItemComponent(_changeDetectorRef, _fuseNavigationService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._fuseNavigationService = _fuseNavigationService;
        /* eslint-enable @typescript-eslint/naming-convention */
        this.child = false;
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FuseHorizontalNavigationBranchItemComponent.prototype.ngOnInit = function () {
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
    FuseHorizontalNavigationBranchItemComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Trigger the change detection
     */
    FuseHorizontalNavigationBranchItemComponent.prototype.triggerChangeDetection = function () {
        // Mark for check
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    FuseHorizontalNavigationBranchItemComponent.prototype.trackByFn = function (index, item) {
        return item.id || index;
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseHorizontalNavigationBranchItemComponent.prototype, "child", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Object)
    ], FuseHorizontalNavigationBranchItemComponent.prototype, "item", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseHorizontalNavigationBranchItemComponent.prototype, "name", void 0);
    tslib_1.__decorate([
        (0, core_1.ViewChild)('matMenu', { static: true }),
        tslib_1.__metadata("design:type", menu_1.MatMenu)
    ], FuseHorizontalNavigationBranchItemComponent.prototype, "matMenu", void 0);
    FuseHorizontalNavigationBranchItemComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-horizontal-navigation-branch-item',
            templateUrl: './branch.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            navigation_service_1.FuseNavigationService])
    ], FuseHorizontalNavigationBranchItemComponent);
    return FuseHorizontalNavigationBranchItemComponent;
}());
exports.FuseHorizontalNavigationBranchItemComponent = FuseHorizontalNavigationBranchItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhbmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyYW5jaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUEySDtBQUUzSCwrQ0FBaUQ7QUFDakQsNkJBQStCO0FBQy9CLDRDQUEyQztBQUUzQyxxRkFBdUY7QUFRdkY7SUFjSTs7T0FFRztJQUNILHFEQUNZLGtCQUFxQyxFQUNyQyxzQkFBNkM7UUFEN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO1FBZnpELHdEQUF3RDtRQUUvQyxVQUFLLEdBQVksS0FBSyxDQUFDO1FBTXhCLG9CQUFlLEdBQWlCLElBQUksY0FBTyxFQUFPLENBQUM7SUFVM0QsQ0FBQztJQUVELHdHQUF3RztJQUN4RyxvQkFBb0I7SUFDcEIsd0dBQXdHO0lBRXhHOztPQUVHO0lBQ0gsOERBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWEcsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5Rix1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3BELElBQUEscUJBQVMsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQ2xDLENBQUMsU0FBUyxDQUFDO1lBRVIsaUJBQWlCO1lBQ2pCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNILGlFQUFXLEdBQVg7UUFFSSxxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCx3R0FBd0c7SUFDeEcsbUJBQW1CO0lBQ25CLHdHQUF3RztJQUV4Rzs7T0FFRztJQUNILDRFQUFzQixHQUF0QjtRQUVJLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsK0RBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxJQUFTO1FBRTlCLE9BQU8sSUFBSSxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQXhFUTtRQUFSLElBQUEsWUFBSyxHQUFFOzs4RUFBd0I7SUFDdkI7UUFBUixJQUFBLFlBQUssR0FBRTs7NkVBQTBCO0lBQ3pCO1FBQVIsSUFBQSxZQUFLLEdBQUU7OzZFQUFjO0lBQ2dCO1FBQXJDLElBQUEsZ0JBQVMsRUFBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7MENBQVUsY0FBTztnRkFBQztJQVQ5QywyQ0FBMkM7UUFMdkQsSUFBQSxnQkFBUyxFQUFDO1lBQ1AsUUFBUSxFQUFTLHdDQUF3QztZQUN6RCxXQUFXLEVBQU0seUJBQXlCO1lBQzFDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2xELENBQUM7aURBbUJrQyx3QkFBaUI7WUFDYiwwQ0FBcUI7T0FuQmhELDJDQUEyQyxDQStFdkQ7SUFBRCxrREFBQztDQUFBLEFBL0VELElBK0VDO0FBL0VZLGtHQUEyQyJ9