"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseMasonryComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var animations_1 = require("@fuse/animations");
var media_watcher_1 = require("@fuse/services/media-watcher");
var FuseMasonryComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseMasonryComponent(_fuseMediaWatcherService) {
        this._fuseMediaWatcherService = _fuseMediaWatcherService;
        this.items = [];
        this.distributedColumns = [];
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On changes
     *
     * @param changes
     */
    FuseMasonryComponent.prototype.ngOnChanges = function (changes) {
        // Columns
        if ('columns' in changes) {
            // Distribute the items
            this._distributeItems();
        }
        // Items
        if ('items' in changes) {
            // Distribute the items
            this._distributeItems();
        }
    };
    /**
     * After view init
     */
    FuseMasonryComponent.prototype.ngAfterViewInit = function () {
        // Distribute the items for the first time
        this._distributeItems();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Distribute items into columns
     */
    FuseMasonryComponent.prototype._distributeItems = function () {
        // Return an empty array if there are no items
        if (this.items.length === 0) {
            this.distributedColumns = [];
            return;
        }
        // Prepare the distributed columns array
        this.distributedColumns = Array.from(Array(this.columns), function (item) { return ({ items: [] }); });
        // Distribute the items to columns
        for (var i = 0; i < this.items.length; i++) {
            this.distributedColumns[i % this.columns].items.push(this.items[i]);
        }
    };
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", core_1.TemplateRef)
    ], FuseMasonryComponent.prototype, "columnsTemplate", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Number)
    ], FuseMasonryComponent.prototype, "columns", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Array)
    ], FuseMasonryComponent.prototype, "items", void 0);
    FuseMasonryComponent = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-masonry',
            templateUrl: './masonry.component.html',
            styleUrls: ['./masonry.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            animations: animations_1.fuseAnimations,
            exportAs: 'fuseMasonry'
        }),
        tslib_1.__metadata("design:paramtypes", [media_watcher_1.FuseMediaWatcherService])
    ], FuseMasonryComponent);
    return FuseMasonryComponent;
}());
exports.FuseMasonryComponent = FuseMasonryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzb25yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXNvbnJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQTBIO0FBQzFILCtDQUFrRDtBQUNsRCw4REFBdUU7QUFVdkU7SUFPSTs7T0FFRztJQUNILDhCQUFvQix3QkFBaUQ7UUFBakQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUF5QjtRQU41RCxVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQzNCLHVCQUFrQixHQUFVLEVBQUUsQ0FBQztJQU8vQixDQUFDO0lBRUQsd0dBQXdHO0lBQ3hHLG9CQUFvQjtJQUNwQix3R0FBd0c7SUFFeEc7Ozs7T0FJRztJQUNILDBDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUU5QixVQUFVO1FBQ1YsSUFBSyxTQUFTLElBQUksT0FBTyxFQUN6QjtZQUNJLHVCQUF1QjtZQUN2QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQjtRQUVELFFBQVE7UUFDUixJQUFLLE9BQU8sSUFBSSxPQUFPLEVBQ3ZCO1lBQ0ksdUJBQXVCO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsOENBQWUsR0FBZjtRQUVJLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsd0dBQXdHO0lBQ3hHLG9CQUFvQjtJQUNwQix3R0FBd0c7SUFFeEc7O09BRUc7SUFDSywrQ0FBZ0IsR0FBeEI7UUFFSSw4Q0FBOEM7UUFDOUMsSUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQzVCO1lBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztZQUM3QixPQUFPO1NBQ1Y7UUFFRCx3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFDLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQztRQUVqRixrQ0FBa0M7UUFDbEMsS0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUMzQztZQUNJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0wsQ0FBQztJQXZFUTtRQUFSLElBQUEsWUFBSyxHQUFFOzBDQUFrQixrQkFBVztpRUFBTTtJQUNsQztRQUFSLElBQUEsWUFBSyxHQUFFOzt5REFBaUI7SUFDaEI7UUFBUixJQUFBLFlBQUssR0FBRTs7dURBQW1CO0lBSmxCLG9CQUFvQjtRQVJoQyxJQUFBLGdCQUFTLEVBQUM7WUFDUCxRQUFRLEVBQU8sY0FBYztZQUM3QixXQUFXLEVBQUksMEJBQTBCO1lBQ3pDLFNBQVMsRUFBTSxDQUFDLDBCQUEwQixDQUFDO1lBQzNDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFVBQVUsRUFBSywyQkFBYztZQUM3QixRQUFRLEVBQU8sYUFBYTtTQUMvQixDQUFDO2lEQVdnRCx1Q0FBdUI7T0FWNUQsb0JBQW9CLENBMEVoQztJQUFELDJCQUFDO0NBQUEsQUExRUQsSUEwRUM7QUExRVksb0RBQW9CIn0=