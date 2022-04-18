"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseMockApiInterceptor = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var mock_api_constants_1 = require("@fuse/lib/mock-api/mock-api.constants");
var mock_api_service_1 = require("@fuse/lib/mock-api/mock-api.service");
var FuseMockApiInterceptor = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseMockApiInterceptor(_defaultDelay, _fuseMockApiService) {
        this._defaultDelay = _defaultDelay;
        this._fuseMockApiService = _fuseMockApiService;
    }
    /**
     * Intercept
     *
     * @param request
     * @param next
     */
    FuseMockApiInterceptor.prototype.intercept = function (request, next) {
        var _a, _b;
        // Try to get the request handler
        var _c = this._fuseMockApiService.findHandler(request.method.toUpperCase(), request.url), handler = _c.handler, urlParams = _c.urlParams;
        // Pass through if the request handler does not exist
        if (!handler) {
            return next.handle(request);
        }
        // Set the intercepted request on the handler
        handler.request = request;
        // Set the url params on the handler
        handler.urlParams = urlParams;
        // Subscribe to the response function observable
        return handler.response.pipe((0, operators_1.delay)((_b = (_a = handler.delay) !== null && _a !== void 0 ? _a : this._defaultDelay) !== null && _b !== void 0 ? _b : 0), (0, operators_1.switchMap)(function (response) {
            // If there is no response data,
            // throw an error response
            if (!response) {
                response = new http_1.HttpErrorResponse({
                    error: 'NOT FOUND',
                    status: 404,
                    statusText: 'NOT FOUND'
                });
                return (0, rxjs_1.throwError)(response);
            }
            // Parse the response data
            var data = {
                status: response[0],
                body: response[1]
            };
            // If the status code is in between 200 and 300,
            // return a success response
            if (data.status >= 200 && data.status < 300) {
                response = new http_1.HttpResponse({
                    body: data.body,
                    status: data.status,
                    statusText: 'OK'
                });
                return (0, rxjs_1.of)(response);
            }
            // For other status codes,
            // throw an error response
            response = new http_1.HttpErrorResponse({
                error: data.body.error,
                status: data.status,
                statusText: 'ERROR'
            });
            return (0, rxjs_1.throwError)(response);
        }));
    };
    FuseMockApiInterceptor = tslib_1.__decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        }),
        tslib_1.__param(0, (0, core_1.Inject)(mock_api_constants_1.FUSE_MOCK_API_DEFAULT_DELAY)),
        tslib_1.__metadata("design:paramtypes", [Number, mock_api_service_1.FuseMockApiService])
    ], FuseMockApiInterceptor);
    return FuseMockApiInterceptor;
}());
exports.FuseMockApiInterceptor = FuseMockApiInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1hcGkuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2NrLWFwaS5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQW1EO0FBQ25ELDZDQUE2SDtBQUM3SCw2QkFBa0Q7QUFDbEQsNENBQWtEO0FBQ2xELDRFQUFvRjtBQUNwRix3RUFBeUU7QUFLekU7SUFFSTs7T0FFRztJQUNILGdDQUNpRCxhQUFxQixFQUMxRCxtQkFBdUM7UUFERixrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUMxRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO0lBR25ELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDBDQUFTLEdBQVQsVUFBVSxPQUF5QixFQUFFLElBQWlCOztRQUVsRCxpQ0FBaUM7UUFDM0IsSUFBQSxLQUdJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBRi9FLE9BQU8sYUFBQSxFQUNQLFNBQVMsZUFDc0UsQ0FBQztRQUUxRixxREFBcUQ7UUFDckQsSUFBSyxDQUFDLE9BQU8sRUFDYjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjtRQUVELDZDQUE2QztRQUM3QyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUUxQixvQ0FBb0M7UUFDcEMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFOUIsZ0RBQWdEO1FBQ2hELE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3hCLElBQUEsaUJBQUssRUFBQyxNQUFBLE1BQUEsT0FBTyxDQUFDLEtBQUssbUNBQUksSUFBSSxDQUFDLGFBQWEsbUNBQUksQ0FBQyxDQUFDLEVBQy9DLElBQUEscUJBQVMsRUFBQyxVQUFDLFFBQVE7WUFFZixnQ0FBZ0M7WUFDaEMsMEJBQTBCO1lBQzFCLElBQUssQ0FBQyxRQUFRLEVBQ2Q7Z0JBQ0ksUUFBUSxHQUFHLElBQUksd0JBQWlCLENBQUM7b0JBQzdCLEtBQUssRUFBTyxXQUFXO29CQUN2QixNQUFNLEVBQU0sR0FBRztvQkFDZixVQUFVLEVBQUUsV0FBVztpQkFDMUIsQ0FBQyxDQUFDO2dCQUVILE9BQU8sSUFBQSxpQkFBVSxFQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9CO1lBRUQsMEJBQTBCO1lBQzFCLElBQU0sSUFBSSxHQUFHO2dCQUNULE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLEVBQUksUUFBUSxDQUFDLENBQUMsQ0FBQzthQUN0QixDQUFDO1lBRUYsZ0RBQWdEO1lBQ2hELDRCQUE0QjtZQUM1QixJQUFLLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUM1QztnQkFDSSxRQUFRLEdBQUcsSUFBSSxtQkFBWSxDQUFDO29CQUN4QixJQUFJLEVBQVEsSUFBSSxDQUFDLElBQUk7b0JBQ3JCLE1BQU0sRUFBTSxJQUFJLENBQUMsTUFBTTtvQkFDdkIsVUFBVSxFQUFFLElBQUk7aUJBQ25CLENBQUMsQ0FBQztnQkFFSCxPQUFPLElBQUEsU0FBRSxFQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZCO1lBRUQsMEJBQTBCO1lBQzFCLDBCQUEwQjtZQUMxQixRQUFRLEdBQUcsSUFBSSx3QkFBaUIsQ0FBQztnQkFDN0IsS0FBSyxFQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDM0IsTUFBTSxFQUFNLElBQUksQ0FBQyxNQUFNO2dCQUN2QixVQUFVLEVBQUUsT0FBTzthQUN0QixDQUFDLENBQUM7WUFFSCxPQUFPLElBQUEsaUJBQVUsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQXJGUSxzQkFBc0I7UUFIbEMsSUFBQSxpQkFBVSxFQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQztRQU9PLG1CQUFBLElBQUEsYUFBTSxFQUFDLGdEQUEyQixDQUFDLENBQUE7eURBQ1AscUNBQWtCO09BUDFDLHNCQUFzQixDQXNGbEM7SUFBRCw2QkFBQztDQUFBLEFBdEZELElBc0ZDO0FBdEZZLHdEQUFzQiJ9