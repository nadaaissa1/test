"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseVerticalNavigationAsideItemComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var navigation_service_1 = require("@fuse/components/navigation/navigation.service");
var FuseVerticalNavigationAsideItemComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseVerticalNavigationAsideItemComponent(_changeDetectorRef, _router, _fuseNavigationService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._router = _router;
        this._fuseNavigationService = _fuseNavigationService;
        this.active = false;
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
    FuseVerticalNavigationAsideItemComponent.prototype.ngOnChanges = function (changes) {
        // Active item id
        if ('activeItemId' in changes) {
            // Mark if active
            this._markIfActive(this._router.url);
        }
    };
    /**
     * On init
     */
    FuseVerticalNavigationAsideItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Mark if active
        this._markIfActive(this._router.url);
        // Attach a listener to the NavigationEnd event
        this._router.events
            .pipe((0, operators_1.filter)(function (event) { return event instanceof router_1.NavigationEnd; }), (0, operators_1.takeUntil)(this._unsubscribeAll))
            .subscribe(function (event) {
            // Mark if active
            _this._markIfActive(event.urlAfterRedirects);
        });
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
    FuseVerticalNavigationAsideItemComponent.prototype.ngOnDestroy = function () {
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
    FuseVerticalNavigationAsideItemComponent.prototype.trackByFn = function (index, item) {
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
    FuseVerticalNavigationAsideItemComponent.prototype._hasActiveChild = function (item, currentUrl) {
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
                // Skip items other than 'basic'
                if (child.type !== 'basic') {
                    continue;
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
     * Decide and mark if the item is active
     *
     * @private
     */
    FuseVerticalNavigationAsideItemComponent.prototype._markIfActive = function (currentUrl) {
        // Check if the activeItemId is equals to this item id
        this.active = this.activeItemId === this.item.id;
        // If the aside has a children that is active,
        // always mark it as active
        if (this._hasActiveChild(this.item, currentUrl)) {
            this.active = true;
        }
        // Mark for check
        this._changeDetectorRef.markForCheck();
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseVerticalNavigationAsideItemComponent.prototype, "activeItemId", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseVerticalNavigationAsideItemComponent.prototype, "autoCollapse", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Object)
    ], FuseVerticalNavigationAsideItemComponent.prototype, "item", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseVerticalNavigationAsideItemComponent.prototype, "name", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseVerticalNavigationAsideItemComponent.prototype, "skipChildren", void 0);
    FuseVerticalNavigationAsideItemComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-vertical-navigation-aside-item',
            templateUrl: './aside.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            router_1.Router,
            navigation_service_1.FuseNavigationService])
    ], FuseVerticalNavigationAsideItemComponent);
    return FuseVerticalNavigationAsideItemComponent;
}());
exports.FuseVerticalNavigationAsideItemComponent = FuseVerticalNavigationAsideItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQ0FBMEk7QUFDMUksMENBQXdEO0FBRXhELDZCQUErQjtBQUMvQiw0Q0FBbUQ7QUFFbkQscUZBQXVGO0FBUXZGO0lBaUJJOztPQUVHO0lBQ0gsa0RBQ1ksa0JBQXFDLEVBQ3JDLE9BQWUsRUFDZixzQkFBNkM7UUFGN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF1QjtRQVZ6RCxXQUFNLEdBQVksS0FBSyxDQUFDO1FBRWhCLG9CQUFlLEdBQWlCLElBQUksY0FBTyxFQUFPLENBQUM7SUFXM0QsQ0FBQztJQUVELHdHQUF3RztJQUN4RyxvQkFBb0I7SUFDcEIsd0dBQXdHO0lBRXhHOzs7O09BSUc7SUFDSCw4REFBVyxHQUFYLFVBQVksT0FBc0I7UUFFOUIsaUJBQWlCO1FBQ2pCLElBQUssY0FBYyxJQUFJLE9BQU8sRUFDOUI7WUFDSSxpQkFBaUI7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMkRBQVEsR0FBUjtRQUFBLGlCQTRCQztRQTFCRyxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJDLCtDQUErQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07YUFDZCxJQUFJLENBQ0QsSUFBQSxrQkFBTSxFQUFDLFVBQUMsS0FBSyxJQUE2QixPQUFBLEtBQUssWUFBWSxzQkFBYSxFQUE5QixDQUE4QixDQUFDLEVBQ3pFLElBQUEscUJBQVMsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFD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