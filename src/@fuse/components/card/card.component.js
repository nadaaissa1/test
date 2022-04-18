"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseCardComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var coercion_1 = require("@angular/cdk/coercion");
var animations_1 = require("@fuse/animations");
var FuseCardComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseCardComponent() {
        /* eslint-enable @typescript-eslint/naming-convention */
        this.expanded = false;
        this.face = 'front';
        this.flippable = false;
    }
    Object.defineProperty(FuseCardComponent.prototype, "classList", {
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Host binding for component classes
         */
        get: function () {
            return {
                'fuse-card-expanded': this.expanded,
                'fuse-card-face-back': this.flippable && this.face === 'back',
                'fuse-card-face-front': this.flippable && this.face === 'front',
                'fuse-card-flippable': this.flippable
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
    FuseCardComponent.prototype.ngOnChanges = function (changes) {
        // Expanded
        if ('expanded' in changes) {
            // Coerce the value to a boolean
            this.expanded = (0, coercion_1.coerceBooleanProperty)(changes.expanded.currentValue);
        }
        // Flippable
        if ('flippable' in changes) {
            // Coerce the value to a boolean
            this.flippable = (0, coercion_1.coerceBooleanProperty)(changes.flippable.currentValue);
        }
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseCardComponent.prototype, "expanded", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseCardComponent.prototype, "face", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean)
    ], FuseCardComponent.prototype, "flippable", void 0);
    tslib_1.__decorate([
        (0, core_1.HostBinding)('class'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseCardComponent.prototype, "classList", null);
    FuseCardComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            animations: animations_1.fuseAnimations,
            exportAs: 'fuseCard'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseCardComponent);
    return FuseCardComponent;
}());
exports.FuseCardComponent = FuseCardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQTJHO0FBQzNHLGtEQUE0RTtBQUM1RSwrQ0FBa0Q7QUFXbEQ7SUFXSTs7T0FFRztJQUNIO1FBVEEsd0RBQXdEO1FBRS9DLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsU0FBSSxHQUFpQixPQUFPLENBQUM7UUFDN0IsY0FBUyxHQUFZLEtBQUssQ0FBQztJQU9wQyxDQUFDO0lBU3FCLHNCQUFJLHdDQUFTO1FBUG5DLHdHQUF3RztRQUN4RyxjQUFjO1FBQ2Qsd0dBQXdHO1FBRXhHOztXQUVHO2FBQ21CO1lBRWxCLE9BQU87Z0JBQ0gsb0JBQW9CLEVBQUksSUFBSSxDQUFDLFFBQVE7Z0JBQ3JDLHFCQUFxQixFQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNO2dCQUM5RCxzQkFBc0IsRUFBRSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTztnQkFDL0QscUJBQXFCLEVBQUcsSUFBSSxDQUFDLFNBQVM7YUFDekMsQ0FBQztRQUNOLENBQUM7OztPQUFBO0lBRUQsd0dBQXdHO0lBQ3hHLG9CQUFvQjtJQUNwQix3R0FBd0c7SUFFeEc7Ozs7T0FJRztJQUNILHVDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUU5QixXQUFXO1FBQ1gsSUFBSyxVQUFVLElBQUksT0FBTyxFQUMxQjtZQUNJLGdDQUFnQztZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUEsZ0NBQXFCLEVBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RTtRQUVELFlBQVk7UUFDWixJQUFLLFdBQVcsSUFBSSxPQUFPLEVBQzNCO1lBQ0ksZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBQSxnQ0FBcUIsRUFBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFFO0lBQ0wsQ0FBQztJQXBEUTtRQUFSLElBQUEsWUFBSyxHQUFFOzt1REFBMkI7SUFDMUI7UUFBUixJQUFBLFlBQUssR0FBRTs7bURBQThCO0lBQzdCO1FBQVIsSUFBQSxZQUFLLEdBQUU7O3dEQUE0QjtJQWdCZDtRQUFyQixJQUFBLGtCQUFXLEVBQUMsT0FBTyxDQUFDOzs7c0RBUXBCO0lBakNRLGlCQUFpQjtRQVI3QixJQUFBLGdCQUFTLEVBQUM7WUFDUCxRQUFRLEVBQU8sV0FBVztZQUMxQixXQUFXLEVBQUksdUJBQXVCO1lBQ3RDLFNBQVMsRUFBTSxDQUFDLHVCQUF1QixDQUFDO1lBQ3hDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFVBQVUsRUFBSywyQkFBYztZQUM3QixRQUFRLEVBQU8sVUFBVTtTQUM1QixDQUFDOztPQUNXLGlCQUFpQixDQTREN0I7SUFBRCx3QkFBQztDQUFBLEFBNURELElBNERDO0FBNURZLDhDQUFpQiJ9