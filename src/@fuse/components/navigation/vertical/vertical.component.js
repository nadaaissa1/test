"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseVerticalNavigationComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var router_1 = require("@angular/router");
var overlay_1 = require("@angular/cdk/overlay");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var animations_2 = require("@fuse/animations");
var navigation_service_1 = require("@fuse/components/navigation/navigation.service");
var scrollbar_directive_1 = require("@fuse/directives/scrollbar/scrollbar.directive");
var utils_service_1 = require("@fuse/services/utils/utils.service");
var coercion_1 = require("@angular/cdk/coercion");
var FuseVerticalNavigationComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseVerticalNavigationComponent(_animationBuilder, _changeDetectorRef, _elementRef, _renderer2, _router, _scrollStrategyOptions, _fuseNavigationService, _fuseUtilsService) {
        var _this = this;
        this._animationBuilder = _animationBuilder;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._renderer2 = _renderer2;
        this._router = _router;
        this._scrollStrategyOptions = _scrollStrategyOptions;
        this._fuseNavigationService = _fuseNavigationService;
        this._fuseUtilsService = _fuseUtilsService;
        /* eslint-enable @typescript-eslint/naming-convention */
        this.appearance = 'default';
        this.autoCollapse = true;
        this.inner = false;
        this.mode = 'side';
        this.name = this._fuseUtilsService.randomId();
        this.opened = true;
        this.position = 'left';
        this.transparentOverlay = false;
        this.navigationSideBarOpened = new core_1.EventEmitter();
        this.appearanceChanged = new core_1.EventEmitter();
        this.modeChanged = new core_1.EventEmitter();
        this.openedChanged = new core_1.EventEmitter();
        this.positionChanged = new core_1.EventEmitter();
        this.activeAsideItemId = null;
        this.onCollapsableItemCollapsed = new rxjs_1.ReplaySubject(1);
        this.onCollapsableItemExpanded = new rxjs_1.ReplaySubject(1);
        this.onRefreshed = new rxjs_1.ReplaySubject(1);
        this._animationsEnabled = false;
        this._hovered = false;
        this._scrollStrategy = this._scrollStrategyOptions.block();
        this._unsubscribeAll = new rxjs_1.Subject();
        this._handleAsideOverlayClick = function () {
            _this.closeAside();
        };
        this._handleOverlayClick = function () {
            _this.close();
        };
    }
    Object.defineProperty(FuseVerticalNavigationComponent.prototype, "classList", {
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Host binding for component classes
         */
        get: function () {
            var _a;
            return _a = {
                    'fuse-vertical-navigation-animations-enabled': this._animationsEnabled
                },
                _a["fuse-vertical-navigation-appearance-".concat(this.appearance)] = true,
                _a['fuse-vertical-navigation-hover'] = this._hovered,
                _a['fuse-vertical-navigation-inner'] = this.inner,
                _a['fuse-vertical-navigation-mode-over'] = this.mode === 'over',
                _a['fuse-vertical-navigation-mode-side'] = this.mode === 'side',
                _a['fuse-vertical-navigation-opened'] = this.opened,
                _a['fuse-vertical-navigation-position-left'] = this.position === 'left',
                _a['fuse-vertical-navigation-position-right'] = this.position === 'right',
                _a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuseVerticalNavigationComponent.prototype, "styleList", {
        /**
         * Host binding for component inline styles
         */
        get: function () {
            return {
                'visibility': this.opened ? 'visible' : 'hidden'
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuseVerticalNavigationComponent.prototype, "fuseScrollbarDirectives", {
        /**
         * Setter for fuseScrollbarDirectives
         */
        set: function (fuseScrollbarDirectives) {
            // Store the directives
            this._fuseScrollbarDirectives = fuseScrollbarDirectives;
            // Return if there are no directives
            if (fuseScrollbarDirectives.length === 0) {
                return;
            }
            // Unsubscribe the previous subscriptions
            if (this._fuseScrollbarDirectivesSubscription) {
                this._fuseScrollbarDirectivesSubscription.unsubscribe();
            }
            // Update the scrollbars on collapsable items' collapse/expand
            this._fuseScrollbarDirectivesSubscription =
                (0, rxjs_1.merge)(this.onCollapsableItemCollapsed, this.onCollapsableItemExpanded)
                    .pipe((0, operators_1.takeUntil)(this._unsubscribeAll), (0, operators_1.delay)(250))
                    .subscribe(function () {
                    // Loop through the scrollbars and update them
                    fuseScrollbarDirectives.forEach(function (fuseScrollbarDirective) {
                        fuseScrollbarDirective.update();
                    });
                });
        },
        enumerable: false,
        configurable: true
    });
    // -----------------------------------------------------------------------------------------------------
    // @ Decorated methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * On mouseenter
     *
     * @private
     */
    //@HostListener('mouseenter')
    FuseVerticalNavigationComponent.prototype._onMouseenter = function () {
        // Enable the animations
        this._enableAnimations();
        // Set the hovered
        this._hovered = true;
        this.navigationSideBarOpened.emit(true);
    };
    /**
     * On mouseleave
     *
     * @private
     */
    // @HostListener('mouseleave')
    FuseVerticalNavigationComponent.prototype._onMouseleave = function () {
        // Enable the animations
        this._enableAnimations();
        // Set the hovered
        this._hovered = false;
        this.navigationSideBarOpened.emit(false);
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On changes
     *
     * @param changes
     */
    FuseVerticalNavigationComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // Appearance
        if ('appearance' in changes) {
            // Execute the observable
            this.appearanceChanged.next(changes.appearance.currentValue);
        }
        // Inner
        if ('inner' in changes) {
            // Coerce the value to a boolean
            this.inner = (0, coercion_1.coerceBooleanProperty)(changes.inner.currentValue);
        }
        // Mode
        if ('mode' in changes) {
            // Get the previous and current values
            var currentMode = changes.mode.currentValue;
            var previousMode = changes.mode.previousValue;
            // Disable the animations
            this._disableAnimations();
            // If the mode changes: 'over -> side'
            if (previousMode === 'over' && currentMode === 'side') {
                // Hide the overlay
                this._hideOverlay();
            }
            // If the mode changes: 'side -> over'
            if (previousMode === 'side' && currentMode === 'over') {
                // Close the aside
                this.closeAside();
                // If the navigation is opened
                if (this.opened) {
                    // Show the overlay
                    this._showOverlay();
                }
            }
            // Execute the observable
            this.modeChanged.next(currentMode);
            // Enable the animations after a delay
            // The delay must be bigger than the current transition-duration
            // to make sure nothing will be animated while the mode changing
            setTimeout(function () {
                _this._enableAnimations();
            }, 500);
        }
        // Navigation
        if ('navigation' in changes) {
            // Mark for check
            this._changeDetectorRef.markForCheck();
        }
        // Opened
        if ('opened' in changes) {
            // Coerce the value to a boolean
            this.opened = (0, coercion_1.coerceBooleanProperty)(changes.opened.currentValue);
            // Open/close the navigation
            this._toggleOpened(this.opened);
        }
        // Position
        if ('position' in changes) {
            // Execute the observable
            this.positionChanged.next(changes.position.currentValue);
        }
        // Transparent overlay
        if ('transparentOverlay' in changes) {
            // Coerce the value to a boolean
            this.transparentOverlay = (0, coercion_1.coerceBooleanProperty)(changes.transparentOverlay.currentValue);
        }
    };
    /**
     * On init
     */
    FuseVerticalNavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Make sure the name input is not an empty string
        if (this.name === '') {
            this.name = this._fuseUtilsService.randomId();
        }
        // Register the navigation component
        this._fuseNavigationService.registerComponent(this.name, this);
        // Subscribe to the 'NavigationEnd' event
        this._router.events
            .pipe((0, operators_1.filter)(function (event) { return event instanceof router_1.NavigationEnd; }), (0, operators_1.takeUntil)(this._unsubscribeAll))
            .subscribe(function () {
            // If the mode is 'over' and the navigation is opened...
            if (_this.mode === 'over' && _this.opened) {
                // Close the navigation
                _this.close();
            }
            // If the mode is 'side' and the aside is active...
            if (_this.mode === 'side' && _this.activeAsideItemId) {
                // Close the aside
                _this.closeAside();
            }
        });
    };
    /**
     * After view init
     */
    FuseVerticalNavigationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            // Return if 'navigation content' element does not exist
            if (!_this._navigationContentEl) {
                return;
            }
            // If 'navigation content' element doesn't have
            // perfect scrollbar activated on it...
            if (!_this._navigationContentEl.nativeElement.classList.contains('ps')) {
                // Find the active item
                var activeItem = _this._navigationContentEl.nativeElement.querySelector('.fuse-vertical-navigation-item-active');
                // If the active item exists, scroll it into view
                if (activeItem) {
                    activeItem.scrollIntoView();
                }
            }
            // Otherwise
            else {
                // Go through all the scrollbar directives
                _this._fuseScrollbarDirectives.forEach(function (fuseScrollbarDirective) {
                    // Skip if not enabled
                    if (!fuseScrollbarDirective.isEnabled()) {
                        return;
                    }
                    // Scroll to the active element
                    fuseScrollbarDirective.scrollToElement('.fuse-vertical-navigation-item-active', -120, true);
                });
            }
        });
    };
    /**
     * On destroy
     */
    FuseVerticalNavigationComponent.prototype.ngOnDestroy = function () {
        // Forcefully close the navigation and aside in case they are opened
        this.close();
        this.closeAside();
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
    FuseVerticalNavigationComponent.prototype.refresh = function () {
        // Mark for check
        this._changeDetectorRef.markForCheck();
        // Execute the observable
        this.onRefreshed.next(true);
    };
    /**
     * Open the navigation
     */
    FuseVerticalNavigationComponent.prototype.open = function () {
        // Return if the navigation is already open
        if (this.opened) {
            return;
        }
        // Set the opened
        this._toggleOpened(true);
    };
    /**
     * Close the navigation
     */
    FuseVerticalNavigationComponent.prototype.close = function () {
        // Return if the navigation is already closed
        if (!this.opened) {
            return;
        }
        // Close the aside
        this.closeAside();
        // Set the opened
        this._toggleOpened(false);
    };
    /**
     * Toggle the navigation
     */
    FuseVerticalNavigationComponent.prototype.toggle = function () {
        // Toggle
        if (this.opened) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Open the aside
     *
     * @param item
     */
    FuseVerticalNavigationComponent.prototype.openAside = function (item) {
        // Return if the item is disabled
        if (item.disabled || !item.id) {
            return;
        }
        // Open
        this.activeAsideItemId = item.id;
        // Show the aside overlay
        this._showAsideOverlay();
        // Mark for check
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Close the aside
     */
    FuseVerticalNavigationComponent.prototype.closeAside = function () {
        // Close
        this.activeAsideItemId = null;
        // Hide the aside overlay
        this._hideAsideOverlay();
        // Mark for check
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Toggle the aside
     *
     * @param item
     */
    FuseVerticalNavigationComponent.prototype.toggleAside = function (item) {
        // Toggle
        if (this.activeAsideItemId === item.id) {
            this.closeAside();
        }
        else {
            this.openAside(item);
        }
    };
    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    FuseVerticalNavigationComponent.prototype.trackByFn = function (index, item) {
        return item.id || index;
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Enable the animations
     *
     * @private
     */
    FuseVerticalNavigationComponent.prototype._enableAnimations = function () {
        // Return if the animations are already enabled
        if (this._animationsEnabled) {
            return;
        }
        // Enable the animations
        this._animationsEnabled = true;
    };
    /**
     * Disable the animations
     *
     * @private
     */
    FuseVerticalNavigationComponent.prototype._disableAnimations = function () {
        // Return if the animations are already disabled
        if (!this._animationsEnabled) {
            return;
        }
        // Disable the animations
        this._animationsEnabled = false;
    };
    /**
     * Show the overlay
     *
     * @private
     */
    FuseVerticalNavigationComponent.prototype._showOverlay = function () {
        // Return if there is already an overlay
        if (this._asideOverlay) {
            return;
        }
        // Create the overlay element
        this._overlay = this._renderer2.createElement('div');
        // Add a class to the overlay element
        this._overlay.classList.add('fuse-vertical-navigation-overlay');
        // Add a class depending on the transparentOverlay option
        if (this.transparentOverlay) {
            this._overlay.classList.add('fuse-vertical-navigation-overlay-transparent');
        }
        // Append the overlay to the parent of the navigation
        this._renderer2.appendChild(this._elementRef.nativeElement.parentElement, this._overlay);
        // Enable block scroll strategy
        this._scrollStrategy.enable();
        // Create the enter animation and attach it to the player
        this._player = this._animationBuilder.build([
            (0, animations_1.animate)('300ms cubic-bezier(0.25, 0.8, 0.25, 1)', (0, animations_1.style)({ opacity: 1 }))
        ]).create(this._overlay);
        // Play the animation
        this._player.play();
        // Add an event listener to the overlay
        this._overlay.addEventListener('click', this._handleOverlayClick);
    };
    /**
     * Hide the overlay
     *
     * @private
     */
    FuseVerticalNavigationComponent.prototype._hideOverlay = function () {
        var _this = this;
        if (!this._overlay) {
            return;
        }
        // Create the leave animation and attach it to the player
        this._player = this._animationBuilder.build([
            (0, animations_1.animate)('300ms cubic-bezier(0.25, 0.8, 0.25, 1)', (0, animations_1.style)({ opacity: 0 }))
        ]).create(this._overlay);
        // Play the animation
        this._player.play();
        // Once the animation is done...
        this._player.onDone(function () {
            // If the overlay still exists...
            if (_this._overlay) {
                // Remove the event listener
                _this._overlay.removeEventListener('click', _this._handleOverlayClick);
                // Remove the overlay
                _this._overlay.parentNode.removeChild(_this._overlay);
                _this._overlay = null;
            }
            // Disable block scroll strategy
            _this._scrollStrategy.disable();
        });
    };
    /**
     * Show the aside overlay
     *
     * @private
     */
    FuseVerticalNavigationComponent.prototype._showAsideOverlay = function () {
        // Return if there is already an overlay
        if (this._asideOverlay) {
            return;
        }
        // Create the aside overlay element
        this._asideOverlay = this._renderer2.createElement('div');
        // Add a class to the aside overlay element
        this._asideOverlay.classList.add('fuse-vertical-navigation-aside-overlay');
        // Append the aside overlay to the parent of the navigation
        this._renderer2.appendChild(this._elementRef.nativeElement.parentElement, this._asideOverlay);
        // Create the enter animation and attach it to the player
        this._player =
            this._animationBuilder
                .build([
                (0, animations_1.animate)('300ms cubic-bezier(0.25, 0.8, 0.25, 1)', (0, animations_1.style)({ opacity: 1 }))
            ]).create(this._asideOverlay);
        // Play the animation
        this._player.play();
        // Add an event listener to the aside overlay
        this._asideOverlay.addEventListener('click', this._handleAsideOverlayClick);
    };
    /**
     * Hide the aside overlay
     *
     * @private
     */
    FuseVerticalNavigationComponent.prototype._hideAsideOverlay = function () {
        var _this = this;
        if (!this._asideOverlay) {
            return;
        }
        // Create the leave animation and attach it to the player
        this._player =
            this._animationBuilder
                .build([
                (0, animations_1.animate)('300ms cubic-bezier(0.25, 0.8, 0.25, 1)', (0, animations_1.style)({ opacity: 0 }))
            ]).create(this._asideOverlay);
        // Play the animation
        this._player.play();
        // Once the animation is done...
        this._player.onDone(function () {
            // If the aside overlay still exists...
            if (_this._asideOverlay) {
                // Remove the event listener
                _this._asideOverlay.removeEventListener('click', _this._handleAsideOverlayClick);
                // Remove the aside overlay
                _this._asideOverlay.parentNode.removeChild(_this._asideOverlay);
                _this._asideOverlay = null;
            }
        });
    };
    /**
     * Open/close the navigation
     *
     * @param open
     * @private
     */
    FuseVerticalNavigationComponent.prototype._toggleOpened = function (open) {
        // Set the opened
        this.opened = open;
        // Enable the animations
        this._enableAnimations();
        // If the navigation opened, and the mode
        // is 'over', show the overlay
        if (this.mode === 'over') {
            if (this.opened) {
                this._showOverlay();
            }
            else {
                this._hideOverlay();
            }
        }
        // Execute the observable
        this.openedChanged.next(open);
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseVerticalNavigationComponent.prototype, "appearance", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseVerticalNavigationComponent.prototype, "autoCollapse", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseVerticalNavigationComponent.prototype, "inner", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseVerticalNavigationComponent.prototype, "mode", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseVerticalNavigationComponent.prototype, "name", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Array)
    ], FuseVerticalNavigationComponent.prototype, "navigation", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseVerticalNavigationComponent.prototype, "opened", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseVerticalNavigationComponent.prototype, "position", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseVerticalNavigationComponent.prototype, "transparentOverlay", void 0);
    tslib_1.__decorate([
        (0, core_1.Output)(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], FuseVerticalNavigationComponent.prototype, "navigationSideBarOpened", void 0);
    tslib_1.__decorate([
        (0, core_1.Output)(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], FuseVerticalNavigationComponent.prototype, "appearanceChanged", void 0);
    tslib_1.__decorate([
        (0, core_1.Output)(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], FuseVerticalNavigationComponent.prototype, "modeChanged", void 0);
    tslib_1.__decorate([
        (0, core_1.Output)(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], FuseVerticalNavigationComponent.prototype, "openedChanged", void 0);
    tslib_1.__decorate([
        (0, core_1.Output)(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], FuseVerticalNavigationComponent.prototype, "positionChanged", void 0);
    tslib_1.__decorate([
        (0, core_1.ViewChild)('navigationContent'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], FuseVerticalNavigationComponent.prototype, "_navigationContentEl", void 0);
    tslib_1.__decorate([
        (0, core_1.HostBinding)('class'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseVerticalNavigationComponent.prototype, "classList", null);
    tslib_1.__decorate([
        (0, core_1.HostBinding)('style'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseVerticalNavigationComponent.prototype, "styleList", null);
    tslib_1.__decorate([
        (0, core_1.ViewChildren)(scrollbar_directive_1.FuseScrollbarDirective),
        tslib_1.__metadata("design:type", core_1.QueryList),
        tslib_1.__metadata("design:paramtypes", [core_1.QueryList])
    ], FuseVerticalNavigationComponent.prototype, "fuseScrollbarDirectives", null);
    FuseVerticalNavigationComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-vertical-navigation',
            templateUrl: './vertical.component.html',
            styleUrls: ['./vertical.component.scss'],
            animations: animations_2.fuseAnimations,
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            exportAs: 'fuseVerticalNavigation'
        }),
        tslib_1.__metadata("design:paramtypes", [animations_1.AnimationBuilder,
            core_1.ChangeDetectorRef,
            core_1.ElementRef,
            core_1.Renderer2,
            router_1.Router,
            overlay_1.ScrollStrategyOptions,
            navigation_service_1.FuseNavigationService,
            utils_service_1.FuseUtilsService])
    ], FuseVerticalNavigationComponent);
    return FuseVerticalNavigationComponent;
}());
exports.FuseVerticalNavigationComponent = FuseVerticalNavigationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVydGljYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQ0FBd1I7QUFDeFIsa0RBQXdGO0FBQ3hGLDBDQUF3RDtBQUN4RCxnREFBNkU7QUFDN0UsNkJBQW1FO0FBQ25FLDRDQUEwRDtBQUMxRCwrQ0FBa0Q7QUFFbEQscUZBQXVGO0FBQ3ZGLHNGQUF3RjtBQUN4RixvRUFBc0U7QUFDdEUsa0RBQTRFO0FBVzVFO0lBd0NJOztPQUVHO0lBQ0gseUNBQ1ksaUJBQW1DLEVBQ25DLGtCQUFxQyxFQUNyQyxXQUF1QixFQUN2QixVQUFxQixFQUNyQixPQUFlLEVBQ2Ysc0JBQTZDLEVBQzdDLHNCQUE2QyxFQUM3QyxpQkFBbUM7UUFSL0MsaUJBaUJDO1FBaEJXLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO1FBQzdDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7UUFDN0Msc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQTdDL0Msd0RBQXdEO1FBRS9DLGVBQVUsR0FBcUMsU0FBUyxDQUFDO1FBQ3pELGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsU0FBSSxHQUErQixNQUFNLENBQUM7UUFDMUMsU0FBSSxHQUFXLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqRCxXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGFBQVEsR0FBbUMsTUFBTSxDQUFDO1FBQ2xELHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNuQyw0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