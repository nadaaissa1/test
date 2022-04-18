"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseConfirmationService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var lodash_es_1 = require("lodash-es");
var dialog_component_1 = require("@fuse/services/confirmation/dialog/dialog.component");
var FuseConfirmationService = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseConfirmationService(_matDialog) {
        this._matDialog = _matDialog;
        this._defaultConfig = {
            title: 'Confirm action',
            message: 'Are you sure you want to confirm this action?',
            icon: {
                show: true,
                name: 'heroicons_outline:exclamation',
                color: 'warn'
            },
            actions: {
                confirm: {
                    show: true,
                    label: 'Confirm',
                    color: 'warn'
                },
                cancel: {
                    show: true,
                    label: 'Cancel'
                }
            },
            dismissible: false
        };
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    FuseConfirmationService.prototype.open = function (config) {
        if (config === void 0) { config = {}; }
        // Merge the user config with the default config
        var userConfig = (0, lodash_es_1.merge)({}, this._defaultConfig, config);
        // Open the dialog
        return this._matDialog.open(dialog_component_1.FuseConfirmationDialogComponent, {
            autoFocus: false,
            disableClose: !userConfig.dismissible,
            data: userConfig,
            panelClass: 'fuse-confirmation-dialog-panel'
        });
    };
    FuseConfirmationService = tslib_1.__decorate([
        (0, core_1.Injectable)(),
        tslib_1.__metadata("design:paramtypes", [dialog_1.MatDialog])
    ], FuseConfirmationService);
    return FuseConfirmationService;
}());
exports.FuseConfirmationService = FuseConfirmationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maXJtYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQTJDO0FBQzNDLG1EQUFtRTtBQUNuRSx1Q0FBa0M7QUFDbEMsd0ZBQXNHO0FBSXRHO0lBd0JJOztPQUVHO0lBQ0gsaUNBQ1ksVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQTFCekIsbUJBQWMsR0FBMkI7WUFDN0MsS0FBSyxFQUFRLGdCQUFnQjtZQUM3QixPQUFPLEVBQU0sK0NBQStDO1lBQzVELElBQUksRUFBUztnQkFDVCxJQUFJLEVBQUcsSUFBSTtnQkFDWCxJQUFJLEVBQUcsK0JBQStCO2dCQUN0QyxLQUFLLEVBQUUsTUFBTTthQUNoQjtZQUNELE9BQU8sRUFBTTtnQkFDVCxPQUFPLEVBQUU7b0JBQ0wsSUFBSSxFQUFHLElBQUk7b0JBQ1gsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLEtBQUssRUFBRSxNQUFNO2lCQUNoQjtnQkFDRCxNQUFNLEVBQUc7b0JBQ0wsSUFBSSxFQUFHLElBQUk7b0JBQ1gsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0o7WUFDRCxXQUFXLEVBQUUsS0FBSztTQUNyQixDQUFDO0lBU0YsQ0FBQztJQUVELHdHQUF3RztJQUN4RyxtQkFBbUI7SUFDbkIsd0dBQXdHO0lBRXhHLHNDQUFJLEdBQUosVUFBSyxNQUFtQztRQUFuQyx1QkFBQSxFQUFBLFdBQW1DO1FBRXBDLGdEQUFnRDtRQUNoRCxJQUFNLFVBQVUsR0FBRyxJQUFBLGlCQUFLLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFMUQsa0JBQWtCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0RBQStCLEVBQUU7WUFDekQsU0FBUyxFQUFLLEtBQUs7WUFDbkIsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVc7WUFDckMsSUFBSSxFQUFVLFVBQVU7WUFDeEIsVUFBVSxFQUFJLGdDQUFnQztTQUNqRCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBakRRLHVCQUF1QjtRQURuQyxJQUFBLGlCQUFVLEdBQUU7aURBNkJlLGtCQUFTO09BNUJ4Qix1QkFBdUIsQ0FrRG5DO0lBQUQsOEJBQUM7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSwwREFBdUIifQ==