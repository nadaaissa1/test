"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseAlertComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var coercion_1 = require("@angular/cdk/coercion");
var animations_1 = require("@fuse/animations");
var alert_service_1 = require("@fuse/components/alert/alert.service");
var utils_service_1 = require("@fuse/services/utils/utils.service");
var FuseAlertComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseAlertComponent(_changeDetectorRef, _fuseAlertService, _fuseUtilsService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._fuseAlertService = _fuseAlertService;
        this._fuseUtilsService = _fuseUtilsService;
        /* eslint-enable @typescript-eslint/naming-convention */
        this.appearance = 'soft';
        this.dismissed = false;
        this.dismissible = false;
        this.name = this._fuseUtilsService.randomId();
        this.showIcon = true;
        this.type = 'primary';
        this.dismissedChanged = new core_1.EventEmitter();
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    Object.defineProperty(FuseAlertComponent.prototype, "classList", {
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Host binding for component classes
         */
        get: function () {
            return {
                'fuse-alert-appearance-border': this.appearance === 'border',
                'fuse-alert-appearance-fill': this.appearance === 'fill',
                'fuse-alert-appearance-outline': this.appearance === 'outline',
                'fuse-alert-appearance-soft': this.appearance === 'soft',
                'fuse-alert-dismissed': this.dismissed,
                'fuse-alert-dismissible': this.dismissible,
                'fuse-alert-show-icon': this.showIcon,
                'fuse-alert-type-primary': this.type === 'primary',
                'fuse-alert-type-accent': this.type === 'accent',
                'fuse-alert-type-warn': this.type === 'warn',
                'fuse-alert-type-basic': this.type === 'basic',
                'fuse-alert-type-info': this.type === 'info',
                'fuse-alert-type-success': this.type === 'success',
                'fuse-alert-type-warning': this.type === 'warning',
                'fuse-alert-type-error': this.type === 'error'
            };
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
    FuseAlertComponent.prototype.ngOnChanges = function (changes) {
        // Dismissed
        if ('dismissed' in changes) {
            // Coerce the value to a boolean
            this.dismissed = (0, coercion_1.coerceBooleanProperty)(changes.dismissed.currentValue);
            // Dismiss/show the alert
            this._toggleDismiss(this.dismissed);
        }
        // Dismissible
        if ('dismissible' in changes) {
            // Coerce the value to a boolean
            this.dismissible = (0, coercion_1.coerceBooleanProperty)(changes.dismissible.currentValue);
        }
        // Show icon
        if ('showIcon' in changes) {
            // Coerce the value to a boolean
            this.showIcon = (0, coercion_1.coerceBooleanProperty)(changes.showIcon.currentValue);
        }
    };
    /**
     * On init
     */
    FuseAlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to the dismiss calls
        this._fuseAlertService.onDismiss
            .pipe((0, operators_1.filter)(function (name) { return _this.name === name; }), (0, operators_1.takeUntil)(this._unsubscribeAll))
            .subscribe(function () {
            // Dismiss the alert
            _this.dismiss();
        });
        // Subscribe to the show calls
        this._fuseAlertService.onShow
            .pipe((0, operators_1.filter)(function (name) { return _this.name === name; }), (0, operators_1.takeUntil)(this._unsubscribeAll))
            .subscribe(function () {
            // Show the alert
            _this.show();
        });
    };
    /**
     * On destroy
     */
    FuseAlertComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Dismiss the alert
     */
    FuseAlertComponent.prototype.dismiss = function () {
        // Return if the alert is already dismissed
        if (this.dismissed) {
            return;
        }
        // Dismiss the alert
        this._toggleDismiss(true);
    };
    /**
     * Show the dismissed alert
     */
    FuseAlertComponent.prototype.show = function () {
        // Return if the alert is already showing
        if (!this.dismissed) {
            return;
        }
        // Show the alert
        this._toggleDismiss(false);
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Dismiss/show the alert
     *
     * @param dismissed
     * @private
     */
    FuseAlertComponent.prototype._toggleDismiss = function (dismissed) {
        // Return if the alert is not dismissible
        if (!this.dismissible) {
            return;
        }
        // Set the dismissed
        this.dismissed = dismissed;
        // Execute the observable
        this.dismissedChanged.next(this.dismissed);
        // Notify the change detector
        this._changeDetectorRef.markForCheck();
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseAlertComponent.prototype, "appearance", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseAlertComponent.prototype, "dismissed", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseAlertComponent.prototype, "dismissible", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseAlertComponent.prototype, "name", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseAlertComponent.prototype, "showIcon", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseAlertComponent.prototype, "type", void 0);
    tslib_1.__decorate([
        (0, core_1.Output)(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], FuseAlertComponent.prototype, "dismissedChanged", void 0);
    tslib_1.__decorate([
        (0, core_1.HostBinding)('class'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseAlertComponent.prototype, "classList", null);
    FuseAlertComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-alert',
            templateUrl: './alert.component.html',
            styleUrls: ['./alert.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            animations: animations_1.fuseAnimations,
            exportAs: 'fuseAlert'
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            alert_service_1.FuseAlertService,
            utils_service_1.FuseUtilsService])
    ], FuseAlertComponent);
    return FuseAlertComponent;
}());
exports.FuseAlertComponent = FuseAlertComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQ0FBZ007QUFDaE0sNkJBQStCO0FBQy9CLDRDQUFtRDtBQUNuRCxrREFBNEU7QUFDNUUsK0NBQWtEO0FBRWxELHNFQUF3RTtBQUN4RSxvRUFBc0U7QUFXdEU7SUFrQkk7O09BRUc7SUFDSCw0QkFDWSxrQkFBcUMsRUFDckMsaUJBQW1DLEVBQ25DLGlCQUFtQztRQUZuQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQWxCL0Msd0RBQXdEO1FBRS9DLGVBQVUsR0FBd0IsTUFBTSxDQUFDO1FBQ3pDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsU0FBSSxHQUFXLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqRCxhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFNBQUksR0FBa0IsU0FBUyxDQUFDO1FBQ3RCLHFCQUFnQixHQUEwQixJQUFJLG1CQUFZLEVBQVcsQ0FBQztRQUVqRixvQkFBZSxHQUFpQixJQUFJLGNBQU8sRUFBTyxDQUFDO0lBVzNELENBQUM7SUFTcUIsc0JBQUkseUNBQVM7UUFQbkMsd0dBQXdHO1FBQ3hHLGNBQWM7UUFDZCx3R0FBd0c7UUFFeEc7O1dBRUc7YUFDbUI7WUFFbEIsT0FBTztnQkFDSCw4QkFBOEIsRUFBRyxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVE7Z0JBQzdELDRCQUE0QixFQUFLLElBQUksQ0FBQyxVQUFVLEtBQUssTUFBTTtnQkFDM0QsK0JBQStCLEVBQUUsSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTO2dCQUM5RCw0QkFBNEIsRUFBSyxJQUFJLENBQUMsVUFB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