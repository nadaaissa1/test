"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseHighlightComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var highlight_service_1 = require("@fuse/components/highlight/highlight.service");
var FuseHighlightComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseHighlightComponent(_changeDetectorRef, _domSanitizer, _elementRef, _renderer2, _fuseHighlightService, _viewContainerRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._domSanitizer = _domSanitizer;
        this._elementRef = _elementRef;
        this._renderer2 = _renderer2;
        this._fuseHighlightService = _fuseHighlightService;
        this._viewContainerRef = _viewContainerRef;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On changes
     *
     * @param changes
     */
    FuseHighlightComponent.prototype.ngOnChanges = function (changes) {
        // Code & Lang
        if ('code' in changes || 'lang' in changes) {
            // Return if the viewContainerRef is not available
            if (!this._viewContainerRef.length) {
                return;
            }
            // Highlight and insert the code
            this._highlightAndInsert();
        }
    };
    /**
     * After view init
     */
    FuseHighlightComponent.prototype.ngAfterViewInit = function () {
        // Return if there is no language set
        if (!this.lang) {
            return;
        }
        // If there is no code input, get the code from
        // the textarea
        if (!this.code) {
            // Get the code
            this.code = this._elementRef.nativeElement.value;
        }
        // Highlight and insert
        this._highlightAndInsert();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Highlight and insert the highlighted code
     *
     * @private
     */
    FuseHighlightComponent.prototype._highlightAndInsert = function () {
        // Return if the template reference is not available
        if (!this.templateRef) {
            return;
        }
        // Return if the code or language is not defined
        if (!this.code || !this.lang) {
            return;
        }
        // Destroy the component if there is already one
        if (this._viewRef) {
            this._viewRef.destroy();
            this._viewRef = null;
        }
        // Highlight and sanitize the code just in case
        this.highlightedCode = this._domSanitizer.sanitize(core_1.SecurityContext.HTML, this._fuseHighlightService.highlight(this.code, this.lang));
        // Return if the highlighted code is null
        if (this.highlightedCode === null) {
            return;
        }
        // Render and insert the template
        this._viewRef = this._viewContainerRef.createEmbeddedView(this.templateRef, {
            highlightedCode: this.highlightedCode,
            lang: this.lang
        });
        // Detect the changes
        this._viewRef.detectChanges();
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseHighlightComponent.prototype, "code", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String)
    ], FuseHighlightComponent.prototype, "lang", void 0);
    tslib_1.__decorate([
        (0, core_1.ViewChild)(core_1.TemplateRef),
        tslib_1.__metadata("design:type", core_1.TemplateRef)
    ], FuseHighlightComponent.prototype, "templateRef", void 0);
    FuseHighlightComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'textarea[fuse-highlight]',
            templateUrl: './highlight.component.html',
            styleUrls: ['./highlight.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            exportAs: 'fuseHighlight'
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            platform_browser_1.DomSanitizer,
            core_1.ElementRef,
            core_1.Renderer2,
            highlight_service_1.FuseHighlightService,
            core_1.ViewContainerRef])
    ], FuseHighlightComponent);
    return FuseHighlightComponent;
}());
exports.FuseHighlightComponent = FuseHighlightComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUE0UDtBQUM1UCw4REFBeUQ7QUFDekQsa0ZBQW9GO0FBVXBGO0lBU0k7O09BRUc7SUFDSCxnQ0FDWSxrQkFBcUMsRUFDckMsYUFBMkIsRUFDM0IsV0FBdUIsRUFDdkIsVUFBcUIsRUFDckIscUJBQTJDLEVBQzNDLGlCQUFtQztRQUxuQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtRQUMzQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0lBRy9DLENBQUM7SUFFRCx3R0FBd0c7SUFDeEcsb0JBQW9CO0lBQ3BCLHdHQUF3RztJQUV4Rzs7OztPQUlHO0lBQ0gsNENBQVcsR0FBWCxVQUFZLE9BQXNCO1FBRTlCLGNBQWM7UUFDZCxJQUFLLE1BQU0sSUFBSSxPQUFPLElBQUksTUFBTSxJQUFJLE9BQU8sRUFDM0M7WUFDSSxrREFBa0Q7WUFDbEQsSUFBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQ25DO2dCQUNJLE9BQU87YUFDVjtZQUVELGdDQUFnQztZQUNoQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILGdEQUFlLEdBQWY7UUFFSSxxQ0FBcUM7UUFDckMsSUFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ2Y7WUFDSSxPQUFPO1NBQ1Y7UUFFRCwrQ0FBK0M7UUFDL0MsZUFBZTtRQUNmLElBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUNmO1lBQ0ksZUFBZTtZQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1NBQ3BEO1FBRUQsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCx3R0FBd0c7SUFDeEcsb0JBQW9CO0lBQ3BCLHdHQUF3RztJQUV4Rzs7OztPQUlHO0lBQ0ssb0RBQW1CLEdBQTNCO1FBRUksb0RBQW9EO1FBQ3BELElBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUN0QjtZQUNJLE9BQU87U0FDVjtRQUVELGdEQUFnRDtRQUNoRCxJQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQzdCO1lBQ0ksT0FBTztTQUNWO1FBRUQsZ0RBQWdEO1FBQ2hELElBQUssSUFBSSxDQUFDLFFBQVEsRUFDbEI7WUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO1FBRUQsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsc0JBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXJJLHlDQUF5QztRQUN6QyxJQUFLLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxFQUNsQztZQUNJLE9BQU87U0FDVjtRQUVELGlDQUFpQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hFLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxJQUFJLEVBQWEsSUFBSSxDQUFDLElBQUk7U0FDN0IsQ0FBQyxDQUFDO1FBRUgscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQXBIUTtRQUFSLElBQUEsWUFBSyxHQUFFOzt3REFBYztJQUNiO1FBQVIsSUFBQSxZQUFLLEdBQUU7O3dEQUFjO0lBQ0U7UUFBdkIsSUFBQSxnQkFBUyxFQUFDLGtCQUFXLENBQUM7MENBQWMsa0JBQVc7K0RBQU07SUFKN0Msc0JBQXNCO1FBUmxDLElBQUEsZ0JBQVMsRUFBQztZQUNQLFFBQVEsRUFBUywwQkFBMEI7WUFDM0MsV0FBVyxFQUFNLDRCQUE0QjtZQUM3QyxTQUFTLEVBQVEsQ0FBQyw0QkFBNEIsQ0FBQztZQUMvQyxhQUFhLEVBQUksd0JBQWlCLENBQUMsSUFBSTtZQUN2QyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtZQUMvQyxRQUFRLEVBQVMsZUFBZTtTQUNuQyxDQUFDO2lEQWNrQyx3QkFBaUI7WUFDdEIsK0JBQVk7WUFDZCxpQkFBVTtZQUNYLGdCQUFTO1lBQ0Usd0NBQW9CO1lBQ3hCLHVCQUFnQjtPQWxCdEMsc0JBQXNCLENBdUhsQztJQUFELDZCQUFDO0NBQUEsQUF2SEQsSUF1SEM7QUF2SFksd0RBQXNCIn0=