"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseDrawerComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var drawer_service_1 = require("@fuse/components/drawer/drawer.service");
var utils_service_1 = require("@fuse/services/utils/utils.service");
var coercion_1 = require("@angular/cdk/coercion");
var FuseDrawerComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseDrawerComponent(_animationBuilder, _elementRef, _renderer2, _fuseDrawerService, _fuseUtilsService) {
        this._animationBuilder = _animationBuilder;
        this._elementRef = _elementRef;
        this._renderer2 = _renderer2;
        this._fuseDrawerService = _fuseDrawerService;
        this._fuseUtilsService = _fuseUtilsService;
        /* eslint-enable @typescript-eslint/naming-convention */
        this.fixed = false;
        this.mode = 'side';
        this.name = this._fuseUtilsService.randomId();
        this.opened = false;
        this.position = 'left';
        this.transparentOverlay = false;
        this.fixedChanged = new core_1.EventEmitter();
        this.modeChanged = new core_1.EventEmitter();
        this.openedChanged = new core_1.EventEmitter();
        this.positionChanged = new core_1.EventEmitter();
        this._animationsEnabled = false;
        this._hovered = false;
    }
    Object.defineProperty(FuseDrawerComponent.prototype, "classList", {
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Host binding for component classes
         */
        get: function () {
            var _a;
            return _a = {
                    'fuse-drawer-animations-enabled': this._animationsEnabled,
                    'fuse-drawer-fixed': this.fixed,
                    'fuse-drawer-hover': this._hovered
                },
                _a["fuse-drawer-mode-".concat(this.mode)] = true,
                _a['fuse-drawer-opened'] = this.opened,
                _a["fuse-drawer-position-".concat(this.position)] = true,
                _a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuseDrawerComponent.prototype, "styleList", {
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
    // -----------------------------------------------------------------------------------------------------
    // @ Decorated methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * On mouseenter
     *
     * @private
     */
    FuseDrawerComponent.prototype._onMouseenter = function () {
        // Enable the animations
        this._enableAnimations();
        // Set the hovered
        this._hovered = true;
    };
    /**
     * On mouseleave
     *
     * @private
     */
    FuseDrawerComponent.prototype._onMouseleave = function () {
        // Enable the animations
        this._enableAnimations();
        // Set the hovered
        this._hovered = false;
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On changes
     *
     * @param changes
     */
    FuseDrawerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // Fixed
        if ('fixed' in changes) {
            // Coerce the value to a boolean
            this.fixed = (0, coercion_1.coerceBooleanProperty)(changes.fixed.currentValue);
            // Execute the observable
            this.fixedChanged.next(this.fixed);
        }
        // Mode
        if ('mode' in changes) {
            // Get the previous and current values
            var previousMode = changes.mode.previousValue;
            var currentMode = changes.mode.currentValue;
            // Disable the animations
            this._disableAnimations();
            // If the mode changes: 'over -> side'
            if (previousMode === 'over' && currentMode === 'side') {
                // Hide the overlay
                this._hideOverlay();
            }
            // If the mode changes: 'side -> over'
            if (previousMode === 'side' && currentMode === 'over') {
                // If the drawer is opened
                if (this.opened) {
                    // Show the overlay
                    this._showOverlay();
                }
            }
            // Execute the observable
            this.modeChanged.next(currentMode);
            // Enable the animations after a delay
            // The delay must be bigger than the current transition-duration
            // to make sure nothing will be animated while the mode is changing
            setTimeout(function () {
                _this._enableAnimations();
            }, 500);
        }
        // Opened
        if ('opened' in changes) {
            // Coerce the value to a boolean
            var open_1 = (0, coercion_1.coerceBooleanProperty)(changes.opened.currentValue);
            // Open/close the drawer
            this._toggleOpened(open_1);
        }
        // Position
        if ('position' in changes) {
            // Execute the observable
            this.positionChanged.next(this.position);
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
    FuseDrawerComponent.prototype.ngOnInit = function () {
        // Register the drawer
        this._fuseDrawerService.registerComponent(this.name, this);
    };
    /**
     * On destroy
     */
    FuseDrawerComponent.prototype.ngOnDestroy = function () {
        // Deregister the drawer from the registry
        this._fuseDrawerService.deregisterComponent(this.name);
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Open the drawer
     */
    FuseDrawerComponent.prototype.open = function () {
        // Return if the drawer has already opened
        if (this.opened) {
            return;
        }
        // Open the drawer
        this._toggleOpened(true);
    };
    /**
     * Close the drawer
     */
    FuseDrawerComponent.prototype.close = function () {
        // Return if the drawer has already closed
        if (!this.opened) {
            return;
        }
        // Close the drawer
        this._toggleOpened(false);
    };
    /**
     * Toggle the drawer
     */
    FuseDrawerComponent.prototype.toggle = function () {
        if (this.opened) {
            this.close();
        }
        else {
            this.open();
        }
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Enable the animations
     *
     * @private
     */
    FuseDrawerComponent.prototype._enableAnimations = function () {
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
    FuseDrawerComponent.prototype._disableAnimations = function () {
        // Return if the animations are already disabled
        if (!this._animationsEnabled) {
            return;
        }
        // Disable the animations
        this._animationsEnabled = false;
    };
    /**
     * Show the backdrop
     *
     * @private
     */
    FuseDrawerComponent.prototype._showOverlay = function () {
        var _this = this;
        // Create the backdrop element
        this._overlay = this._renderer2.createElement('div');
        // Return if overlay couldn't be create for some reason
        if (!this._overlay) {
            return;
        }
        // Add a class to the backdrop element
        this._overlay.classList.add('fuse-drawer-overlay');
        // Add a class depending on the fixed option
        if (this.fixed) {
            this._overlay.classList.add('fuse-drawer-overlay-fixed');
        }
        // Add a class depending on the transparentOverlay option
        if (this.transparentOverlay) {
            this._overlay.classList.add('fuse-drawer-overlay-transparent');
        }
        // Append the backdrop to the parent of the drawer
        this._renderer2.appendChild(this._elementRef.nativeElement.parentElement, this._overlay);
        // Create the enter animation and attach it to the player
        this._player = this._animationBuilder.build([
            (0, animations_1.animate)('300ms cubic-bezier(0.25, 0.8, 0.25, 1)', (0, animations_1.style)({ opacity: 1 }))
        ]).create(this._overlay);
        // Once the animation is done...
        this._player.onDone(function () {
            // Destroy the player
            _this._player.destroy();
        });
        // Play the animation
        this._player.play();
        // Add an event listener to the overlay
        this._overlay.addEventListener('click', function () {
            _this.close();
        });
    };
    /**
     * Hide the backdrop
     *
     * @private
     */
    FuseDrawerComponent.prototype._hideOverlay = function () {
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
            // Destroy the player
            _this._player.destroy();
            // If the backdrop still exists...
            if (_this._overlay) {
                // Remove the backdrop
                _this._overlay.parentNode.removeChild(_this._overlay);
                _this._overlay = null;
            }
        });
    };
    /**
     * Open/close the drawer
     *
     * @param open
     * @private
     */
    FuseDrawerComponent.prototype._toggleOpened = function (open) {
        // Set the opened
        this.opened = open;
        // Enable the animations
        this._enableAnimations();
        // If the mode is 'over'
        if (this.mode === 'over') {
            // If the drawer opens, show the overlay
            if (open) {
                this._showOverlay();
            }
            // Otherwise, close the overlay
            else {
                this._hideOverlay();
            }
        }
        // Execute the observable
        this.openedChanged.next(open);
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseDrawerComponent.prototype, "fixed", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseDrawerComponent.prototype, "mode", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseDrawerComponent.prototype, "name", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseDrawerComponent.prototype, "opened", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseDrawerComponent.prototype, "position", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseDrawerComponent.prototype, "transparentOverlay", void 0);
    tslib_1.__decorate([
        (0, core_1.Output)(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], FuseDrawerComponent.prototype, "fixedChanged", void 0);
    tslib_1.__decorate([
        (0, core_1.Output)(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], FuseDrawerComponent.prototype, "modeChanged", void 0);
    tslib_1.__decorate([
        (0, core_1.Output)(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], FuseDrawerComponent.prototype, "openedChanged", void 0);
    tslib_1.__decorate([
        (0, core_1.Output)(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], FuseDrawerComponent.prototype, "positionChanged", void 0);
    tslib_1.__decorate([
        (0, core_1.HostBinding)('class'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseDrawerComponent.prototype, "classList", null);
    tslib_1.__decorate([
        (0, core_1.HostBinding)('style'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseDrawerComponent.prototype, "styleList", null);
    tslib_1.__decorate([
        (0, core_1.HostListener)('mouseenter'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], FuseDrawerComponent.prototype, "_onMouseenter", null);
    tslib_1.__decorate([
        (0, core_1.HostListener)('mouseleave'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], FuseDrawerComponent.prototype, "_onMouseleave", null);
    FuseDrawerComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-drawer',
            templateUrl: './drawer.component.html',
            styleUrls: ['./drawer.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            exportAs: 'fuseDrawer'
        }),
        tslib_1.__metadata("design:paramtypes", [animations_1.AnimationBuilder,
            core_1.ElementRef,
            core_1.Renderer2,
            drawer_service_1.FuseDrawerService,
            utils_service_1.FuseUtilsService])
    ], FuseDrawerComponent);
    return FuseDrawerComponent;
}());
exports.FuseDrawerComponent = FuseDrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUF5TDtBQUN6TCxrREFBd0Y7QUFFeEYseUVBQTJFO0FBQzNFLG9FQUFzRTtBQUN0RSxrREFBNEU7QUFTNUU7SUF3Qkk7O09BRUc7SUFDSCw2QkFDWSxpQkFBbUMsRUFDbkMsV0FBdUIsRUFDdkIsVUFBcUIsRUFDckIsa0JBQXFDLEVBQ3JDLGlCQUFtQztRQUpuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBMUIvQyx3REFBd0Q7UUFFL0MsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixTQUFJLEdBQW1CLE1BQU0sQ0FBQztRQUM5QixTQUFJLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pELFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsYUFBUSxHQUF1QixNQUFNLENBQUM7UUFDdEMsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQTBCLElBQUksbUJBQVksRUFBVyxDQUFDO1FBQ2xFLGdCQUFXLEdBQWlDLElBQUksbUJBQVksRUFBa0IsQ0FBQztRQUMvRSxrQkFBYSxHQUEwQixJQUFJLG1CQUFZLEVBQVcsQ0FBQztRQUNuRSxvQkFBZSxHQUFxQyxJQUFJLG1CQUFZLEVBQXNCLENBQUM7UUFFdEcsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFlbEMsQ0FBQztJQVNxQixzQkFBSSwwQ0FBUztRQVBuQyx3R0FBd0c7UUFDeEcsY0FBYztRQUNkLHdHQUF3RztRQUV4Rzs7V0FFRzthQUNtQjs7WUFFbEI7b0JBQ0ksZ0NBQWdDLEVBQVcsSUFBSSxDQUFDLGtCQUFrQjtvQkFDbEUsbUJBQW1CLEVBQXdCLElBQUksQ0FBQyxLQUFLO29CQUNyRCxtQkFBbUIsRUFBd0IsSUFBSSxDQUFDLFFBQVE7O2dCQUN4RCxHQUFDLDJCQUFvQixJQUFJLENBQUMsSUFBSSxDQUFFLElBQVcsSUFBSTtnQkFDL0Msd0JBQW9CLEdBQXVCLElBQUksQ0FBQyxNQUFNO2dCQUN0RCxHQUFDLCtCQUF3QixJQUFJLENBQUMsUUFBUSxDQUFFLElBQUcsSUFBSTttQkFDakQ7UUFDTixDQUFDOzs7T0FBQTtJQUtxQixzQkFBSSwwQ0FBUztRQUhuQzs7V0FFRzthQUNtQjtZQUVsQixPQUFPO2dCQUNILFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVE7YUFDbkQsQ0FBQztRQUNOLENBQUM7OztPQUFBO0lBRUQsd0dBQXdHO0lBQ3hHLHNCQUFzQjtJQUN0Qix3R0FBd0c7SUFFeEc7Ozs7T0FJRztJQUVLLDJDQUFhLEdBQXJCO1FBRUksd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUVLLDJDQUFhLEdBQXJCO1FBRUksd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsd0dBQXdHO0lBQ3hHLG9CQUFvQjtJQUNwQix3R0FBd0c7SUFFeEc7Ozs7T0FJRztJQUNILHlDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUFsQyxpQkEwRUM7UUF4RUcsUUFBUTtRQUNSLElBQUssT0FBTyxJQUFJLE9BQU8sRUFDdkI7WUFDSSxnQ0FBZ0M7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFBLGdDQUFxQixFQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFL0QseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QztRQUVELE9BQU87UUFDUCxJQUFLLE1BQU0sSUFBSSxPQUFPLEVBQ3RCO1lBQ0ksc0NBQXNDO1lBQ3RDLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ2hELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTlDLHlCQUF5QjtZQUN6QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUUxQixzQ0FBc0M7WUFDdEMsSUFBSyxZQUFZLEtBQUssTUFBTSxJQUFJLFdBQVcsS0FBSyxNQUFNLEVBQ3REO2dCQUNJLG1CQUFtQjtnQkFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3ZCO1lBRUQsc0NBQXNDO1lBQ3RDLElBQUssWUFBWSxLQUFLLE1BQU0sSUFBSSxXQUFXLEtBQUssTUFBTSxFQUN0RDtnQkFDSSwwQkFBMEI7Z0JBQzFCLElBQUssSUFBSSxDQUFDLE1BQU0sRUFDaEI7b0JBQ0ksbUJBQW1CO29CQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3ZCO2FBQ0o7WUFFRCx5QkFBeUI7WUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFbkMsc0NBQXNDO1lBQ3RDLGdFQUFnRTtZQUNoRSxtRUFBbUU7WUFDbkUsVUFBVSxDQUFDO2dCQUNQLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzdCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNYO1FBRUQsU0FBUztRQUNULElBQUssUUFBUSxJQUFJLE9BQU8sRUFDeEI7WUFDSSxnQ0FBZ0M7WUFDaEMsSUFBTSxNQUFJLEdBQUcsSUFBQSxnQ0FBcUIsRUFBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRWhFLHdCQUF3QjtZQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQUksQ0FBQyxDQUFDO1NBQzVCO1FBRUQsV0FBVztRQUNYLElBQUssVUFBVSxJQUFJLE9BQU8sRUFDMUI7WUFDSSx5QkFBeUI7WUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDO1FBRUQsc0JBQXNCO1FBQ3RCLElBQUssb0JBQW9CLElBQUksT0FBTyxFQUNwQztZQUNJLGdDQUFnQztZQUNoQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBQSxnQ0FBcUIsRUFBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDNUY7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQ0FBUSxHQUFSO1FBRUksc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7T0FFRztJQUNILHlDQUFXLEdBQVg7UUFFSSwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsd0dBQXdHO0lBQ3hHLG1CQUFtQjtJQUNuQix3R0FBd0c7SUFFeEc7O09BRUc7SUFDSCxrQ0FBSSxHQUFKO1FBRUksMENBQTBDO1FBQzFDLElBQUssSUFBSSxDQUFDLE1BQU0sRUFDaEI7WUFDSSxPQUFPO1NBQ1Y7UUFFRCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxtQ0FBSyxHQUFMO1FBRUksMENBQTBDO1FBQzFDLElBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNqQjtZQUNJLE9BQU87U0FDVjtRQUVELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7T0FFRztJQUNILG9DQUFNLEdBQU47UUFFSSxJQUFLLElBQUksQ0FBQyxNQUFNLEVBQ2hCO1lBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO2FBRUQ7WUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFRCx3R0FBd0c7SUFDeEcsb0JBQW9CO0lBQ3BCLHdHQUF3RztJQUV4Rzs7OztPQUlHO0lBQ0ssK0NBQWlCLEdBQXpCO1FBRUksK0NBQStDO1FBQy9DLElBQUssSUFBSSxDQUFDLGtCQUFrQixFQUM1QjtZQUNJLE9BQU87U0FDVjtRQUVELHdCQUF3QjtRQUN4QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssZ0RBQWtCLEdBQTFCO1FBRUksZ0RBQWdEO1FBQ2hELElBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQzdCO1lBQ0ksT0FBTztTQUNWO1FBRUQseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSywwQ0FBWSxHQUFwQjtRQUFBLGlCQWdEQztRQTlDRyw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRCx1REFBdUQ7UUFDdkQsSUFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQ25CO1lBQ0ksT0FBTztTQUNWO1FBRUQsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRW5ELDRDQUE0QztRQUM1QyxJQUFLLElBQUksQ0FBQyxLQUFLLEVBQ2Y7WUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUM1RDtRQUVELHlEQUF5RDtRQUN6RCxJQUFLLElBQUksQ0FBQyxrQkFBa0IsRUFDNUI7WUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUNsRTtRQUVELGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpGLHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFDeEMsSUFBQSxvQkFBTyxFQUFDLHdDQUF3QyxFQUFFLElBQUEsa0JBQUssRUFBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ3pFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpCLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUVoQixxQkFBcUI7WUFDckIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILHFCQUFxQjtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXBCLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUNwQyxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLDBDQUFZLEdBQXBCO1FBQUEsaUJBNkJDO1FBM0JHLElBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUNuQjtZQUNJLE9BQU87U0FDVjtRQUVELHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFDeEMsSUFBQSxvQkFBTyxFQUFDLHdDQUF3QyxFQUFFLElBQUEsa0JBQUssRUFBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ3pFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpCLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXBCLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUVoQixxQkFBcUI7WUFDckIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV2QixrQ0FBa0M7WUFDbEMsSUFBSyxLQUFJLENBQUMsUUFBUSxFQUNsQjtnQkFDSSxzQkFBc0I7Z0JBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3hCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSywyQ0FBYSxHQUFyQixVQUFzQixJQUFhO1FBRS9CLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsd0JBQXdCO1FBQ3hCLElBQUssSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQ3pCO1lBQ0ksd0NBQXdDO1lBQ3hDLElBQUssSUFBSSxFQUNUO2dCQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2QjtZQUNELCtCQUErQjtpQkFFL0I7Z0JBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3ZCO1NBQ0o7UUFFRCx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQXBaUTtRQUFSLElBQUEsWUFBSyxHQUFFOztzREFBd0I7SUFDdkI7UUFBUixJQUFBLFlBQUssR0FBRTs7cURBQStCO0lBQzlCO1FBQVIsSUFBQSxZQUFLLEdBQUU7O3FEQUFrRDtJQUNqRDtRQUFSLElBQUEsWUFBSyxHQUFFOzt1REFBeUI7SUFDeEI7UUFBUixJQUFBLFlBQUssR0FBRTs7eURBQXVDO0lBQ3RDO1FBQVIsSUFBQSxZQUFLLEdBQUU7O21FQUFxQztJQUNuQztRQUFULElBQUEsYUFBTSxHQUFFOzBDQUF3QixtQkFBWTs2REFBd0M7SUFDM0U7UUFBVCxJQUFBLGFBQU0sR0FBRTswQ0FBdUIsbUJBQVk7NERBQXNEO0lBQ3hGO1FBQVQsSUFBQSxhQUFNLEdBQUU7MENBQXlCLG1CQUFZOzhEQUF3QztJQUM1RTtRQUFULElBQUEsYUFBTSxHQUFFOzBDQUEyQixtQkFBWTtnRUFBOEQ7SUEyQnhGO1FBQXJCLElBQUEsa0JBQVcsRUFBQyxPQUFPLENBQUM7Ozt3REFVcEI7SUFLcUI7UUFBckIsSUFBQSxrQkFBVyxFQUFDLE9BQU8sQ0FBQzs7O3dEQUtwQjtJQVlEO1FBREMsSUFBQSxtQkFBWSxFQUFDLFlBQVksQ0FBQzs7Ozs0REFRMUI7SUFRRDtRQURDLElBQUEsbUJBQVksRUFBQyxZQUFZLENBQUM7Ozs7NERBUTFCO0lBbEdRLG1CQUFtQjtRQVAvQixJQUFBLGdCQUFTLEVBQUM7WUFDUCxRQUFRLEVBQU8sYUFBYTtZQUM1QixXQUFXLEVBQUkseUJBQXlCO1lBQ3hDLFNBQVMsRUFBTSxDQUFDLHlCQUF5QixDQUFDO1lBQzFDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFFBQVEsRUFBTyxZQUFZO1NBQzlCLENBQUM7aURBNkJpQyw2QkFBZ0I7WUFDdEIsaUJBQVU7WUFDWCxnQkFBUztZQUNELGtDQUFpQjtZQUNsQixnQ0FBZ0I7T0FoQ3RDLG1CQUFtQixDQTZaL0I7SUFBRCwwQkFBQztDQUFBLEFBN1pELElBNlpDO0FBN1pZLGtEQUFtQiJ9