"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseDateRangeModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var button_1 = require("@angular/material/button");
var datepicker_1 = require("@angular/material/datepicker");
var form_field_1 = require("@angular/material/form-field");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var material_moment_adapter_1 = require("@angular/material-moment-adapter");
var date_range_component_1 = require("@fuse/components/date-range/date-range.component");
var FuseDateRangeModule = /** @class */ (function () {
    function FuseDateRangeModule() {
    }
    FuseDateRangeModule = tslib_1.__decorate([
        (0, core_1.NgModule)({
            declarations: [
                date_range_component_1.FuseDateRangeComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                button_1.MatButtonModule,
                datepicker_1.MatDatepickerModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                icon_1.MatIconModule,
                material_moment_adapter_1.MatMomentDateModule
            ],
            exports: [
                date_range_component_1.FuseDateRangeComponent
            ]
        })
    ], FuseDateRangeModule);
    return FuseDateRangeModule;
}());
exports.FuseDateRangeModule = FuseDateRangeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRlLXJhbmdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQyx3Q0FBcUQ7QUFDckQsbURBQTJEO0FBQzNELDJEQUFtRTtBQUNuRSwyREFBa0U7QUFDbEUsK0NBQXVEO0FBQ3ZELGlEQUF5RDtBQUN6RCw0RUFBdUU7QUFDdkUseUZBQTBGO0FBb0IxRjtJQUFBO0lBRUEsQ0FBQztJQUZZLG1CQUFtQjtRQWxCL0IsSUFBQSxlQUFRLEVBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YsNkNBQXNCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFPO2dCQUNWLHFCQUFZO2dCQUNaLDJCQUFtQjtnQkFDbkIsd0JBQWU7Z0JBQ2YsZ0NBQW1CO2dCQUNuQiwrQkFBa0I7Z0JBQ2xCLHNCQUFjO2dCQUNkLG9CQUFhO2dCQUNiLDZDQUFtQjthQUN0QjtZQUNELE9BQU8sRUFBTztnQkFDViw2Q0FBc0I7YUFDekI7U0FDSixDQUFDO09BQ1csbUJBQW1CLENBRS9CO0lBQUQsMEJBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSxrREFBbUIifQ==