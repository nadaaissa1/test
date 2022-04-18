"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseHorizontalNavigationComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var animations_1 = require("@fuse/animations");
var navigation_service_1 = require("@fuse/components/navigation/navigation.service");
var utils_service_1 = require("@fuse/services/utils/utils.service");
var FuseHorizontalNavigationComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseHorizontalNavigationComponent(_changeDetectorRef, _fuseNavigationService, _fuseUtilsService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._fuseNavigationService = _fuseNavigationService;
        this._fuseUtilsService = _fuseUtilsService;
        this.name = this._fuseUtilsService.randomId();
        this.onRefreshed = new rxjs_1.ReplaySubject(1);
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On changes
     *
     * @param changes
     */
    FuseHorizontalNavigationComponent.prototype.ngOnChanges = function (changes) {
        // Navigation
        if ('navigation' in changes) {
            // Mark for check
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * On init
     */
    FuseHorizontalNavigationComponent.prototype.ngOnInit = function () {
        // Make sure the name input is not an empty string
        if (this.name === '') {
            this.name = this._fuseUtilsService.randomId();
        }
        // Register the navigation component
        this._fuseNavigationService.registerComponent(this.name, this);
    };
    /**
     * On destroy
     */
    FuseHorizontalNavigationComponent.prototype.ngOnDestroy = function () {
        // Deregister the navigation component from the registry
        this._fuseNavigationService.deregisterComponent(this.name);
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Refresh the component to apply the changes
     */
    FuseHorizontalNavigationComponent.prototype.refresh = function () {
        // Mark for check
        this._changeDetectorRef.markForCheck();
        // Execute the observable
        this.onRefreshed.next(true);
    };
    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    FuseHorizontalNavigationComponent.prototype.trackByFn = function (index, item) {
        return item.id || index;
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseHorizontalNavigationComponent.prototype, "name", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Array)
    ], FuseHorizontalNavigationComponent.prototype, "navigation", void 0);
    FuseHorizontalNavigationComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-horizontal-navigation',
            templateUrl: './horizontal.component.html',
            styleUrls: ['./horizontal.component.scss'],
            animations: animations_1.fuseAnimations,
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            exportAs: 'fuseHorizontalNavigation'
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            navigation_service_1.FuseNavigationService,
            utils_service_1.FuseUtilsService])
    ], FuseHorizontalNavigationComponent);
    return FuseHorizontalNavigationComponent;
}());
exports.FuseHorizontalNavigationComponent = FuseHorizontalNavigationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9yaXpvbnRhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob3Jpem9udGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQTZKO0FBQzdKLDZCQUE4QztBQUM5QywrQ0FBa0Q7QUFFbEQscUZBQXVGO0FBQ3ZGLG9FQUFzRTtBQVd0RTtJQVFJOztPQUVHO0lBQ0gsMkNBQ1ksa0JBQXFDLEVBQ3JDLHNCQUE2QyxFQUM3QyxpQkFBbUM7UUFGbkMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO1FBQzdDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFadEMsU0FBSSxHQUFXLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUcxRCxnQkFBVyxHQUEyQixJQUFJLG9CQUFhLENBQVUsQ0FBQyxDQUFDLENBQUM7UUFDNUQsb0JBQWUsR0FBaUIsSUFBSSxjQUFPLEVBQU8sQ0FBQztJQVczRCxDQUFDO0lBRUQsd0dBQXdHO0lBQ3hHLG9CQUFvQjtJQUNwQix3R0FBd0c7SUFFeEc7Ozs7T0FJRztJQUNILHVEQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUU5QixhQUFhO1FBQ2IsSUFBSyxZQUFZLElBQUksT0FBTyxFQUM1QjtZQUNJLGlCQUFpQjtZQUNqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDMUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxvREFBUSxHQUFSO1FBRUksa0RBQWtEO1FBQ2xELElBQUssSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQ3JCO1lBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakQ7UUFFRCxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsdURBQVcsR0FBWDtRQUVJLHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNELHFDQUFxQztRQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELHdHQUF3RztJQUN4RyxtQkFBbUI7SUFDbkIsd0dBQXdHO0lBRXhHOztPQUVHO0lBQ0gsbURBQU8sR0FBUDtRQUVJLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdkMseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHFEQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsSUFBUztRQUU5QixPQUFPLElBQUksQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDO0lBQzVCLENBQUM7SUF6RlE7UUFBUixJQUFBLFlBQUssR0FBRTs7bUVBQWtEO0lBQ2pEO1FBQVIsSUFBQSxZQUFLLEdBQUU7O3lFQUFrQztJQUhqQyxpQ0FBaUM7UUFUN0MsSUFBQSxnQkFBUyxFQUFDO1lBQ1AsUUFBUSxFQUFTLDRCQUE0QjtZQUM3QyxXQUFXLEVBQU0sNkJBQTZCO1lBQzlDLFNBQVMsRUFBUSxDQUFDLDZCQUE2QixDQUFDO1lBQ2hELFVBQVUsRUFBTywyQkFBYztZQUMvQixhQUFhLEVBQUksd0JBQWlCLENBQUMsSUFBSTtZQUN2QyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtZQUMvQyxRQUFRLEVBQVMsMEJBQTBCO1NBQzlDLENBQUM7aURBYWtDLHdCQUFpQjtZQUNiLDBDQUFxQjtZQUMxQixnQ0FBZ0I7T0FkdEMsaUNBQWlDLENBNEY3QztJQUFELHdDQUFDO0NBQUEsQUE1RkQsSUE0RkM7QUE1RlksOEVBQWlDIn0=