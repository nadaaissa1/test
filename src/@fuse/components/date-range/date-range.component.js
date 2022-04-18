"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuseDateRangeComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var overlay_1 = require("@angular/cdk/overlay");
var portal_1 = require("@angular/cdk/portal");
var datepicker_1 = require("@angular/material/datepicker");
var rxjs_1 = require("rxjs");
var moment = require("moment");
var FuseDateRangeComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseDateRangeComponent(_changeDetectorRef, _elementRef, _overlay, _renderer2, _viewContainerRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._overlay = _overlay;
        this._renderer2 = _renderer2;
        this._viewContainerRef = _viewContainerRef;
        this.rangeChanged = new core_1.EventEmitter();
        this._defaultClassNames = true;
        this.activeDates = {
            month1: null,
            month2: null
        };
        this.setWhichDate = 'start';
        this._range = {
            start: null,
            end: null
        };
        this._timeRegExp = new RegExp('^(0[0-9]|1[0-9]|2[0-4]|[0-9]):([0-5][0-9])(A|(?:AM)|P|(?:PM))?$', 'i');
        this._unsubscribeAll = new rxjs_1.Subject();
        this._onChange = function () {
        };
        this._onTouched = function () {
        };
        this.dateFormat = 'DD/MM/YYYY';
        this.timeFormat = '12';
        // Initialize the component
        this._init();
    }
    FuseDateRangeComponent_1 = FuseDateRangeComponent;
    Object.defineProperty(FuseDateRangeComponent.prototype, "dateFormat", {
        get: function () {
            return this._dateFormat;
        },
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Setter & getter for dateFormat input
         *
         * @param value
         */
        set: function (value) {
            // Return if the values are the same
            if (this._dateFormat === value) {
                return;
            }
            // Store the value
            this._dateFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuseDateRangeComponent.prototype, "timeFormat", {
        get: function () {
            return this._timeFormat;
        },
        /**
         * Setter & getter for timeFormat input
         *
         * @param value
         */
        set: function (value) {
            // Return if the values are the same
            if (this._timeFormat === value) {
                return;
            }
            // Set format based on the time format input
            this._timeFormat = value === '12' ? 'hh:mmA' : 'HH:mm';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuseDateRangeComponent.prototype, "timeRange", {
        get: function () {
            return this._timeRange;
        },
        /**
         * Setter & getter for timeRange input
         *
         * @param value
         */
        set: function (value) {
            // Return if the values are the same
            if (this._timeRange === value) {
                return;
            }
            // Store the value
            this._timeRange = value;
            // If the time range turned off...
            if (!value) {
                this.range = {
                    start: this._range.start.clone().startOf('day'),
                    end: this._range.end.clone().endOf('day')
                };
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuseDateRangeComponent.prototype, "range", {
        get: function () {
            // Clone the range start and end
            var start = this._range.start.clone();
            var end = this._range.end.clone();
            // Build and return the range object
            return {
                startDate: start.clone().format(this.dateFormat),
                startTime: this.timeRange ? start.clone().format(this.timeFormat) : null,
                endDate: end.clone().format(this.dateFormat),
                endTime: this.timeRange ? end.clone().format(this.timeFormat) : null
            };
        },
        /**
         * Setter & getter for range input
         *
         * @param value
         */
        set: function (value) {
            if (!value) {
                return;
            }
            // Check if the value is an object and has 'start' and 'end' values
            if (!value.start || !value.end) {
                console.error('Range input must have "start" and "end" properties!');
                return;
            }
            // Check if we are setting an individual date or both of them
            var whichDate = value.whichDate || null;
            // Get the start and end dates as moment
            var start = moment(value.start);
            var end = moment(value.end);
            // If we are only setting the start date...
            if (whichDate === 'start') {
                // Set the start date
                this._range.start = start.clone();
                // If the selected start date is after the end date...
                if (this._range.start.isAfter(this._range.end)) {
                    // Set the end date to the start date but keep the end date's time
                    var endDate = start.clone().hours(this._range.end.hours()).minutes(this._range.end.minutes()).seconds(this._range.end.seconds());
                    // Test this new end date to see if it's ahead of the start date
                    if (this._range.start.isBefore(endDate)) {
                        // If it's, set the new end date
                        this._range.end = endDate;
                    }
                    else {
                        // Otherwise, set the end date same as the start date
                        this._range.end = start.clone();
                    }
                }
            }
            // If we are only setting the end date...
            if (whichDate === 'end') {
                // Set the end date
                this._range.end = end.clone();
                // If the selected end date is before the start date...
                if (this._range.start.isAfter(this._range.end)) {
                    // Set the start date to the end date but keep the start date's time
                    var startDate = end.clone().hours(this._range.start.hours()).minutes(this._range.start.minutes()).seconds(this._range.start.seconds());
                    // Test this new end date to see if it's ahead of the start date
                    if (this._range.end.isAfter(startDate)) {
                        // If it's, set the new start date
                        this._range.start = startDate;
                    }
                    else {
                        // Otherwise, set the start date same as the end date
                        this._range.start = end.clone();
                    }
                }
            }
            // If we are setting both dates...
            if (!whichDate) {
                // Set the start date
                this._range.start = start.clone();
                // If the start date is before the end date, set the end date as normal.
                // If the start date is after the end date, set the end date same as the start date.
                this._range.end = start.isBefore(end) ? end.clone() : start.clone();
            }
            // Prepare another range object that holds the ISO formatted range dates
            var range = {
                start: this._range.start.clone().toISOString(),
                end: this._range.end.clone().toISOString()
            };
            // Emit the range changed event with the range
            this.rangeChanged.emit(range);
            // Update the model with the range if the change was not a programmatic change
            // Because programmatic changes trigger writeValue which triggers onChange and onTouched
            // internally causing them to trigger twice which breaks the form's pristine and touched
            // statuses.
            if (!this._programmaticChange) {
                this._onTouched(range);
                this._onChange(range);
            }
            // Set the active dates
            this.activeDates = {
                month1: this._range.start.clone(),
                month2: this._range.start.clone().add(1, 'month')
            };
            // Set the time form controls
            this.startTimeFormControl.setValue(this._range.start.clone().format(this._timeFormat).toString());
            this.endTimeFormControl.setValue(this._range.end.clone().format(this._timeFormat).toString());
            // Run ngAfterContentInit on month views to trigger
            // re-render on month views if they are available
            if (this._matMonthView1 && this._matMonthView2) {
                this._matMonthView1.ngAfterContentInit();
                this._matMonthView2.ngAfterContentInit();
            }
            // Reset the programmatic change status
            this._programmaticChange = false;
        },
        enumerable: false,
        configurable: true
    });
    // -----------------------------------------------------------------------------------------------------
    // @ Control Value Accessor
    // -----------------------------------------------------------------------------------------------------
    /**
     * Update the form model on change
     *
     * @param fn
     */
    FuseDateRangeComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    /**
     * Update the form model on blur
     *
     * @param fn
     */
    FuseDateRangeComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    /**
     * Write to view from model when the form model changes programmatically
     *
     * @param range
     */
    FuseDateRangeComponent.prototype.writeValue = function (range) {
        // Set this change as a programmatic one
        this._programmaticChange = true;
        // Set the range
        this.range = range;
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FuseDateRangeComponent.prototype.ngOnInit = function () {
    };
    /**
     * On destroy
     */
    FuseDateRangeComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
        // @ TODO: Workaround until "angular/issues/20007" resolved
        this.writeValue = function () {
        };
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Open the picker panel
     */
    FuseDateRangeComponent.prototype.openPickerPanel = function () {
        // Create the overlay
        var overlayRef = this._overlay.create({
            panelClass: 'fuse-date-range-panel',
            backdropClass: '',
            hasBackdrop: true,
            scrollStrategy: this._overlay.scrollStrategies.reposition(),
            positionStrategy: this._overlay.position()
                .flexibleConnectedTo(this._pickerPanelOrigin)
                .withPositions([
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'top',
                    offsetY: 8
                },
                {
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'bottom',
                    offsetY: -8
                }
            ])
        });
        // Create a portal from the template
        var templatePortal = new portal_1.TemplatePortal(this._pickerPanel, this._viewContainerRef);
        // On backdrop click
        overlayRef.backdropClick().subscribe(function () {
            // If template portal exists and attached...
            if (templatePortal && templatePortal.isAttached) {
                // Detach it
                templatePortal.detach();
            }
            // If overlay exists and attached...
            if (overlayRef && overlayRef.hasAttached()) {
                // Detach it
                overlayRef.detach();
                overlayRef.dispose();
            }
        });
        // Attach the portal to the overlay
        overlayRef.attach(templatePortal);
    };
    /**
     * Get month label
     *
     * @param month
     */
    FuseDateRangeComponent.prototype.getMonthLabel = function (month) {
        if (month === 1) {
            return this.activeDates.month1.clone().format('MMMM Y');
        }
        return this.activeDates.month2.clone().format('MMMM Y');
    };
    /**
     * Date class function to add/remove class names to calendar days
     */
    FuseDateRangeComponent.prototype.dateClass = function () {
        var _this = this;
        return function (date) {
            // If the date is both start and end date...
            if (date.isSame(_this._range.start, 'day') && date.isSame(_this._range.end, 'day')) {
                return ['fuse-date-range', 'fuse-date-range-start', 'fuse-date-range-end'];
            }
            // If the date is the start date...
            if (date.isSame(_this._range.start, 'day')) {
                return ['fuse-date-range', 'fuse-date-range-start'];
            }
            // If the date is the end date...
            if (date.isSame(_this._range.end, 'day')) {
                return ['fuse-date-range', 'fuse-date-range-end'];
            }
            // If the date is in between start and end dates...
            if (date.isBetween(_this._range.start, _this._range.end, 'day')) {
                return ['fuse-date-range', 'fuse-date-range-mid'];
            }
            return undefined;
        };
    };
    /**
     * Date filter to enable/disable calendar days
     */
    FuseDateRangeComponent.prototype.dateFilter = function () {
        var _this = this;
        // If we are selecting the end date, disable all the dates that comes before the start date
        return function (date) { return !(_this.setWhichDate === 'end' && date.isBefore(_this._range.start, 'day')); };
    };
    /**
     * On selected date change
     *
     * @param date
     */
    FuseDateRangeComponent.prototype.onSelectedDateChange = function (date) {
        // Create a new range object
        var newRange = {
            start: this._range.start.clone().toISOString(),
            end: this._range.end.clone().toISOString(),
            whichDate: null
        };
        // Replace either the start or the end date with the new one
        // depending on which date we are setting
        if (this.setWhichDate === 'start') {
            newRange.start = moment(newRange.start).year(date.year()).month(date.month()).date(date.date()).toISOString();
        }
        else {
            newRange.end = moment(newRange.end).year(date.year()).month(date.month()).date(date.date()).toISOString();
        }
        // Append the which date to the new range object
        newRange.whichDate = this.setWhichDate;
        // Switch which date to set on the next run
        this.setWhichDate = this.setWhichDate === 'start' ? 'end' : 'start';
        // Set the range
        this.range = newRange;
    };
    /**
     * Go to previous month on both views
     */
    FuseDateRangeComponent.prototype.prev = function () {
        this.activeDates.month1 = moment(this.activeDates.month1).subtract(1, 'month');
        this.activeDates.month2 = moment(this.activeDates.month2).subtract(1, 'month');
    };
    /**
     * Go to next month on both views
     */
    FuseDateRangeComponent.prototype.next = function () {
        this.activeDates.month1 = moment(this.activeDates.month1).add(1, 'month');
        this.activeDates.month2 = moment(this.activeDates.month2).add(1, 'month');
    };
    /**
     * Update the start time
     *
     * @param event
     */
    FuseDateRangeComponent.prototype.updateStartTime = function (event) {
        // Parse the time
        var parsedTime = this._parseTime(event.target.value);
        // Go back to the previous value if the form control is not valid
        if (this.startTimeFormControl.invalid) {
            // Override the time
            var time = this._range.start.clone().format(this._timeFormat);
            // Set the time
            this.startTimeFormControl.setValue(time);
            // Do not update the range
            return;
        }
        // Append the new time to the start date
        var startDate = this._range.start.clone().hours(parsedTime.hours()).minutes(parsedTime.minutes());
        // If the new start date is after the current end date,
        // use the end date's time and set the start date again
        if (startDate.isAfter(this._range.end)) {
            var endDateHours = this._range.end.hours();
            var endDateMinutes = this._range.end.minutes();
            // Set the start date
            startDate.hours(endDateHours).minutes(endDateMinutes);
        }
        // If everything is okay, set the new date
        this.range = {
            start: startDate.toISOString(),
            end: this._range.end.clone().toISOString(),
            whichDate: 'start'
        };
    };
    /**
     * Update the end time
     *
     * @param event
     */
    FuseDateRangeComponent.prototype.updateEndTime = function (event) {
        // Parse the time
        var parsedTime = this._parseTime(event.target.value);
        // Go back to the previous value if the form control is not valid
        if (this.endTimeFormControl.invalid) {
            // Override the time
            var time = this._range.end.clone().format(this._timeFormat);
            // Set the time
            this.endTimeFormControl.setValue(time);
            // Do not update the range
            return;
        }
        // Append the new time to the end date
        var endDate = this._range.end.clone().hours(parsedTime.hours()).minutes(parsedTime.minutes());
        // If the new end date is before the current start date,
        // use the start date's time and set the end date again
        if (endDate.isBefore(this._range.start)) {
            var startDateHours = this._range.start.hours();
            var startDateMinutes = this._range.start.minutes();
            // Set the end date
            endDate.hours(startDateHours).minutes(startDateMinutes);
        }
        // If everything is okay, set the new date
        this.range = {
            start: this._range.start.clone().toISOString(),
            end: endDate.toISOString(),
            whichDate: 'end'
        };
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Initialize
     *
     * @private
     */
    FuseDateRangeComponent.prototype._init = function () {
        // Start and end time form controls
        this.startTimeFormControl = new forms_1.FormControl('', [forms_1.Validators.pattern(this._timeRegExp)]);
        this.endTimeFormControl = new forms_1.FormControl('', [forms_1.Validators.pattern(this._timeRegExp)]);
        // Set the default range
        this._programmaticChange = true;
        this.range = {
            start: moment().startOf('day').toISOString(),
            end: moment().add(1, 'day').endOf('day').toISOString()
        };
        // Set the default time range
        this._programmaticChange = true;
        this.timeRange = true;
    };
    /**
     * Parse the time from the inputs
     *
     * @param value
     * @private
     */
    FuseDateRangeComponent.prototype._parseTime = function (value) {
        // Parse the time using the time regexp
        var timeArr = value.split(this._timeRegExp).filter(function (part) { return part !== ''; });
        // Get the meridiem
        var meridiem = timeArr[2] || null;
        // If meridiem exists...
        if (meridiem) {
            // Create a moment using 12-hours format and return it
            return moment(value, 'hh:mmA').seconds(0);
        }
        // If meridiem doesn't exist, create a moment using 24-hours format and return in
        return moment(value, 'HH:mm').seconds(0);
    };
    var FuseDateRangeComponent_1;
    tslib_1.__decorate([
        (0, core_1.Output)(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], FuseDateRangeComponent.prototype, "rangeChanged", void 0);
    tslib_1.__decorate([
        (0, core_1.ViewChild)('matMonthView1'),
        tslib_1.__metadata("design:type", datepicker_1.MatMonthView)
    ], FuseDateRangeComponent.prototype, "_matMonthView1", void 0);
    tslib_1.__decorate([
        (0, core_1.ViewChild)('matMonthView2'),
        tslib_1.__metadata("design:type", datepicker_1.MatMonthView)
    ], FuseDateRangeComponent.prototype, "_matMonthView2", void 0);
    tslib_1.__decorate([
        (0, core_1.ViewChild)('pickerPanelOrigin', { read: core_1.ElementRef }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], FuseDateRangeComponent.prototype, "_pickerPanelOrigin", void 0);
    tslib_1.__decorate([
        (0, core_1.ViewChild)('pickerPanel'),
        tslib_1.__metadata("design:type", core_1.TemplateRef)
    ], FuseDateRangeComponent.prototype, "_pickerPanel", void 0);
    tslib_1.__decorate([
        (0, core_1.HostBinding)('class.fuse-date-range'),
        tslib_1.__metadata("design:type", Object)
    ], FuseDateRangeComponent.prototype, "_defaultClassNames", void 0);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], FuseDateRangeComponent.prototype, "dateFormat", null);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], FuseDateRangeComponent.prototype, "timeFormat", null);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], FuseDateRangeComponent.prototype, "timeRange", null);
    tslib_1.__decorate([
        (0, core_1.Input)(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], FuseDateRangeComponent.prototype, "range", null);
    FuseDateRangeComponent = FuseDateRangeComponent_1 = tslib_1.__decorate([
        (0, core_1.Component)({
            selector: 'fuse-date-range',
            templateUrl: './date-range.component.html',
            styleUrls: ['./date-range.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            exportAs: 'fuseDateRange',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: (0, core_1.forwardRef)(function () { return FuseDateRangeComponent_1; }),
                    multi: true
                }
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            core_1.ElementRef,
            overlay_1.Overlay,
            core_1.Renderer2,
            core_1.ViewContainerRef])
    ], FuseDateRangeComponent);
    return FuseDateRangeComponent;
}());
exports.FuseDateRangeComponent = FuseDateRangeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRlLXJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQTBOO0FBQzFOLHdDQUFrRztBQUNsRyxnREFBK0M7QUFDL0MsOENBQXFEO0FBQ3JELDJEQUF1RjtBQUN2Riw2QkFBK0I7QUFDL0IsK0JBQWlDO0FBaUJqQztJQTZCSTs7T0FFRztJQUNILGdDQUNZLGtCQUFxQyxFQUNyQyxXQUF1QixFQUN2QixRQUFpQixFQUNqQixVQUFxQixFQUNyQixpQkFBbUM7UUFKbkMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQW5DNUIsaUJBQVksR0FBaUQsSUFBSSxtQkFBWSxFQUFrQyxDQUFDO1FBS3JGLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUV4RSxnQkFBVyxHQUFxRDtZQUM1RCxNQUFNLEVBQUUsSUFBSTtZQUNaLE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FBQztRQUNGLGlCQUFZLEdBQW9CLE9BQU8sQ0FBQztRQU9oQyxXQUFNLEdBQWlEO1lBQzNELEtBQUssRUFBRSxJQUFJO1lBQ1gsR0FBRyxFQUFJLElBQUk7U0FDZCxDQUFDO1FBR2UsZ0JBQVcsR0FBVyxJQUFJLE1BQU0sQ0FBQyxpRUFBaUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsSCxvQkFBZSxHQUFpQixJQUFJLGNBQU8sRUFBTyxDQUFDO1FBYXZELElBQUksQ0FBQyxTQUFTLEdBQUc7UUFDakIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRztRQUNsQixDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztRQUMvQixJ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