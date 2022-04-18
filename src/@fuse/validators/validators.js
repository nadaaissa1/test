"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseValidators = void 0;
var FuseValidators = /** @class */ (function () {
    function FuseValidators() {
    }
    /**
     * Check for empty (optional fields) values
     *
     * @param value
     */
    FuseValidators.isEmptyInputValue = function (value) {
        return value == null || value.length === 0;
    };
    /**
     * Must match validator
     *
     * @param controlPath A dot-delimited string values that define the path to the control.
     * @param matchingControlPath A dot-delimited string values that define the path to the matching control.
     */
    FuseValidators.mustMatch = function (controlPath, matchingControlPath) {
        var _this = this;
        return function (formGroup) {
            // Get the control and matching control
            var control = formGroup.get(controlPath);
            var matchingControl = formGroup.get(matchingControlPath);
            // Return if control or matching control doesn't exist
            if (!control || !matchingControl) {
                return null;
            }
            // Delete the mustMatch error to reset the error on the matching control
            if (matchingControl.hasError('mustMatch')) {
                delete matchingControl.errors.mustMatch;
                matchingControl.updateValueAndValidity();
            }
            // Don't validate empty values on the matching control
            // Don't validate if values are matching
            if (_this.isEmptyInputValue(matchingControl.value) || control.value === matchingControl.value) {
                return null;
            }
            // Prepare the validation errors
            var errors = { mustMatch: true };
            // Set the validation error on the matching control
            matchingControl.setErrors(errors);
            // Return the errors
            return errors;
        };
    };
    return FuseValidators;
}());
exports.FuseValidators = FuseValidators;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7SUFBQTtJQXdEQSxDQUFDO0lBdERHOzs7O09BSUc7SUFDSSxnQ0FBaUIsR0FBeEIsVUFBeUIsS0FBVTtRQUUvQixPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksd0JBQVMsR0FBaEIsVUFBaUIsV0FBbUIsRUFBRSxtQkFBMkI7UUFBakUsaUJBcUNDO1FBbkNHLE9BQU8sVUFBQyxTQUEwQjtZQUU5Qix1Q0FBdUM7WUFDdkMsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzQyxJQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFFM0Qsc0RBQXNEO1lBQ3RELElBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQ2pDO2dCQUNJLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFFRCx3RUFBd0U7WUFDeEUsSUFBSyxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUMxQztnQkFDSSxPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUN4QyxlQUFlLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzthQUM1QztZQUVELHNEQUFzRDtZQUN0RCx3Q0FBd0M7WUFDeEMsSUFBSyxLQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssZUFBZSxDQUFDLEtBQUssRUFDN0Y7Z0JBQ0ksT0FBTyxJQUFJLENBQUM7YUFDZjtZQUVELGdDQUFnQztZQUNoQyxJQUFNLE1BQU0sR0FBRyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQztZQUVqQyxtREFBbUQ7WUFDbkQsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVsQyxvQkFBb0I7WUFDcEIsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQztBQXhEWSx3Q0FBYyJ9