"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseMockApiModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var mock_api_constants_1 = require("@fuse/lib/mock-api/mock-api.constants");
var mock_api_interceptor_1 = require("@fuse/lib/mock-api/mock-api.interceptor");
var FuseMockApiModule = /** @class */ (function () {
    function FuseMockApiModule() {
    }
    FuseMockApiModule_1 = FuseMockApiModule;
    /**
     * FuseMockApi module default configuration.
     *
     * @param mockApiServices - Array of services that register mock API handlers
     * @param config - Configuration options
     * @param config.delay - Default delay value in milliseconds to apply all responses
     */
    FuseMockApiModule.forRoot = function (mockApiServices, config) {
        var _a;
        return {
            ngModule: FuseMockApiModule_1,
            providers: [
                {
                    provide: core_1.APP_INITIALIZER,
                    deps: tslib_1.__spreadArray([], tslib_1.__read(mockApiServices), false),
                    useFactory: function () { return function () { return null; }; },
                    multi: true
                },
                {
                    provide: mock_api_constants_1.FUSE_MOCK_API_DEFAULT_DELAY,
                    useValue: (_a = config === null || config === void 0 ? void 0 : config.delay) !== null && _a !== void 0 ? _a : 0
                }
            ]
        };
    };
    var FuseMockApiModule_1;
    FuseMockApiModule = FuseMockApiModule_1 = tslib_1.__decorate([
        (0, core_1.NgModule)({
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: mock_api_interceptor_1.FuseMockApiInterceptor,
                    multi: true
                }
            ]
        })
    ], FuseMockApiModule);
    return FuseMockApiModule;
}());
exports.FuseMockApiModule = FuseMockApiModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1hcGkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9jay1hcGkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQ0FBK0U7QUFDL0UsNkNBQXlEO0FBQ3pELDRFQUFvRjtBQUNwRixnRkFBaUY7QUFXakY7SUFBQTtJQTJCQSxDQUFDOzBCQTNCWSxpQkFBaUI7SUFFMUI7Ozs7OztPQU1HO0lBQ0kseUJBQU8sR0FBZCxVQUFlLGVBQXNCLEVBQUUsTUFBMkI7O1FBRTlELE9BQU87WUFDSCxRQUFRLEVBQUcsbUJBQWlCO1lBQzVCLFNBQVMsRUFBRTtnQkFDUDtvQkFDSSxPQUFPLEVBQUssc0JBQWU7b0JBQzNCLElBQUksMkNBQVksZUFBZSxTQUFDO29CQUNoQyxVQUFVLEVBQUUsY0FBTSxPQUFBLGNBQVcsT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFmLENBQWU7b0JBQ2pDLEtBQUssRUFBTyxJQUFJO2lCQUNuQjtnQkFDRDtvQkFDSSxPQUFPLEVBQUcsZ0RBQTJCO29CQUNyQyxRQUFRLEVBQUUsTUFBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsS0FBSyxtQ0FBSSxDQUFDO2lCQUMvQjthQUNKO1NBQ0osQ0FBQztJQUNOLENBQUM7O0lBMUJRLGlCQUFpQjtRQVQ3QixJQUFBLGVBQVEsRUFBQztZQUNOLFNBQVMsRUFBRTtnQkFDUDtvQkFDSSxPQUFPLEVBQUcsd0JBQWlCO29CQUMzQixRQUFRLEVBQUUsNkNBQXNCO29CQUNoQyxLQUFLLEVBQUssSUFBSTtpQkFDakI7YUFDSjtTQUNKLENBQUM7T0FDVyxpQkFBaUIsQ0EyQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSw4Q0FBaUIifQ==