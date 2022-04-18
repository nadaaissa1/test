"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseVerticalNavigationCollapsableItemComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var animations_1 = require("@fuse/animations");
var navigation_service_1 = require("@fuse/components/navigation/navigation.service");
var FuseVerticalNavigationCollapsableItemComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseVerticalNavigationCollapsableItemComponent(_changeDetectorRef, _router, _fuseNavigationService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._router = _router;
        this._fuseNavigationService = _fuseNavigationService;
        this.isCollapsed = true;
        this.isExpanded = false;
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    Object.defineProperty(FuseVerticalNavigationCollapsableItemComponent.prototype, "classList", {
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Host binding for component classes
         */
        get: function () {
            return {
                'fuse-vertical-navigation-item-collapsed': this.isCollapsed,
                'fuse-vertical-navigation-item-expanded': this.isExpanded
            };
        },
        enumerable: false,
        configurable: true
    });
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FuseVerticalNavigationCollapsableItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the parent navigation component
        this._fuseVerticalNavigationComponent = this._fuseNavigationService.getComponent(this.name);
        // If the item has a children that has a matching url with the current url, expand...
        if (this._hasActiveChild(this.item, this._router.url)) {
            this.expand();
        }
        // Otherwise...
        else {
            // If the autoCollapse is on, collapse...
            if (this.autoCollapse) {
                this.collapse();
            }
        }
        // Listen for the onCollapsableItemCollapsed from the service
        this._fuseVerticalNavigationComponent.onCollapsableItemCollapsed
            .pipe((0, operators_1.takeUntil)(this._unsubscribeAll))
            .subscribe(function (collapsedItem) {
            // Check if the collapsed item is null
            if (collapsedItem === null) {
                return;
            }
            // Collapse if this is a children of the collapsed item
            if (_this._isChildrenOf(collapsedItem, _this.item)) {
                _this.collapse();
            }
        });
        // Listen for the onCollapsableItemExpanded from the service if the autoCollapse is on
        if (this.autoCollapse) {
            this._fuseVerticalNavigationComponent.onCollapsableItemExpanded
                .pipe((0, operators_1.takeUntil)(this._unsubscribeAll))
                .subscribe(function (expandedItem) {
                // Check if the expanded item is null
                if (expandedItem === null) {
                    return;
                }
                // Check if this is a parent of the expanded item
                if (_this._isChildrenOf(_this.item, expandedItem)) {
                    return;
                }
                // Check if this has a children with a matching url with the current active url
                if (_this._hasActiveChild(_this.item, _this._router.url)) {
                    return;
                }
                // Check if this is the expanded item
                if (_this.item === expandedItem) {
                    return;
                }
                // If none of the above conditions are matched, collapse this item
                _this.collapse();
            });
        }
        // Attach a listener to the NavigationEnd event
        this._router.events
            .pipe((0, operators_1.filter)(function (event) { return event instanceof router_1.NavigationEnd; }), (0, operators_1.takeUntil)(this._unsubscribeAll))
            .subscribe(function (event) {
            // If the item has a children that has a matching url with the current url, expand...
            if (_this._hasActiveChild(_this.item, event.urlAfterRedirects)) {
                _this.expand();
            }
            // Otherwise...
            else {
                // If the autoCollapse is on, collapse...
                if (_this.autoCollapse) {
                    _this.collapse();
                }
            }
        });
        // Subscribe to onRefreshed on the navigation component
        this._fuseVerticalNavigationComponent.onRefreshed.pipe((0, operators_1.takeUntil)(this._unsubscribeAll)).subscribe(function () {
            // Mark for check
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * On destroy
     */
    FuseVerticalNavigationCollapsableItemComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Collapse
     */
    FuseVerticalNavigationCollapsableItemComponent.prototype.collapse = function () {
        // Return if the item is disabled
        if (this.item.disabled) {
            return;
        }
        // Return if the item is already collapsed
        if (this.isCollapsed) {
            return;
        }
        // Collapse it
        this.isCollapsed = true;
        this.isExpanded = !this.isCollapsed;
        // Mark for check
        this._changeDetectorRef.markForCheck();
        // Execute the observable
        this._fuseVerticalNavigationComponent.onCollapsableItemCollapsed.next(this.item);
    };
    /**
     * Expand
     */
    FuseVerticalNavigationCollapsableItemComponent.prototype.expand = function () {
        // Return if the item is disabled
        if (this.item.disabled) {
            return;
        }
        // Return if the item is already expanded
        if (!this.isCollapsed) {
            return;
        }
        // Expand it
        this.isCollapsed = false;
        this.isExpanded = !this.isCollapsed;
        // Mark for check
        this._changeDetectorRef.markForCheck();
        // Execute the observable
        this._fuseVerticalNavigationComponent.onCollapsableItemExpanded.next(this.item);
    };
    /**
     * Toggle collapsable
     */
    FuseVerticalNavigationCollapsableItemComponent.prototype.toggleCollapsable = function () {
        // Toggle collapse/expand
        if (this.isCollapsed) {
            this.expand();
        }
        else {
            this.collapse();
        }
    };
    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    FuseVerticalNavigationCollapsableItemComponent.prototype.trackByFn = function (index, item) {
        return item.id || index;
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Check if the given item has the given url
     * in one of its children
     *
     * @param item
     * @param currentUrl
     * @private
     */
    FuseVerticalNavigationCollapsableItemComponent.prototype._hasActiveChild = function (item, currentUrl) {
        var e_1, _a;
        var children = item.children;
        if (!children) {
            return false;
        }
        try {
            for (var children_1 = tslib_1.__values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var child = children_1_1.value;
                if (child.children) {
                    if (this._hasActiveChild(child, currentUrl)) {
                        return true;
                    }
                }
                // Check if the child has a link and is active
                if (child.link && this._router.isActive(child.link, child.exactMatch || false)) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    /**
     * Check if this is a children
     * of the given item
     *
     * @param parent
     * @param item
     * @private
     */
    FuseVerticalNavigationCollapsableItemComponent.prototype._isChildrenOf = function (parent, item) {
        var e_2, _a;
        var children = parent.children;
        if (!children) {
            return false;
        }
        if (children.indexOf(item) > -1) {
            return true;
        }
        try {
            for (var children_2 = tslib_1.__values(children), children_2_1 = children_2.next(); !children_2_1.done; children_2_1 = children_2.next()) {
                var child = children_2_1.value;
                if (child.children) {
                    if (this._isChildrenOf(child, item)) {
                        return true;
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (children_2_1 && !children_2_1.done && (_a = children_2.return)) _a.call(children_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return false;
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseVerticalNavigationCollapsableItemComponent.prototype, "autoCollapse", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Object)
    ], FuseVerticalNavigationCollapsableItemComponent.prototype, "item", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseVerticalNavigationCollapsableItemComponent.prototype, "name", void 0);
    tslib_1.__decorate([
        (0, core_1.HostBinding)('class'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseVerticalNavigationCollapsableItemComponent.prototype, "classList", null);
    FuseVerticalNavigationCollapsableItemComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-vertical-navigation-collapsable-item',
            templateUrl: './collapsable.component.html',
            animations: animations_1.fuseAnimations,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            router_1.Router,
            navigation_service_1.FuseNavigationService])
    ], FuseVerticalNavigationCollapsableItemComponent);
    return FuseVerticalNavigationCollapsableItemComponent;
}());
exports.FuseVerticalNavigationCollapsableItemComponent = FuseVerticalNavigationCollapsableItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2FibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29sbGFwc2FibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQ0FBNkg7QUFDN0gsMENBQXdEO0FBRXhELDZCQUErQjtBQUMvQiw0Q0FBbUQ7QUFDbkQsK0NBQWtEO0FBRWxELHFGQUF1RjtBQVN2RjtJQWVJOztPQUVHO0lBQ0gsd0RBQ1ksa0JBQXFDLEVBQ3JDLE9BQWUsRUFDZixzQkFBNkM7UUFGN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF1QjtRQVh6RCxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRXBCLG9CQUFlLEdBQWlCLElBQUksY0FBTyxFQUFPLENBQUM7SUFXM0QsQ0FBQztJQVNxQixzQkFBSSxxRUFBUztRQVBuQyx3R0FBd0c7UUFDeEcsY0FBYztRQUNkLHdHQUF3RztRQUV4Rzs7V0FFRzthQUNtQjtZQUVsQixPQUFPO2dCQUNILHlDQUF5QyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUMzRCx3Q0FBd0MsRUFBRyxJQUFJLENBQUMsVUFBVTthQUM3RCxDQUFDO1FBQ04sQ0FBQzs7O09BQUE7SUFFRCx3R0FBd0c7SUFDeEcsb0JBQW9CO0lBQ3BCLHdHQUF3RztJQUV4Rzs7T0FFRztJQUNILGlFQUFRLEdBQVI7UUFBQSxpQkEwR0M7UUF4R0csc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1RixxRkFBcUY7UUFDckYsSUFBSyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFDdEQ7WUFDSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7UUFDRCxlQUFlO2FBRWY7WUFDSSx5Q0FBeUM7WUFDekMsSUFBSyxJQUFJLENBQUMsWUFBWSxFQUN0QjtnQkFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDbkI7U0FDSjtRQUVELDZEQUE2RDtRQUM3RCxJQUFJLENBQUMsZ0NBQWdDLENBQUMsMEJBQTBCO2FBQzNELElBQUksQ0FBQyxJQUFBLHFCQUFTLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxVQUFDLGFBQWE7WUFFckIsc0NBQXNDO1lBQ3RDLElBQUssYUFBYSxLQUFLLElBQUksRUFDM0I7Z0JBQ0ksT0FBTzthQUNWO1lBRUQsdURBQXVEO1lBQ3ZELElBQUssS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUNqRDtnQkFDSSxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDbkI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVQLHNGQUFzRjtRQUN0RixJQUFLLElBQUksQ0FBQyxZQUFZLEVBQ3RCO1lBQ0ksSUFBSSxDQUFDLGdDQUFnQyxDQUFDLHlCQUF5QjtpQkFDMUQsSUFBSSxDQUFDLElBQUEscUJBQVMsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7aUJBQ3JDLFNBQVMsQ0FBQyxVQUFDLFlBQVk7Z0JBRXBCLHFDQUFxQztnQkFDckMsSUFBSyxZQUFZLEtBQUssSUFBSSxFQUMxQjtvQkFDSSxPQUFPO2lCQUNWO2dCQUVELGlEQUFpRDtnQkFDakQsSUFBSyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLEVBQ2hEO29CQUNJLE9BQU87aUJBQ1Y7Z0JBRUQsK0VBQStFO2dCQUMvRSxJQUFLLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUN0RDtvQkFDSSxPQUFPO2lCQUNWO2dCQUVELHFDQUFxQztnQkFDckMsSUFBSyxLQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksRUFDL0I7b0JBQ0ksT0FBTztpQkFDVjtnQkFFRCxrRUFBa0U7Z0JBQ2xFLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztTQUNWO1FBRUQsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTthQUNkLElBQUksQ0FDRCxJQUFBLGtCQUFNLEVBQUMsVUFBQyxLQUFLLElBQTZCLE9BQUEsS0FBSyxZQUFZLHNCQUFhLEVBQTlCLENBQThCLENBQUMsRUFDekUsSUFBQSxxQkFBUyxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FDbEM7YUFDQSxTQUFTLENBQUMsVUFBQyxLQUFvQjtZQUU1QixxRkFBcUY7WUFDckYsSUFBSyxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQzdEO2dCQUNJLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNqQjtZQUNELGVBQWU7aUJBRWY7Z0JBQ0kseUNBQXlDO2dCQUN6QyxJQUFLLEtBQUksQ0FBQyxZQUFZLEVBQ3RCO29CQUNJLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDbkI7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRVAsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNsRCxJQUFBLHFCQUFTLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUNsQyxDQUFDLFNBQVMsQ0FBQztZQUVSLGlCQUFpQjtZQUNqQixLQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxvRUFBVyxHQUFYO1FBRUkscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsd0dBQXdHO0lBQ3hHLG1CQUFtQjtJQUNuQix3R0FBd0c7SUFFeEc7O09BRUc7SUFDSCxpRUFBUSxHQUFSO1FBRUksaUNBQWlDO1FBQ2pDLElBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQ3ZCO1lBQ0ksT0FBTztTQUNWO1FBRUQsMENBQTBDO1FBQzFDLElBQUssSUFBSSxDQUFDLFdBQVcsRUFDckI7WUFDSSxPQUFPO1NBQ1Y7UUFFRCxjQUFjO1FBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFcEMsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV2Qyx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0RBQU0sR0FBTjtRQUVJLGlDQUFpQztRQUNqQyxJQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUN2QjtZQUNJLE9BQU87U0FDVjtRQUVELHlDQUF5QztRQUN6QyxJQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFDdEI7WUFDSSxPQUFPO1NBQ1Y7UUFFRCxZQUFZO1FBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFcEMsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV2Qyx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMEVBQWlCLEdBQWpCO1FBRUkseUJBQXlCO1FBQ3pCLElBQUssSUFBSSxDQUFDLFdBQVcsRUFDckI7WUFDSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7YUFFRDtZQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGtFQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsSUFBUztRQUU5QixPQUFPLElBQUksQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCx3R0FBd0c7SUFDeEcsb0JBQW9CO0lBQ3BCLHdHQUF3RztJQUV4Rzs7Ozs7OztPQU9HO0lBQ0ssd0VBQWUsR0FBdkIsVUFBd0IsSUFBd0IsRUFBRSxVQUFrQjs7UUFFaEUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUUvQixJQUFLLENBQUMsUUFBUSxFQUNkO1lBQ0ksT0FBTyxLQUFLLENBQUM7U0FDaEI7O1lBRUQsS0FBcUIsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFDN0I7Z0JBRE0sSUFBTSxLQUFLLHFCQUFBO2dCQUViLElBQUssS0FBSyxDQUFDLFFBQVEsRUFDbkI7b0JBQ0ksSUFBSyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsRUFDNUM7d0JBQ0ksT0FBTyxJQUFJLENBQUM7cUJBQ2Y7aUJBQ0o7Z0JBRUQsOENBQThDO2dCQUM5QyxJQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxFQUMvRTtvQkFDSSxPQUFPLElBQUksQ0FBQztpQkFDZjthQUNKOzs7Ozs7Ozs7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNLLHNFQUFhLEdBQXJCLFVBQXNCLE1BQTBCLEVBQUUsSUFBd0I7O1FBRXRFLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFFakMsSUFBSyxDQUFDLFFBQVEsRUFDZDtZQUNJLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBSyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNoQztZQUNJLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7O1lBRUQsS0FBcUIsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFDN0I7Z0JBRE0sSUFBTSxLQUFLLHFCQUFBO2dCQUViLElBQUssS0FBSyxDQUFDLFFBQVEsRUFDbkI7b0JBQ0ksSUFBSyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFDcEM7d0JBQ0ksT0FBTyxJQUFJLENBQUM7cUJBQ2Y7aUJBQ0o7YUFDSjs7Ozs7Ozs7O1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQWxVUTtRQUFSLElBQUEsWUFBSyxHQUFFOzt3RkFBdUI7SUFDdEI7UUFBUixJQUFBLFlBQUssR0FBRTs7Z0ZBQTBCO0lBQ3pCO1FBQVIsSUFBQSxZQUFLLEdBQUU7O2dGQUFjO0lBeUJBO1FBQXJCLElBQUEsa0JBQVcsRUFBQyxPQUFPLENBQUM7OzttRkFNcEI7SUF2Q1EsOENBQThDO1FBTjFELElBQUEsZ0JBQVMsRUFBQztZQUNQLFFBQVEsRUFBUywyQ0FBMkM7WUFDNUQsV0FBVyxFQUFNLDhCQUE4QjtZQUMvQyxVQUFVLEVBQU8sMkJBQWM7WUFDL0IsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDbEQsQ0FBQztpREFvQmtDLHdCQUFpQjtZQUM1QixlQUFNO1lBQ1MsMENBQXFCO09BckJoRCw4Q0FBOEMsQ0F5VTFEO0lBQUQscURBQUM7Q0FBQSxBQXpVRCxJQXlVQztBQXpVWSx3R0FBOEMifQ==