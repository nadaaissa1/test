"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseHighlightService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var highlight_js_1 = require("highlight.js");
var FuseHighlightService = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseHighlightService() {
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Highlight
     */
    FuseHighlightService.prototype.highlight = function (code, language) {
        // Format the code
        code = this._format(code);
        // Highlight and return the code
        return highlight_js_1.default.highlight(code, { language: language }).value;
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Remove the empty lines around the code block
     * and re-align the indentation based on the first
     * non-whitespace indented character
     *
     * @param code
     * @private
     */
    FuseHighlightService.prototype._format = function (code) {
        var indentation = 0;
        // Split the code into lines and store the lines
        var lines = code.split('\n');
        // Trim the empty lines around the code block
        while (lines.length && lines[0].trim() === '') {
            lines.shift();
        }
        while (lines.length && lines[lines.length - 1].trim() === '') {
            lines.pop();
        }
        // Iterate through the lines
        lines.filter(function (line) { return line.length; })
            .forEach(function (line, index) {
            // Always get the indentation of the first line so we can
            // have something to compare with
            if (index === 0) {
                indentation = line.search(/\S|$/);
                return;
            }
            // Look at all the remaining lines to figure out the smallest indentation.
            indentation = Math.min(line.search(/\S|$/), indentation);
        });
        // Iterate through the lines one more time, remove the extra
        // indentation, join them together and return it
        return lines.map(function (line) { return line.substring(indentation); }).join('\n');
    };
    FuseHighlightService = tslib_1.__decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseHighlightService);
    return FuseHighlightService;
}());
exports.FuseHighlightService = FuseHighlightService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoaWdobGlnaHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFnQztBQUtoQztJQUVJOztPQUVHO0lBQ0g7SUFFQSxDQUFDO0lBRUQsd0dBQXdHO0lBQ3hHLG1CQUFtQjtJQUNuQix3R0FBd0c7SUFFeEc7O09BRUc7SUFDSCx3Q0FBUyxHQUFULFVBQVUsSUFBWSxFQUFFLFFBQWdCO1FBRXBDLGtCQUFrQjtRQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQixnQ0FBZ0M7UUFDaEMsT0FBTyxzQkFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBQyxRQUFRLFVBQUEsRUFBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2xELENBQUM7SUFFRCx3R0FBd0c7SUFDeEcsb0JBQW9CO0lBQ3BCLHdHQUF3RztJQUV4Rzs7Ozs7OztPQU9HO0lBQ0ssc0NBQU8sR0FBZixVQUFnQixJQUFZO1FBRXhCLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztRQUVwQixnREFBZ0Q7UUFDaEQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQiw2Q0FBNkM7UUFDN0MsT0FBUSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQzlDO1lBQ0ksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2pCO1FBRUQsT0FBUSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFDN0Q7WUFDSSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDZjtRQUVELDRCQUE0QjtRQUM1QixLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sRUFBWCxDQUFXLENBQUM7YUFDM0IsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7WUFFakIseURBQXlEO1lBQ3pELGlDQUFpQztZQUNqQyxJQUFLLEtBQUssS0FBSyxDQUFDLEVBQ2hCO2dCQUNJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxPQUFPO2FBQ1Y7WUFFRCwwRUFBMEU7WUFDMUUsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQztRQUVSLDREQUE0RDtRQUM1RCxnREFBZ0Q7UUFDaEQsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBMUVRLG9CQUFvQjtRQUhoQyxJQUFBLGlCQUFVLEVBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDOztPQUNXLG9CQUFvQixDQTJFaEM7SUFBRCwyQkFBQztDQUFBLEFBM0VELElBMkVDO0FBM0VZLG9EQUFvQiJ9