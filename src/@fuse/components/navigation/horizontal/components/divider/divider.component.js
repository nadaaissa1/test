"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseHorizontalNavigationDividerItemComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var navigation_service_1 = require("@fuse/components/navigation/navigation.service");
var FuseHorizontalNavigationDividerItemComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseHorizontalNavigationDividerItemComponent(_changeDetectorRef, _fuseNavigationService) {
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
    FuseHorizontalNavigationDividerItemComponent.prototype.ngOnInit = function () {
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
    FuseHorizontalNavigationDividerItemComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Object)
    ], FuseHorizontalNavigationDividerItemComponent.prototype, "item", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseHorizontalNavigationDividerItemComponent.prototype, "name", void 0);
    FuseHorizontalNavigationDividerItemComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-horizontal-navigation-divider-item',
            templateUrl: './divider.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            navigation_service_1.FuseNavigationService])
    ], FuseHorizontalNavigationDividerItemComponent);
    return FuseHorizontalNavigationDividerItemComponent;
}());
exports.FuseHorizontalNavigationDividerItemComponent = FuseHorizontalNavigationDividerItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXZpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQWdIO0FBQ2hILDZCQUErQjtBQUMvQiw0Q0FBMkM7QUFFM0MscUZBQXVGO0FBUXZGO0lBUUk7O09BRUc7SUFDSCxzREFDWSxrQkFBcUMsRUFDckMsc0JBQTZDO1FBRDdDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF1QjtRQVBqRCxvQkFBZSxHQUFpQixJQUFJLGNBQU8sRUFBTyxDQUFDO0lBVTNELENBQUM7SUFFRCx3R0FBd0c7SUFDeEcsb0JBQW9CO0lBQ3BCLHdHQUF3RztJQUV4Rzs7T0FFRztJQUNILCtEQUFRLEdBQVI7UUFBQSxpQkFhQztRQVhHLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsa0NBQWtDLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFOUYsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNwRCxJQUFBLHFCQUFTLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUNsQyxDQUFDLFNBQVMsQ0FBQztZQUVSLGlCQUFpQjtZQUNqQixLQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxrRUFBVyxHQUFYO1FBRUkscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBOUNRO1FBQVIsSUFBQSxZQUFLLEdBQUU7OzhFQUEwQjtJQUN6QjtRQUFSLElBQUEsWUFBSyxHQUFFOzs4RUFBYztJQUhiLDRDQUE0QztRQUx4RCxJQUFBLGdCQUFTLEVBQUM7WUFDUCxRQUFRLEVBQVMseUNBQXlDO1lBQzFELFdBQVcsRUFBTSwwQkFBMEI7WUFDM0MsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDbEQsQ0FBQztpREFha0Msd0JBQWlCO1lBQ2IsMENBQXFCO09BYmhELDRDQUE0QyxDQWlEeEQ7SUFBRCxtREFBQztDQUFBLEFBakRELElBaURDO0FBakRZLG9HQUE0QyJ9