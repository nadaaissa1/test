"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseVerticalNavigationBasicItemComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var navigation_service_1 = require("@fuse/components/navigation/navigation.service");
var utils_service_1 = require("@fuse/services/utils/utils.service");
var FuseVerticalNavigationBasicItemComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseVerticalNavigationBasicItemComponent(_changeDetectorRef, _fuseNavigationService, _fuseUtilsService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._fuseNavigationService = _fuseNavigationService;
        this._fuseUtilsService = _fuseUtilsService;
        this._unsubscribeAll = new rxjs_1.Subject();
        // Set the equivalent of {exact: false} as default for active match options.
        // We are not assigning the item.isActiveMatchOptions directly to the
        // [routerLinkActiveOptions] because if it's "undefined" initially, the router
        // will throw an error and stop working.
        this.isActiveMatchOptions = this._fuseUtilsService.subsetMatchOptions;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FuseVerticalNavigationBasicItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a;
        // Set the "isActiveMatchOptions" either from item's
        // "isActiveMatchOptions" or the equivalent form of
        // item's "exactMatch" option
        this.isActiveMatchOptions =
            ((_a = this.item.isActiveMatchOptions) !== null && _a !== void 0 ? _a : this.item.exactMatch)
                ? this._fuseUtilsService.exactMatchOptions
                : this._fuseUtilsService.subsetMatchOptions;
        // Get the parent navigation component
        this._fuseVerticalNavigationComponent = this._fuseNavigationService.getComponent(this.name);
        // Mark for check
        this._changeDetectorRef.markForCheck();
        // Subscribe to onRefreshed on the navigation component
        this._fuseVerticalNavigationComponent.onRefreshed.pipe((0, operators_1.takeUntil)(this._unsubscribeAll)).subscribe(function () {
            // Mark for check
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * On destroy
     */
    FuseVerticalNavigationBasicItemComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Object)
    ], FuseVerticalNavigationBasicItemComponent.prototype, "item", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseVerticalNavigationBasicItemComponent.prototype, "name", void 0);
    FuseVerticalNavigationBasicItemComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-vertical-navigation-basic-item',
            templateUrl: './basic.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            navigation_service_1.FuseNavigationService,
            utils_service_1.FuseUtilsService])
    ], FuseVerticalNavigationBasicItemComponent);
    return FuseVerticalNavigationBasicItemComponent;
}());
exports.FuseVerticalNavigationBasicItemComponent = FuseVerticalNavigationBasicItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFzaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQ0FBZ0g7QUFFaEgsNkJBQStCO0FBQy9CLDRDQUEyQztBQUUzQyxxRkFBdUY7QUFFdkYsb0VBQXNFO0FBT3RFO0lBU0k7O09BRUc7SUFDSCxrREFDWSxrQkFBcUMsRUFDckMsc0JBQTZDLEVBQzdDLGlCQUFtQztRQUZuQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7UUFDN0Msc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVJ2QyxvQkFBZSxHQUFpQixJQUFJLGNBQU8sRUFBTyxDQUFDO1FBV3ZELDRFQUE0RTtRQUM1RSxxRUFBcUU7UUFDckUsOEVBQThFO1FBQzlFLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDO0lBQzFFLENBQUM7SUFFRCx3R0FBd0c7SUFDeEcsb0JBQW9CO0lBQ3BCLHdHQUF3RztJQUV4Rzs7T0FFRztJQUNILDJEQUFRLEdBQVI7UUFBQSxpQkF3QkM7O1FBdEJHLG9EQUFvRDtRQUNwRCxtREFBbUQ7UUFDbkQsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0I7WUFDckIsQ0FBQSxNQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLG1DQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtnQkFDbEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUI7Z0JBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUM7UUFFcEQsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1RixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXZDLHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsZ0NBQWdDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbEQsSUFBQSxxQkFBUyxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FDbEMsQ0FBQyxTQUFTLENBQUM7WUFFUixpQkFBaUI7WUFDakIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHO0lBQ0gsOERBQVcsR0FBWDtRQUVJLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQWhFUTtRQUFSLElBQUEsWUFBSyxHQUFFOzswRUFBMEI7SUFDekI7UUFBUixJQUFBLFlBQUssR0FBRTs7MEVBQWM7SUFIYix3Q0FBd0M7UUFMcEQsSUFBQSxnQkFBUyxFQUFDO1lBQ1AsUUFBUSxFQUFTLHFDQUFxQztZQUN0RCxXQUFXLEVBQU0sd0JBQXdCO1lBQ3pDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2xELENBQUM7aURBY2tDLHdCQUFpQjtZQUNiLDBDQUFxQjtZQUMxQixnQ0FBZ0I7T0FmdEMsd0NBQXdDLENBbUVwRDtJQUFELCtDQUFDO0NBQUEsQUFuRUQsSUFtRUM7QUFuRVksNEZBQXdDIn0=