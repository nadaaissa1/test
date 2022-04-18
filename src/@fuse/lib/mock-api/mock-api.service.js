"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseMockApiService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var lodash_es_1 = require("lodash-es");
var mock_api_request_handler_1 = require("@fuse/lib/mock-api/mock-api.request-handler");
var FuseMockApiService = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseMockApiService() {
        this._handlers = {
            'delete': new Map(),
            'get': new Map(),
            'patch': new Map(),
            'post': new Map(),
            'put': new Map()
        };
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Find the handler from the service
     * with the given method and url
     *
     * @param method
     * @param url
     */
    FuseMockApiService.prototype.findHandler = function (method, url) {
        // Prepare the return object
        var matchingHandler = {
            handler: undefined,
            urlParams: {}
        };
        // Split the url
        var urlParts = url.split('/');
        // Get all related request handlers
        var handlers = this._handlers[method.toLowerCase()];
        // Iterate through the handlers
        handlers.forEach(function (handler, handlerUrl) {
            // Skip if there is already a matching handler
            if (matchingHandler.handler) {
                return;
            }
            // Split the handler url
            var handlerUrlParts = handlerUrl.split('/');
            // Skip if the lengths of the urls we are comparing are not the same
            if (urlParts.length !== handlerUrlParts.length) {
                return;
            }
            // Compare
            var matches = handlerUrlParts.every(function (handlerUrlPart, index) { return handlerUrlPart === urlParts[index] || handlerUrlPart.startsWith(':'); });
            // If there is a match...
            if (matches) {
                // Assign the matching handler
                matchingHandler.handler = handler;
                // Extract and assign the parameters
                matchingHandler.urlParams = (0, lodash_es_1.fromPairs)((0, lodash_es_1.compact)(handlerUrlParts.map(function (handlerUrlPart, index) {
                    return handlerUrlPart.startsWith(':') ? [handlerUrlPart.substring(1), urlParts[index]] : undefined;
                })));
            }
        });
        return matchingHandler;
    };
    /**
     * Register a DELETE request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    FuseMockApiService.prototype.onDelete = function (url, delay) {
        return this._registerHandler('delete', url, delay);
    };
    /**
     * Register a GET request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    FuseMockApiService.prototype.onGet = function (url, delay) {
        return this._registerHandler('get', url, delay);
    };
    /**
     * Register a PATCH request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    FuseMockApiService.prototype.onPatch = function (url, delay) {
        return this._registerHandler('patch', url, delay);
    };
    /**
     * Register a POST request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    FuseMockApiService.prototype.onPost = function (url, delay) {
        return this._registerHandler('post', url, delay);
    };
    /**
     * Register a PUT request handler
     *
     * @param url - URL address of the mocked API endpoint
     * @param delay - Delay of the response in milliseconds
     */
    FuseMockApiService.prototype.onPut = function (url, delay) {
        return this._registerHandler('put', url, delay);
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Register and return a new instance of the handler
     *
     * @param method
     * @param url
     * @param delay
     * @private
     */
    FuseMockApiService.prototype._registerHandler = function (method, url, delay) {
        // Create a new instance of FuseMockApiRequestHandler
        var fuseMockHttp = new mock_api_request_handler_1.FuseMockApiHandler(url, delay);
        // Store the handler to access it from the interceptor
        this._handlers[method].set(url, fuseMockHttp);
        // Return the instance
        return fuseMockHttp;
    };
    FuseMockApiService = tslib_1.__decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseMockApiService);
    return FuseMockApiService;
}());
exports.FuseMockApiService = FuseMockApiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1hcGkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vY2stYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUEyQztBQUMzQyx1Q0FBK0M7QUFDL0Msd0ZBQWlGO0FBTWpGO0lBVUk7O09BRUc7SUFDSDtRQVhRLGNBQVMsR0FBdUQ7WUFDcEUsUUFBUSxFQUFFLElBQUksR0FBRyxFQUE4QjtZQUMvQyxLQUFLLEVBQUssSUFBSSxHQUFHLEVBQThCO1lBQy9DLE9BQU8sRUFBRyxJQUFJLEdBQUcsRUFBOEI7WUFDL0MsTUFBTSxFQUFJLElBQUksR0FBRyxFQUE4QjtZQUMvQyxLQUFLLEVBQUssSUFBSSxHQUFHLEVBQThCO1NBQ2xELENBQUM7SUFPRixDQUFDO0lBRUQsd0dBQXdHO0lBQ3hHLG1CQUFtQjtJQUNuQix3R0FBd0c7SUFFeEc7Ozs7OztPQU1HO0lBQ0gsd0NBQVcsR0FBWCxVQUFZLE1BQWMsRUFBRSxHQUFXO1FBRW5DLDRCQUE0QjtRQUM1QixJQUFNLGVBQWUsR0FBc0Y7WUFDdkcsT0FBTyxFQUFJLFNBQVM7WUFDcEIsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQztRQUVGLGdCQUFnQjtRQUNoQixJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWhDLG1DQUFtQztRQUNuQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRXRELCtCQUErQjtRQUMvQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLFVBQVU7WUFFakMsOENBQThDO1lBQzlDLElBQUssZUFBZSxDQUFDLE9BQU8sRUFDNUI7Z0JBQ0ksT0FBTzthQUNWO1lBRUQsd0JBQXdCO1lBQ3hCLElBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFOUMs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