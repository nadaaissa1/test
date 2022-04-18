"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseScrollbarDirective = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var coercion_1 = require("@angular/cdk/coercion");
var platform_1 = require("@angular/cdk/platform");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var perfect_scrollbar_1 = require("perfect-scrollbar");
var lodash_es_1 = require("lodash-es");
var scrollbar_types_1 = require("@fuse/directives/scrollbar/scrollbar.types");
/**
 * Wrapper directive for the Perfect Scrollbar: https://github.com/mdbootstrap/perfect-scrollbar
 */
var FuseScrollbarDirective = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseScrollbarDirective(_elementRef, _platform, _router) {
        this._elementRef = _elementRef;
        this._platform = _platform;
        this._router = _router;
        /* eslint-enable @typescript-eslint/naming-convention */
        this.fuseScrollbar = true;
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    Object.defineProperty(FuseScrollbarDirective.prototype, "elementRef", {
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Getter for _elementRef
         */
        get: function () {
            return this._elementRef;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuseScrollbarDirective.prototype, "ps", {
        /**
         * Getter for _ps
         */
        get: function () {
            return this._ps;
        },
        enumerable: false,
        configurable: true
    });
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On changes
     *
     * @param changes
     */
    FuseScrollbarDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // Enabled
        if ('fuseScrollbar' in changes) {
            // Interpret empty string as 'true'
            this.fuseScrollbar = (0, coercion_1.coerceBooleanProperty)(changes.fuseScrollbar.currentValue);
            // If enabled, init the directive
            if (this.fuseScrollbar) {
                this._init();
            }
            // Otherwise destroy it
            else {
                this._destroy();
            }
        }
        // Scrollbar options
        if ('fuseScrollbarOptions' in changes) {
            // Merge the options
            this._options = (0, lodash_es_1.merge)({}, this._options, changes.fuseScrollbarOptions.currentValue);
            // Return if not initialized
            if (!this._ps) {
                return;
            }
            // Destroy and re-init the PerfectScrollbar to update its options
            setTimeout(function () {
                _this._destroy();
            });
            setTimeout(function () {
                _this._init();
            });
        }
    };
    /**
     * On init
     */
    FuseScrollbarDirective.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to window resize event
        (0, rxjs_1.fromEvent)(window, 'resize')
            .pipe((0, operators_1.takeUntil)(this._unsubscribeAll), (0, operators_1.debounceTime)(150))
            .subscribe(function () {
            // Update the PerfectScrollbar
            _this.update();
        });
    };
    /**
     * On destroy
     */
    FuseScrollbarDirective.prototype.ngOnDestroy = function () {
        this._destroy();
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Is enabled
     */
    FuseScrollbarDirective.prototype.isEnabled = function () {
        return this.fuseScrollbar;
    };
    /**
     * Update the scrollbar
     */
    FuseScrollbarDirective.prototype.update = function () {
        // Return if not initialized
        if (!this._ps) {
            return;
        }
        // Update the PerfectScrollbar
        this._ps.update();
    };
    /**
     * Destroy the scrollbar
     */
    FuseScrollbarDirective.prototype.destroy = function () {
        this.ngOnDestroy();
    };
    /**
     * Returns the geometry of the scrollable element
     *
     * @param prefix
     */
    FuseScrollbarDirective.prototype.geometry = function (prefix) {
        if (prefix === void 0) { prefix = 'scroll'; }
        return new scrollbar_types_1.ScrollbarGeometry(this._elementRef.nativeElement[prefix + 'Left'], this._elementRef.nativeElement[prefix + 'Top'], this._elementRef.nativeElement[prefix + 'Width'], this._elementRef.nativeElement[prefix + 'Height']);
    };
    /**
     * Returns the position of the scrollable element
     *
     * @param absolute
     */
    FuseScrollbarDirective.prototype.position = function (absolute) {
        if (absolute === void 0) { absolute = false; }
        var scrollbarPosition;
        if (!absolute && this._ps) {
            scrollbarPosition = new scrollbar_types_1.ScrollbarPosition(this._ps.reach.x || 0, this._ps.reach.y || 0);
        }
        else {
            scrollbarPosition = new scrollbar_types_1.ScrollbarPosition(this._elementRef.nativeElement.scrollLeft, this._elementRef.nativeElement.scrollTop);
        }
        return scrollbarPosition;
    };
    /**
     * Scroll to
     *
     * @param x
     * @param y
     * @param speed
     */
    FuseScrollbarDirective.prototype.scrollTo = function (x, y, speed) {
        if (y == null && speed == null) {
            this.animateScrolling('scrollTop', x, speed);
        }
        else {
            if (x != null) {
                this.animateScrolling('scrollLeft', x, speed);
            }
            if (y != null) {
                this.animateScrolling('scrollTop', y, speed);
            }
        }
    };
    /**
     * Scroll to X
     *
     * @param x
     * @param speed
     */
    FuseScrollbarDirective.prototype.scrollToX = function (x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    };
    /**
     * Scroll to Y
     *
     * @param y
     * @param speed
     */
    FuseScrollbarDirective.prototype.scrollToY = function (y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    };
    /**
     * Scroll to top
     *
     * @param offset
     * @param speed
     */
    FuseScrollbarDirective.prototype.scrollToTop = function (offset, speed) {
        if (offset === void 0) { offset = 0; }
        this.animateScrolling('scrollTop', offset, speed);
    };
    /**
     * Scroll to bottom
     *
     * @param offset
     * @param speed
     */
    FuseScrollbarDirective.prototype.scrollToBottom = function (offset, speed) {
        if (offset === void 0) { offset = 0; }
        var top = this._elementRef.nativeElement.scrollHeight - this._elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - offset, speed);
    };
    /**
     * Scroll to left
     *
     * @param offset
     * @param speed
     */
    FuseScrollbarDirective.prototype.scrollToLeft = function (offset, speed) {
        if (offset === void 0) { offset = 0; }
        this.animateScrolling('scrollLeft', offset, speed);
    };
    /**
     * Scroll to right
     *
     * @param offset
     * @param speed
     */
    FuseScrollbarDirective.prototype.scrollToRight = function (offset, speed) {
        if (offset === void 0) { offset = 0; }
        var left = this._elementRef.nativeElement.scrollWidth - this._elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - offset, speed);
    };
    /**
     * Scroll to element
     *
     * @param qs
     * @param offset
     * @param ignoreVisible If true, scrollToElement won't happen if element is already inside the current viewport
     * @param speed
     */
    FuseScrollbarDirective.prototype.scrollToElement = function (qs, offset, ignoreVisible, speed) {
        if (offset === void 0) { offset = 0; }
        if (ignoreVisible === void 0) { ignoreVisible = false; }
        var element = this._elementRef.nativeElement.querySelector(qs);
        if (!element) {
            return;
        }
        var elementPos = element.getBoundingClientRect();
        var scrollerPos = this._elementRef.nativeElement.getBoundingClientRect();
        if (this._elementRef.nativeElement.classList.contains('ps--active-x')) {
            if (ignoreVisible && elementPos.right <= (scrollerPos.right - Math.abs(offset))) {
                return;
            }
            var currentPos = this._elementRef.nativeElement['scrollLeft'];
            var position = elementPos.left - scrollerPos.left + currentPos;
            this.animateScrolling('scrollLeft', position + offset, speed);
        }
        if (this._elementRef.nativeElement.classList.contains('ps--active-y')) {
            if (ignoreVisible && elementPos.bottom <= (scrollerPos.bottom - Math.abs(offset))) {
                return;
            }
            var currentPos = this._elementRef.nativeElement['scrollTop'];
            var position = elementPos.top - scrollerPos.top + currentPos;
            this.animateScrolling('scrollTop', position + offset, speed);
        }
    };
    /**
     * Animate scrolling
     *
     * @param target
     * @param value
     * @param speed
     */
    FuseScrollbarDirective.prototype.animateScrolling = function (target, value, speed) {
        var _this = this;
        if (this._animation) {
            window.cancelAnimationFrame(this._animation);
            this._animation = null;
        }
        if (!speed || typeof window === 'undefined') {
            this._elementRef.nativeElement[target] = value;
        }
        else if (value !== this._elementRef.nativeElement[target]) {
            var newValue_1 = 0;
            var scrollCount_1 = 0;
            var oldTimestamp_1 = performance.now();
            var oldValue_1 = this._elementRef.nativeElement[target];
            var cosParameter_1 = (oldValue_1 - value) / 2;
            var step_1 = function (newTimestamp) {
                scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                // Only continue animation if scroll position has not changed
                if (_this._elementRef.nativeElement[target] === oldValue_1) {
                    if (scrollCount_1 >= Math.PI) {
                        _this.animateScrolling(target, value, 0);
                    }
                    else {
                        _this._elementRef.nativeElement[target] = newValue_1;
                        // On a zoomed out page the resulting offset may differ
                        oldValue_1 = _this._elementRef.nativeElement[target];
                        oldTimestamp_1 = newTimestamp;
                        _this._animation = window.requestAnimationFrame(step_1);
                    }
                }
            };
            window.requestAnimationFrame(step_1);
        }
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Initialize
     *
     * @private
     */
    FuseScrollbarDirective.prototype._init = function () {
        // Return if already initialized
        if (this._ps) {
            return;
        }
        // Return if on mobile or not on browser
        if (this._platform.ANDROID || this._platform.IOS || !this._platform.isBrowser) {
            this.fuseScrollbar = false;
            return;
        }
        // Initialize the PerfectScrollbar
        this._ps = new perfect_scrollbar_1.default(this._elementRef.nativeElement, tslib_1.__assign({}, this._options));
    };
    /**
     * Destroy
     *
     * @private
     */
    FuseScrollbarDirective.prototype._destroy = function () {
        // Return if not initialized
        if (!this._ps) {
            return;
        }
        // Destroy the PerfectScrollbar
        this._ps.destroy();
        // Clean up
        this._ps = null;
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseScrollbarDirective.prototype, "fuseScrollbar", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Object)
    ], FuseScrollbarDirective.prototype, "fuseScrollbarOptions", void 0);
    FuseScrollbarDirective = tslib_1.__decorate([
        (0, core_1.Directive)({
            selector: '[fuseScrollbar]',
            exportAs: 'fuseScrollbar'
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef,
            platform_1.Platform,
            router_1.Router])
    ], FuseScrollbarDirective);
    return FuseScrollbarDirective;
}());
exports.FuseScrollbarDirective = FuseScrollbarDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjcm9sbGJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUEwRztBQUMxRywwQ0FBeUM7QUFDekMsa0RBQTRFO0FBQzVFLGtEQUFpRDtBQUNqRCw2QkFBMEM7QUFDMUMsNENBQXlEO0FBQ3pELHVEQUFpRDtBQUNqRCx1Q0FBa0M7QUFDbEMsOEVBQWtHO0FBRWxHOztHQUVHO0FBS0g7SUFjSTs7T0FFRztJQUNILGdDQUNZLFdBQXVCLEVBQ3ZCLFNBQW1CLEVBQ25CLE9BQWU7UUFGZixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFoQjNCLHdEQUF3RDtRQUUvQyxrQkFBYSxHQUFZLElBQUksQ0FBQztRQU0vQixvQkFBZSxHQUFpQixJQUFJLGNBQU8sRUFBTyxDQUFDO0lBVzNELENBQUM7SUFTRCxzQkFBSSw4Q0FBVTtRQVBkLHdHQUF3RztRQUN4RyxjQUFjO1FBQ2Qsd0dBQXdHO1FBRXhHOztXQUVHO2FBQ0g7WUFFSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSxzQ0FBRTtRQUhOOztXQUVHO2FBQ0g7WUFFSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCx3R0FBd0c7SUFDeEcsb0JBQW9CO0lBQ3BCLHdHQUF3RztJQUV4Rzs7OztPQUlHO0lBQ0gsNENBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQXlDQztRQXZDRyxVQUFVO1FBQ1YsSUFBSyxlQUFlLElBQUksT0FBTyxFQUMvQjtZQUNJLG1DQUFtQztZQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUEsZ0NBQXFCLEVBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZ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