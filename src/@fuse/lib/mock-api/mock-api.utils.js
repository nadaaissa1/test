"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseMockApiUtils = void 0;
var FuseMockApiUtils = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseMockApiUtils() {
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Generate a globally unique id
     */
    FuseMockApiUtils.guid = function () {
        /* eslint-disable */
        var d = new Date().getTime();
        // Use high-precision timer if available
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        /* eslint-enable */
    };
    return FuseMockApiUtils;
}());
exports.FuseMockApiUtils = FuseMockApiUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1hcGkudXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2NrLWFwaS51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtJQUVJOztPQUVHO0lBQ0g7SUFFQSxDQUFDO0lBRUQsd0dBQXdHO0lBQ3hHLG1CQUFtQjtJQUNuQix3R0FBd0c7SUFFeEc7O09BRUc7SUFDSSxxQkFBSSxHQUFYO1FBRUksb0JBQW9CO1FBRXBCLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFN0Isd0NBQXdDO1FBQ3hDLElBQUssT0FBTyxXQUFXLEtBQUssV0FBVyxJQUFJLE9BQU8sV0FBVyxDQUFDLEdBQUcsS0FBSyxVQUFVLEVBQ2hGO1lBQ0ksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUMxQjtRQUVELE9BQU8sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUM7WUFDN0QsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztRQUVILG1CQUFtQjtJQUN2QixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBcENZLDRDQUFnQiJ9