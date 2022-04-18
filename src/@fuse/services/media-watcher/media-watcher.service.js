"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseMediaWatcherService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var layout_1 = require("@angular/cdk/layout");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var tailwind_service_1 = require("@fuse/services/tailwind/tailwind.service");
var FuseMediaWatcherService = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseMediaWatcherService(_breakpointObserver, _fuseTailwindConfigService) {
        var _this = this;
        this._breakpointObserver = _breakpointObserver;
        this._fuseTailwindConfigService = _fuseTailwindConfigService;
        this._onMediaChange = new rxjs_1.ReplaySubject(1);
        this._fuseTailwindConfigService.tailwindConfig$.pipe((0, operators_1.switchMap)(function (config) { return _this._breakpointObserver.observe(Object.values(config.breakpoints)).pipe((0, operators_1.map)(function (state) {
            var e_1, _a;
            var _b;
            // Prepare the observable values and set their defaults
            var matchingAliases = [];
            var matchingQueries = {};
            // Get the matching breakpoints and use them to fill the subject
            var matchingBreakpoints = (_b = Object.entries(state.breakpoints).filter(function (_a) {
                var _b = tslib_1.__read(_a, 2), query = _b[0], matches = _b[1];
                return matches;
            })) !== null && _b !== void 0 ? _b : [];
            var _loop_1 = function (query) {
                // Find the alias of the matching query
                var matchingAlias = Object.entries(config.breakpoints).find(function (_a) {
                    var _b = tslib_1.__read(_a, 2), alias = _b[0], q = _b[1];
                    return q === query;
                })[0];
                // Add the matching query to the observable values
                if (matchingAlias) {
                    matchingAliases.push(matchingAlias);
                    matchingQueries[matchingAlias] = query;
                }
            };
            try {
                for (var matchingBreakpoints_1 = tslib_1.__values(matchingBreakpoints), matchingBreakpoints_1_1 = matchingBreakpoints_1.next(); !matchingBreakpoints_1_1.done; matchingBreakpoints_1_1 = matchingBreakpoints_1.next()) {
                    var _c = tslib_1.__read(matchingBreakpoints_1_1.value, 1), query = _c[0];
                    _loop_1(query);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (matchingBreakpoints_1_1 && !matchingBreakpoints_1_1.done && (_a = matchingBreakpoints_1.return)) _a.call(matchingBreakpoints_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // Execute the observable
            _this._onMediaChange.next({
                matchingAliases: matchingAliases,
                matchingQueries: matchingQueries
            });
        })); })).subscribe();
    }
    Object.defineProperty(FuseMediaWatcherService.prototype, "onMediaChange$", {
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Getter for _onMediaChange
         */
        get: function () {
            return this._onMediaChange.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * On media query change
     *
     * @param query
     */
    FuseMediaWatcherService.prototype.onMediaQueryChange$ = function (query) {
        return this._breakpointObserver.observe(query);
    };
    FuseMediaWatcherService = tslib_1.__decorate([
        (0, core_1.Injectable)(),
        tslib_1.__metadata("design:paramtypes", [layout_1.BreakpointObserver,
            tailwind_service_1.FuseTailwindService])
    ], FuseMediaWatcherService);
    return FuseMediaWatcherService;
}());
exports.FuseMediaWatcherService = FuseMediaWatcherService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtd2F0Y2hlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVkaWEtd2F0Y2hlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsOENBQTBFO0FBQzFFLDZCQUFpRDtBQUNqRCw0Q0FBZ0Q7QUFDaEQsNkVBQStFO0FBRy9FO0lBSUk7O09BRUc7SUFDSCxpQ0FDWSxtQkFBdUMsRUFDdkMsMEJBQStDO1FBRjNELGlCQW9DQztRQW5DVyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBcUI7UUFQbkQsbUJBQWMsR0FBdUUsSUFBSSxvQkFBYSxDQUFzRCxDQUFDLENBQUMsQ0FBQztRQVVuSyxJQUFJLENBQUMsMEJBQTBCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FDaEQsSUFBQSxxQkFBUyxFQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDeEYsSUFBQSxlQUFHLEVBQUMsVUFBQyxLQUFLOzs7WUFFTix1REFBdUQ7WUFDdkQsSUFBTSxlQUFlLEdBQWEsRUFBRSxDQUFDO1lBQ3JDLElBQU0sZUFBZSxHQUFRLEVBQUUsQ0FBQztZQUVoQyxnRUFBZ0U7WUFDaEUsSUFBTSxtQkFBbUIsR0FBRyxNQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQWdCO29CQUFoQixLQUFBLHFCQUFnQixFQUFmLEtBQUssUUFBQSxFQUFFLE9BQU8sUUFBQTtnQkFBTSxPQUFBLE9BQU87WUFBUCxDQUFPLENBQUMsbUNBQUksRUFBRSxDQUFDO29DQUM3RixLQUFLO2dCQUVkLHVDQUF1QztnQkFDdkMsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBVTt3QkFBVixLQUFBLHFCQUFVLEVBQVQsS0FBSyxRQUFBLEVBQUUsQ0FBQyxRQUFBO29CQUFNLE9BQUEsQ0FBQyxLQUFLLEtBQUs7Z0JBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTlGLGtEQUFrRDtnQkFDbEQsSUFBSyxhQUFhLEVBQ2xCO29CQUNJLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3BDLGVBQWUsQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQzFDOzs7Z0JBVkwsS0FBdUIsSUFBQSx3QkFBQSxpQkFBQSxtQkFBbUIsQ0FBQSx3REFBQTtvQkFBOUIsSUFBQSxLQUFBLGdEQUFPLEVBQU4sS0FBSyxRQUFBOzRCQUFMLEtBQUs7aUJBV2pCOzs7Ozs7Ozs7WUFFRCx5QkFBeUI7WUFDekIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCLGVBQWUsaUJBQUE7Z0JBQ2YsZUFBZSxpQkFBQTthQUNsQixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FDTCxFQTVCbUIsQ0E0Qm5CLENBQUMsQ0FDTCxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFTRCxzQkFBSSxtREFBYztRQVBsQix3R0FBd0c7UUFDeEcsY0FBYztRQUNkLHdHQUF3RztRQUV4Rzs7V0FFRzthQUNIO1lBRUksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLENBQUM7OztPQUFBO0lBRUQsd0dBQXdHO0lBQ3hHLG1CQUFtQjtJQUNuQix3R0FBd0c7SUFFeEc7Ozs7T0FJRztJQUNILHFEQUFtQixHQUFuQixVQUFvQixLQUF3QjtRQUV4QyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQXJFUSx1QkFBdUI7UUFEbkMsSUFBQSxpQkFBVSxHQUFFO2lEQVN3QiwyQkFBa0I7WUFDWCxzQ0FBbUI7T0FUbEQsdUJBQXVCLENBc0VuQztJQUFELDhCQUFDO0NBQUEsQUF0RUQsSUFzRUM7QUF0RVksMERBQXVCIn0=