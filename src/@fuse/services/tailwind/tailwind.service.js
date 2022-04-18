"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseTailwindService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var lodash_es_1 = require("lodash-es");
var extractedTailwindConfigStyle = require("@fuse/styles/core/tailwind-config.scss");
var FuseTailwindService = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseTailwindService() {
        this._tailwindConfig = new rxjs_1.ReplaySubject(1);
        // Prepare the config object
        var config = {};
        // Extract the style from the class
        var regexpForClass = /\.fuse-tailwind-extracted-config\s\{([\s\S]*)\}/g;
        var style = regexpForClass.exec(extractedTailwindConfigStyle.default)[1].trim();
        // Extract the rules
        var regexp = /(--[\s\S]*?):'([\s\S]*?)';/g;
        var rules = regexp.exec(style);
        // Add to the config
        while (rules !== null) {
            var configGroup = /--([\s\S]*?)-/g.exec(rules[1])[1];
            if (!config[configGroup]) {
                config[configGroup] = {};
            }
            config[configGroup][rules[1].replace(/(--[\s\S]*?-)/g, '')] = rules[2];
            rules = regexp.exec(style);
        }
        // Parse the themes objects
        config.themes = (0, lodash_es_1.fromPairs)((0, lodash_es_1.map)(config.themes, function (value, key) { return [key, JSON.parse(value)]; }));
        // Execute the observable with the config
        this._tailwindConfig.next(config);
    }
    Object.defineProperty(FuseTailwindService.prototype, "tailwindConfig$", {
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Getter for _tailwindConfig
         */
        get: function () {
            return this._tailwindConfig.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    FuseTailwindService = tslib_1.__decorate([
        (0, core_1.Injectable)(),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuseTailwindService);
    return FuseTailwindService;
}());
exports.FuseTailwindService = FuseTailwindService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhaWx3aW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUEyQztBQUMzQyw2QkFBaUQ7QUFDakQsdUNBQTJDO0FBQzNDLHFGQUF1RjtBQUd2RjtJQUlJOztPQUVHO0lBQ0g7UUFMUSxvQkFBZSxHQUF1QixJQUFJLG9CQUFhLENBQU0sQ0FBQyxDQUFDLENBQUM7UUFPcEUsNEJBQTRCO1FBQzVCLElBQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztRQUV2QixtQ0FBbUM7UUFDbkMsSUFBTSxjQUFjLEdBQUcsa0RBQWtELENBQUM7UUFDMUUsSUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVsRixvQkFBb0I7UUFDcEIsSUFBTSxNQUFNLEdBQUcsNkJBQTZCLENBQUM7UUFDN0MsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvQixvQkFBb0I7UUFDcEIsT0FBUSxLQUFLLEtBQUssSUFBSSxFQUN0QjtZQUNJLElBQU0sV0FBVyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUN6QjtnQkFDSSxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQzVCO1lBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7UUFFRCwyQkFBMkI7UUFDM0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFBLHFCQUFTLEVBQUMsSUFBQSxlQUFHLEVBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLElBQUssT0FBQSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxDQUFDO1FBRXhGLHlDQUF5QztRQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBU0Qsc0JBQUksZ0RBQWU7UUFQbkIsd0dBQXdHO1FBQ3hHLGNBQWM7UUFDZCx3R0FBd0c7UUFFeEc7O1dBRUc7YUFDSDtZQUVJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQWxEUSxtQkFBbUI7UUFEL0IsSUFBQSxpQkFBVSxHQUFFOztPQUNBLG1CQUFtQixDQW1EL0I7SUFBRCwwQkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLGtEQUFtQiJ9