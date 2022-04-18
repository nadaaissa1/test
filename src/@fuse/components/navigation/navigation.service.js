"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseNavigationService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var FuseNavigationService = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseNavigationService() {
        this._componentRegistry = new Map();
        this._navigationStore = new Map();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Register navigation component
     *
     * @param name
     * @param component
     */
    FuseNavigationService.prototype.registerComponent = function (name, component) {
        this._componentRegistry.set(name, component);
    };
    /**
     * Deregister navigation component
     *
     * @param name
     */
    FuseNavigationService.prototype.deregisterComponent = function (name) {
        this._componentRegistry.delete(name);
    };
    /**
     * Get navigation component from the registry
     *
     * @param name
     */
    FuseNavigationService.prototype.getComponent = function (name) {
        return this._componentRegistry.get(name);
    };
    /**
     * Store the given navigation with the given key
     *
     * @param key
     * @param navigation
     */
    FuseNavigationService.prototype.storeNavigation = function (key, navigation) {
        // Add to the store
        this._navigationStore.set(key, navigation);
    };
    /**
     * Get navigation from storage by key
     *
     * @param key
     */
    FuseNavigationService.prototype.getNavigation = function (key) {
        var _a;
        return (_a = this._navigationStore.get(key)) !== null && _a !== void 0 ? _a : [];
    };
    /**
     * Delete the navigation from the storage
     *
     * @param key
     */
    FuseNavigationService.prototype.deleteNavigation = function (key) {
        // Check if the navigation exists
        if (!this._navigationStore.has(key)) {
            console.warn("Navigation with the key '".concat(key, "' does not exist in the store."));
        }
        // Delete from the storage
        this._navigationStore.delete(key);
    };
    /**
     * Utility function that returns a flattened
     * version of the given navigation array
     *
     * @param navigation
     * @param flatNavigation
     */
    FuseNavigationService.prototype.getFlatNavigation = function (navigation, flatNavigation) {
        var e_1, _a;
        if (flatNavigation === void 0) { flatNavigation = []; }
        try {
            for (var navigation_1 = tslib_1.__values(navigation), navigation_1_1 = navigation_1.next(); !navigation_1_1.done; navigation_1_1 = navigation_1.next()) {
                var item = navigation_1_1.value;
                if (item.type === 'basic') {
                    flatNavigation.push(item);
                    continue;
                }
                if (item.type === 'aside' || item.type === 'collapsable' || item.type === 'group') {
                    if (item.children) {
                        this.getFlatNavigation(item.children, flatNavigation);
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (navigation_1_1 && !navigation_1_1.done && (_a = navigation_1.return)) _a.call(navigation_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return flatNavigation;
    };
    /**
     * Utility function that returns the item
     * with the given id from given navigation
     *
     * @param id
     * @param navigation
     */
    FuseNavigationService.prototype.getItem = function (id, navigation) {
        var e_2, _a;
        try {
            for (var navigation_2 = tslib_1.__values(navigation), navigation_2_1 = navigation_2.next(); !navigation_2_1.done; navigation_2_1 = navigation_2.next()) {
                var item = navigation_2_1.value;
                if (item.id === id) {
                    return item;
                }
                if (item.children) {
                    var childItem = this.getItem(id, item.children);
                    if (childItem) {
                        return childItem;
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (navigation_2_1 && !navigation_2_1.done && (_a = navigation_2.return)) _a.call(navigation_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return null;
    };
    /**
     * Utility function that returns the item's parent
     * with the given id from given navigation
     *
     * @param id
     * @param navigation
     * @param parent
     */
    FuseNavigationService.prototype.getItemParent = function (id, navigation, parent) {
        var e_3, _a;
        try {
            for (var navigation_3 = tslib_1.__values(navigation), navigation_3_1 = navigation_3.next(); !navigation_3_1.done; navigation_3_1 = navigation_3.next()) {
                var item = navigation_3_1.value;
                if (item.id === id) {
                    return parent;
                }
                if (item.children) {
                    var childItem = this.getItemParent(id, item.children, item);
                    if (childItem) {
                        return childItem;
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (navigation_3_1 && !navigation_3_1.done && (_a = navigation_3.return)) _a.call(navigation_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return null;
    };
    FuseNavigationService = tslib_1.__decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseNavigationService);
    return FuseNavigationService;
}());
exports.FuseNavigationService = FuseNavigationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQ0FBMkM7QUFNM0M7SUFLSTs7T0FFRztJQUNIO1FBTlEsdUJBQWtCLEdBQXFCLElBQUksR0FBRyxFQUFlLENBQUM7UUFDOUQscUJBQWdCLEdBQXNDLElBQUksR0FBRyxFQUFlLENBQUM7SUFPckYsQ0FBQztJQUVELHdHQUF3RztJQUN4RyxtQkFBbUI7SUFDbkIsd0dBQXdHO0lBRXhHOzs7OztPQUtHO0lBQ0gsaURBQWlCLEdBQWpCLFVBQWtCLElBQVksRUFBRSxTQUFjO1FBRTFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbURBQW1CLEdBQW5CLFVBQW9CLElBQVk7UUFFNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDRDQUFZLEdBQVosVUFBZ0IsSUFBWTtRQUV4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsK0NBQWUsR0FBZixVQUFnQixHQUFXLEVBQUUsVUFBZ0M7UUFFekQsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsNkNBQWEsR0FBYixVQUFjLEdBQVc7O1FBRXJCLE9BQU8sTUFBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQ0FBSSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7O09B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