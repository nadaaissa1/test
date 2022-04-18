"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slideOutRight = exports.slideOutLeft = exports.slideOutBottom = exports.slideOutTop = exports.slideInRight = exports.slideInLeft = exports.slideInBottom = exports.slideInTop = void 0;
var animations_1 = require("@angular/animations");
var defaults_1 = require("@fuse/animations/defaults");
// -----------------------------------------------------------------------------------------------------
// @ Slide in top
// -----------------------------------------------------------------------------------------------------
var slideInTop = (0, animations_1.trigger)('slideInTop', [
    (0, animations_1.state)('void', (0, animations_1.style)({
        transform: 'translate3d(0, -100%, 0)'
    })),
    (0, animations_1.state)('*', (0, animations_1.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    // Prevent the transition if the state is false
    (0, animations_1.transition)('void => false', []),
    // Transition
    (0, animations_1.transition)('void => *', (0, animations_1.animate)('{{timings}}'), {
        params: {
            timings: "".concat(defaults_1.FuseAnimationDurations.entering, " ").concat(defaults_1.FuseAnimationCurves.deceleration)
        }
    })
]);
exports.slideInTop = slideInTop;
// -----------------------------------------------------------------------------------------------------
// @ Slide in bottom
// -----------------------------------------------------------------------------------------------------
var slideInBottom = (0, animations_1.trigger)('slideInBottom', [
    (0, animations_1.state)('void', (0, animations_1.style)({
        transform: 'translate3d(0, 100%, 0)'
    })),
    (0, animations_1.state)('*', (0, animations_1.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    // Prevent the transition if the state is false
    (0, animations_1.transition)('void => false', []),
    // Transition
    (0, animations_1.transition)('void => *', (0, animations_1.animate)('{{timings}}'), {
        params: {
            timings: "".concat(defaults_1.FuseAnimationDurations.entering, " ").concat(defaults_1.FuseAnimationCurves.deceleration)
        }
    })
]);
exports.slideInBottom = slideInBottom;
// -----------------------------------------------------------------------------------------------------
// @ Slide in left
// -----------------------------------------------------------------------------------------------------
var slideInLeft = (0, animations_1.trigger)('slideInLeft', [
    (0, animations_1.state)('void', (0, animations_1.style)({
        transform: 'translate3d(-100%, 0, 0)'
    })),
    (0, animations_1.state)('*', (0, animations_1.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    // Prevent the transition if the state is false
    (0, animations_1.transition)('void => false', []),
    // Transition
    (0, animations_1.transition)('void => *', (0, animations_1.animate)('{{timings}}'), {
        params: {
            timings: "".concat(defaults_1.FuseAnimationDurations.entering, " ").concat(defaults_1.FuseAnimationCurves.deceleration)
        }
    })
]);
exports.slideInLeft = slideInLeft;
// -----------------------------------------------------------------------------------------------------
// @ Slide in right
// -----------------------------------------------------------------------------------------------------
var slideInRight = (0, animations_1.trigger)('slideInRight', [
    (0, animations_1.state)('void', (0, animations_1.style)({
        transform: 'translate3d(100%, 0, 0)'
    })),
    (0, animations_1.state)('*', (0, animations_1.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    // Prevent the transition if the state is false
    (0, animations_1.transition)('void => false', []),
    // Transition
    (0, animations_1.transition)('void => *', (0, animations_1.animate)('{{timings}}'), {
        params: {
            timings: "".concat(defaults_1.FuseAnimationDurations.entering, " ").concat(defaults_1.FuseAnimationCurves.deceleration)
        }
    })
]);
exports.slideInRight = slideInRight;
// -----------------------------------------------------------------------------------------------------
// @ Slide out top
// -----------------------------------------------------------------------------------------------------
var slideOutTop = (0, animations_1.trigger)('slideOutTop', [
    (0, animations_1.state)('*', (0, animations_1.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    (0, animations_1.state)('void', (0, animations_1.style)({
        transform: 'translate3d(0, -100%, 0)'
    })),
    // Prevent the transition if the state is false
    (0, animations_1.transition)('false => void', []),
    // Transition
    (0, animations_1.transition)('* => void', (0, animations_1.animate)('{{timings}}'), {
        params: {
            timings: "".concat(defaults_1.FuseAnimationDurations.exiting, " ").concat(defaults_1.FuseAnimationCurves.acceleration)
        }
    })
]);
exports.slideOutTop = slideOutTop;
// -----------------------------------------------------------------------------------------------------
// @ Slide out bottom
// -----------------------------------------------------------------------------------------------------
var slideOutBottom = (0, animations_1.trigger)('slideOutBottom', [
    (0, animations_1.state)('*', (0, animations_1.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    (0, animations_1.state)('void', (0, animations_1.style)({
        transform: 'translate3d(0, 100%, 0)'
    })),
    // Prevent the transition if the state is false
    (0, animations_1.transition)('false => void', []),
    // Transition
    (0, animations_1.transition)('* => void', (0, animations_1.animate)('{{timings}}'), {
        params: {
            timings: "".concat(defaults_1.FuseAnimationDurations.exiting, " ").concat(defaults_1.FuseAnimationCurves.acceleration)
        }
    })
]);
exports.slideOutBottom = slideOutBottom;
// -----------------------------------------------------------------------------------------------------
// @ Slide out left
// -----------------------------------------------------------------------------------------------------
var slideOutLeft = (0, animations_1.trigger)('slideOutLeft', [
    (0, animations_1.state)('*', (0, animations_1.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    (0, animations_1.state)('void', (0, animations_1.style)({
        transform: 'translate3d(-100%, 0, 0)'
    })),
    // Prevent the transition if the state is false
    (0, animations_1.transition)('false => void', []),
    // Transition
    (0, animations_1.transition)('* => void', (0, animations_1.animate)('{{timings}}'), {
        params: {
            timings: "".concat(defaults_1.FuseAnimationDurations.exiting, " ").concat(defaults_1.FuseAnimationCurves.acceleration)
        }
    })
]);
exports.slideOutLeft = slideOutLeft;
// -----------------------------------------------------------------------------------------------------
// @ Slide out right
// -----------------------------------------------------------------------------------------------------
var slideOutRight = (0, animations_1.trigger)('slideOutRight', [
    (0, animations_1.state)('*', (0, animations_1.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    (0, animations_1.state)('void', (0, animations_1.style)({
        transform: 'translate3d(100%, 0, 0)'
    })),
    // Prevent the transition if the state is false
    (0, animations_1.transition)('false => void', []),
    // Transition
    (0, animations_1.transition)('* => void', (0, animations_1.animate)('{{timings}}'), {
        params: {
            timings: "".concat(defaults_1.FuseAnimationDurations.exiting, " ").concat(defaults_1.FuseAnimationCurves.acceleration)
        }
    })
]);
exports.slideOutRight = slideOutRight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzbGlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBaUY7QUFDakYsc0RBQXdGO0FBRXhGLHdHQUF3RztBQUN4RyxpQkFBaUI7QUFDakIsd0dBQXdHO0FBQ3hHLElBQU0sVUFBVSxHQUFHLElBQUEsb0JBQU8sRUFBQyxZQUFZLEVBQ25DO0lBQ0ksSUFBQSxrQkFBSyxFQUFDLE1BQU0sRUFDUixJQUFBLGtCQUFLLEVBQUM7UUFDRixTQUFTLEVBQUUsMEJBQTBCO0tBQ3hDLENBQUMsQ0FDTDtJQUVELElBQUEsa0JBQUssRUFBQyxHQUFHLEVBQ0wsSUFBQSxrQkFBSyxFQUFDO1FBQ0YsU0FBUyxFQUFFLHNCQUFzQjtLQUNwQyxDQUFDLENBQ0w7SUFFRCwrQ0FBK0M7SUFDL0MsSUFBQSx1QkFBVSxFQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7SUFFL0IsYUFBYTtJQUNiLElBQUEsdUJBQVUsRUFBQyxXQUFXLEVBQUUsSUFBQSxvQkFBTyxFQUFDLGFBQWEsQ0FBQyxFQUMxQztRQUNJLE1BQU0sRUFBRTtZQUNKLE9BQU8sRUFBRSxVQUFHLGlDQUFzQixDQUFDLFFBQVEsY0FBSSw4QkFBbUIsQ0FBQyxZQUFZLENBQUU7U0FDcEY7S0FDSixDQUNKO0NBQ0osQ0FDSixDQUFDO0FBMk5PLGdDQUFVO0FBek5uQix3R0FBd0c7QUFDeEcsb0JBQW9CO0FBQ3BCLHdHQUF3RztBQUN4RyxJQUFNLGFBQWEsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBZSxFQUN6QztJQUNJLElBQUEsa0JBQUssRUFBQyxNQUFNLEVBQ1IsSUFBQSxrQkFBSyxFQUFDO1FBQ0YsU0FBUyxFQUFFLHlCQUF5QjtLQUN2QyxDQUFDLENBQ0w7SUFFRCxJQUFBLGtCQUFLLEVBQUMsR0FBRyxFQUNMLElBQUEsa0JBQUssRUFBQztRQUNGLFNBQVMsRUFBRSxzQkFBc0I7S0FDcEMsQ0FBQyxDQUNMO0lBRUQsK0NBQStDO0lB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