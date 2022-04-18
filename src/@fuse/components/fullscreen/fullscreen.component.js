"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseFullscreenComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var FuseFullscreenComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseFullscreenComponent(_document) {
        this._document = _document;
        this._isFullscreen = false;
        this._fsDoc = _document;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FuseFullscreenComponent.prototype.ngOnInit = function () {
        this._fsDocEl = document.documentElement;
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle the fullscreen mode
     */
    FuseFullscreenComponent.prototype.toggleFullscreen = function () {
        // Check if the fullscreen is open
        this._isFullscreen = this._getBrowserFullscreenElement() !== null;
        // Toggle the fullscreen
        if (this._isFullscreen) {
            this._closeFullscreen();
        }
        else {
            this._openFullscreen();
        }
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Get browser's fullscreen element
     *
     * @private
     */
    FuseFullscreenComponent.prototype._getBrowserFullscreenElement = function () {
        if (typeof this._fsDoc.fullscreenElement !== 'undefined') {
            return this._fsDoc.fullscreenElement;
        }
        if (typeof this._fsDoc.mozFullScreenElement !== 'undefined') {
            return this._fsDoc.mozFullScreenElement;
        }
        if (typeof this._fsDoc.msFullscreenElement !== 'undefined') {
            return this._fsDoc.msFullscreenElement;
        }
        if (typeof this._fsDoc.webkitFullscreenElement !== 'undefined') {
            return this._fsDoc.webkitFullscreenElement;
        }
        throw new Error('Fullscreen mode is not supported by this browser');
    };
    /**
     * Open the fullscreen
     *
     * @private
     */
    FuseFullscreenComponent.prototype._openFullscreen = function () {
        if (this._fsDocEl.requestFullscreen) {
            this._fsDocEl.requestFullscreen();
            return;
        }
        // Firefox
        if (this._fsDocEl.mozRequestFullScreen) {
            this._fsDocEl.mozRequestFullScreen();
            return;
        }
        // Chrome, Safari and Opera
        if (this._fsDocEl.webkitRequestFullscreen) {
            this._fsDocEl.webkitRequestFullscreen();
            return;
        }
        // IE/Edge
        if (this._fsDocEl.msRequestFullscreen) {
            this._fsDocEl.msRequestFullscreen();
            return;
        }
    };
    /**
     * Close the fullscreen
     *
     * @private
     */
    FuseFullscreenComponent.prototype._closeFullscreen = function () {
        if (this._fsDoc.exitFullscreen) {
            this._fsDoc.exitFullscreen();
            return;
        }
        // Firefox
        if (this._fsDoc.mozCancelFullScreen) {
            this._fsDoc.mozCancelFullScreen();
            return;
        }
        // Chrome, Safari and Opera
        if (this._fsDoc.webkitExitFullscreen) {
            this._fsDoc.webkitExitFullscreen();
            return;
        }
        // IE/Edge
        else if (this._fsDoc.msExitFullscreen) {
            this._fsDoc.msExitFullscreen();
            return;
        }
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", core_1.TemplateRef)
    ], FuseFullscreenComponent.prototype, "iconTpl", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseFullscreenComponent.prototype, "tooltip", void 0);
    FuseFullscreenComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-fullscreen',
            templateUrl: './fullscreen.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            exportAs: 'fuseFullscreen'
        }),
        tslib_1.__param(0, (0, core_1.Inject)(common_1.DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [Document])
    ], FuseFullscreenComponent);
    return FuseFullscreenComponent;
}());
exports.FuseFullscreenComponent = FuseFullscreenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmdWxsc2NyZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQTBIO0FBQzFILDBDQUEyQztBQVUzQztJQVFJOztPQUVHO0lBQ0gsaUNBQXNDLFNBQW1CO1FBQW5CLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFMakQsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFPbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUF1QixDQUFDO0lBQzFDLENBQUM7SUFFRCx3R0FBd0c7SUFDeEcsb0JBQW9CO0lBQ3BCLHdHQUF3RztJQUV4Rzs7T0FFRztJQUNILDBDQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxlQUFvQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCx3R0FBd0c7SUFDeEcsbUJBQW1CO0lBQ25CLHdHQUF3RztJQUV4Rzs7T0FFRztJQUNILGtEQUFnQixHQUFoQjtRQUVJLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLElBQUksQ0FBQztRQUVsRSx3QkFBd0I7UUFDeEIsSUFBSyxJQUFJLENBQUMsYUFBYSxFQUN2QjtZQUNJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNCO2FBRUQ7WUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQsd0dBQXdHO0lBQ3hHLG9CQUFvQjtJQUNwQix3R0FBd0c7SUFFeEc7Ozs7T0FJRztJQUNLLDhEQUE0QixHQUFwQztRQUVJLElBQUssT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixLQUFLLFdBQVcsRUFDekQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7U0FDeEM7UUFFRCxJQUFLLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxv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