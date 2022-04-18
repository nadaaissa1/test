"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseVerticalNavigationGroupItemComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var navigation_service_1 = require("@fuse/components/navigation/navigation.service");
var FuseVerticalNavigationGroupItemComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseVerticalNavigationGroupItemComponent(_changeDetectorRef, _fuseNavigationService) {
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
    FuseVerticalNavigationGroupItemComponent.prototype.ngOnInit = function () {
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
    FuseVerticalNavigationGroupItemComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    FuseVerticalNavigationGroupItemComponent.prototype.trackByFn = function (index, item) {
        return item.id || index;
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseVerticalNavigationGroupItemComponent.prototype, "autoCollapse", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Object)
    ], FuseVerticalNavigationGroupItemComponent.prototype, "item", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseVerticalNavigationGroupItemComponent.prototype, "name", void 0);
    FuseVerticalNavigationGroupItemComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-vertical-navigation-group-item',
            templateUrl: './group.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            navigation_service_1.FuseNavigationService])
    ], FuseVerticalNavigationGroupItemComponent);
    return FuseVerticalNavigationGroupItemComponent;
}());
exports.FuseVerticalNavigationGroupItemComponent = FuseVerticalNavigationGroupItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQ0FBZ0g7QUFFaEgsNkJBQStCO0FBQy9CLDRDQUEyQztBQUUzQyxxRkFBdUY7QUFRdkY7SUFhSTs7T0FFRztJQUNILGtEQUNZLGtCQUFxQyxFQUNyQyxzQkFBNkM7UUFEN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO1FBUGpELG9CQUFlLEdBQWlCLElBQUksY0FBTyxFQUFPLENBQUM7SUFVM0QsQ0FBQztJQUVELHdHQUF3RztJQUN4RyxvQkFBb0I7SUFDcEIsd0dBQXdHO0lBRXhHOztPQUVHO0lBQ0gsMkRBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWEcsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1Rix1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ2xELElBQUEscUJBQVMsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQ2xDLENBQUMsU0FBUyxDQUFDO1lBRVIsaUJBQWlCO1lBQ2pCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNILDhEQUFXLEdBQVg7UUFFSSxxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCx3R0FBd0c7SUFDeEcsbUJBQW1CO0lBQ25CLHdHQUF3RztJQUV4Rzs7Ozs7T0FLRztJQUNILDREQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsSUFBUztRQUU5QixPQUFPLElBQUksQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDO0lBQzVCLENBQUM7SUE5RFE7UUFBUixJQUFBLFlBQUssR0FBRTs7a0ZBQXVCO0lBQ3RCO1FBQVIsSUFBQSxZQUFLLEdBQUU7OzBFQUEwQjtJQUN6QjtRQUFSLElBQUEsWUFBSyxHQUFFOzswRUFBYztJQVJiLHdDQUF3QztRQUxwRCxJQUFBLGdCQUFTLEVBQUM7WUFDUCxRQUFRLEVBQVMscUNBQXFDO1lBQ3RELFdBQVcsRUFBTSx3QkFBd0I7WUFDekMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDbEQsQ0FBQztpREFrQmtDLHdCQUFpQjtZQUNiLDBDQUFxQjtPQWxCaEQsd0NBQXdDLENBcUVwRDtJQUFELCtDQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksNEZBQXdDIn0=