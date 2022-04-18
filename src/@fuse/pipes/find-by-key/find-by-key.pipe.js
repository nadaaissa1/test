"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseFindByKeyPipe = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
/**
 * Finds an object from given source using the given key - value pairs
 */
var FuseFindByKeyPipe = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseFindByKeyPipe() {
    }
    /**
     * Transform
     *
     * @param value A string or an array of strings to find from source
     * @param key Key of the object property to look for
     * @param source Array of objects to find from
     */
    FuseFindByKeyPipe.prototype.transform = function (value, key, source) {
        // If the given value is an array of strings...
        if (Array.isArray(value)) {
            return value.map(function (item) { return source.find(function (sourceItem) { return sourceItem[key] === item; }); });
        }
        // If the value is a string...
        return source.find(function (sourceItem) { return sourceItem[key] === value; });
    };
    FuseFindByKeyPipe = tslib_1.__decorate([
        (0, core_1.Pipe)({
            name: 'fuseFindByKey',
            pure: false
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseFindByKeyPipe);
    return FuseFindByKeyPipe;
}());
exports.FuseFindByKeyPipe = FuseFindByKeyPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1ieS1rZXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbmQtYnkta2V5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUFvRDtBQUVwRDs7R0FFRztBQUtIO0lBRUk7O09BRUc7SUFDSDtJQUVBLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxxQ0FBUyxHQUFULFVBQVUsS0FBd0IsRUFBRSxHQUFXLEVBQUUsTUFBYTtRQUUxRCwrQ0FBK0M7UUFDL0MsSUFBSyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUN6QjtZQUNJLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUF4QixDQUF3QixDQUFDLEVBQW5ELENBQW1ELENBQUMsQ0FBQztTQUNqRjtRQUVELDhCQUE4QjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQTFCUSxpQkFBaUI7UUFKN0IsSUFBQSxXQUFJLEVBQUM7WUFDRixJQUFJLEVBQUUsZUFBZTtZQUNyQixJQUFJLEVBQUUsS0FBSztTQUNkLENBQUM7O09BQ1csaUJBQWlCLENBMkI3QjtJQUFELHdCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksOENBQWlCIn0=