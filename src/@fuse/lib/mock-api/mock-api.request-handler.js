"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseMockApiHandler = void 0;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var FuseMockApiHandler = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseMockApiHandler(url, delay) {
        this.url = url;
        this.delay = delay;
        // Private
        this._reply = undefined;
        this._replyCount = 0;
        this._replied = 0;
    }
    Object.defineProperty(FuseMockApiHandler.prototype, "response", {
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Getter for response callback
         */
        get: function () {
            // If the execution limit has been reached, throw an error
            if (this._replyCount > 0 && this._replyCount <= this._replied) {
                return (0, rxjs_1.throwError)('Execution limit has been reached!');
            }
            // If the response callback has not been set, throw an error
            if (!this._reply) {
                return (0, rxjs_1.throwError)('Response callback function does not exist!');
            }
            // If the request has not been set, throw an error
            if (!this.request) {
                return (0, rxjs_1.throwError)('Request does not exist!');
            }
            // Increase the replied count
            this._replied++;
            // Execute the reply callback
            var replyResult = this._reply({
                request: this.request,
                urlParams: this.urlParams
            });
            // If the result of the reply callback is an observable...
            if (replyResult instanceof rxjs_1.Observable) {
                // Return the result as it is
                return replyResult.pipe((0, operators_1.take)(1));
            }
            // Otherwise, return the result as an observable
            return (0, rxjs_1.of)(replyResult).pipe((0, operators_1.take)(1));
        },
        enumerable: false,
        configurable: true
    });
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Reply
     *
     * @param callback
     */
    FuseMockApiHandler.prototype.reply = function (callback) {
        // Store the reply
        this._reply = callback;
    };
    /**
     * Reply count
     *
     * @param count
     */
    FuseMockApiHandler.prototype.replyCount = function (count) {
        // Store the reply count
        this._replyCount = count;
    };
    return FuseMockApiHandler;
}());
exports.FuseMockApiHandler = FuseMockApiHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1hcGkucmVxdWVzdC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9jay1hcGkucmVxdWVzdC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDZCQUFrRDtBQUNsRCw0Q0FBc0M7QUFHdEM7SUFVSTs7T0FFRztJQUNILDRCQUNXLEdBQVcsRUFDWCxLQUFjO1FBRGQsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLFVBQUssR0FBTCxLQUFLLENBQVM7UUFWekIsVUFBVTtRQUNGLFdBQU0sR0FBNkIsU0FBUyxDQUFDO1FBQzdDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxDQUFDLENBQUM7SUFVckIsQ0FBQztJQVNELHNCQUFJLHdDQUFRO1FBUFosd0dBQXdHO1FBQ3hHLGNBQWM7UUFDZCx3R0FBd0c7UUFFeEc7O1dBRUc7YUFDSDtZQUVJLDBEQUEwRDtZQUMxRCxJQUFLLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsRUFDOUQ7Z0JBQ0ksT0FBTyxJQUFBLGlCQUFVLEVBQUMsbUNBQW1DLENBQUMsQ0FBQzthQUMxRDtZQUVELDREQUE0RDtZQUM1RCxJQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDakI7Z0JBQ0ksT0FBTyxJQUFBLGlCQUFVLEVBQUMsNENBQTRDLENBQUMsQ0FBQzthQUNuRTtZQUVELGtEQUFrRDtZQUNsRCxJQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFDbEI7Z0JBQ0ksT0FBTyxJQUFBLGlCQUFVLEVBQUMseUJBQXlCLENBQUMsQ0FBQzthQUNoRDtZQUVELDZCQUE2QjtZQUM3QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFaEIsNkJBQTZCO1lBQzdCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzVCLE9BQU8sRUFBSSxJQUFJLENBQUMsT0FBTztnQkFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzVCLENBQUMsQ0FBQztZQUVILDBEQUEwRDtZQUMxRCxJQUFLLFdBQVcsWUFBWSxpQkFBVSxFQUN0QztnQkFDSSw2QkFBNkI7Z0JBQzdCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFBLGdCQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQztZQUVELGdEQUFnRDtZQUNoRCxPQUFPLElBQUEsU0FBRSxFQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFBLGdCQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUVELHdHQUF3RztJQUN4RyxtQkFBbUI7SUFDbkIsd0dBQXdHO0lBRXhHOzs7O09BSUc7SUFDSCxrQ0FBSyxHQUFMLFVBQU0sUUFBa0M7UUFFcEMsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsdUNBQVUsR0FBVixVQUFXLEtBQWE7UUFFcEIsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUE1RkQsSUE0RkM7QUE1RlksZ0RBQWtCIn0=