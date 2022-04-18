"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fadeOutRight = exports.fadeOutLeft = exports.fadeOutBottom = exports.fadeOutTop = exports.fadeOut = exports.fadeInRight = exports.fadeInLeft = exports.fadeInBottom = exports.fadeInTop = exports.fadeIn = void 0;
var animations_1 = require("@angular/animations");
var defaults_1 = require("@fuse/animations/defaults");
// -----------------------------------------------------------------------------------------------------
// @ Fade in
// -----------------------------------------------------------------------------------------------------
var fadeIn = (0, animations_1.trigger)('fadeIn', [
    (0, animations_1.state)('void', (0, animations_1.style)({
        opacity: 0
    })),
    (0, animations_1.state)('*', (0, animations_1.style)({
        opacity: 1
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
exports.fadeIn = fadeIn;
// -----------------------------------------------------------------------------------------------------
// @ Fade in top
// -----------------------------------------------------------------------------------------------------
var fadeInTop = (0, animations_1.trigger)('fadeInTop', [
    (0, animations_1.state)('void', (0, animations_1.style)({
        opacity: 0,
        transform: 'translate3d(0, -100%, 0)'
    })),
    (0, animations_1.state)('*', (0, animations_1.style)({
        opacity: 1,
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
exports.fadeInTop = fadeInTop;
// -----------------------------------------------------------------------------------------------------
// @ Fade in bottom
// -----------------------------------------------------------------------------------------------------
var fadeInBottom = (0, animations_1.trigger)('fadeInBottom', [
    (0, animations_1.state)('void', (0, animations_1.style)({
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)'
    })),
    (0, animations_1.state)('*', (0, animations_1.style)({
        opacity: 1,
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
exports.fadeInBottom = fadeInBottom;
// -----------------------------------------------------------------------------------------------------
// @ Fade in left
// -----------------------------------------------------------------------------------------------------
var fadeInLeft = (0, animations_1.trigger)('fadeInLeft', [
    (0, animations_1.state)('void', (0, animations_1.style)({
        opacity: 0,
        transform: 'translate3d(-100%, 0, 0)'
    })),
    (0, animations_1.state)('*', (0, animations_1.style)({
        opacity: 1,
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
exports.fadeInLeft = fadeInLeft;
// -----------------------------------------------------------------------------------------------------
// @ Fade in right
// -----------------------------------------------------------------------------------------------------
var fadeInRight = (0, animations_1.trigger)('fadeInRight', [
    (0, animations_1.state)('void', (0, animations_1.style)({
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
    })),
    (0, animations_1.state)('*', (0, animations_1.style)({
        opacity: 1,
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
exports.fadeInRight = fadeInRight;
// -----------------------------------------------------------------------------------------------------
// @ Fade out
// -----------------------------------------------------------------------------------------------------
var fadeOut = (0, animations_1.trigger)('fadeOut', [
    (0, animations_1.state)('*', (0, animations_1.style)({
        opacity: 1
    })),
    (0, animations_1.state)('void', (0, animations_1.style)({
        opacity: 0
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
exports.fadeOut = fadeOut;
// -----------------------------------------------------------------------------------------------------
// @ Fade out top
// -----------------------------------------------------------------------------------------------------
var fadeOutTop = (0, animations_1.trigger)('fadeOutTop', [
    (0, animations_1.state)('*', (0, animations_1.style)({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
    })),
    (0, animations_1.state)('void', (0, animations_1.style)({
        opacity: 0,
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
exports.fadeOutTop = fadeOutTop;
// -----------------------------------------------------------------------------------------------------
// @ Fade out bottom
// -----------------------------------------------------------------------------------------------------
var fadeOutBottom = (0, animations_1.trigger)('fadeOutBottom', [
    (0, animations_1.state)('*', (0, animations_1.style)({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
    })),
    (0, animations_1.state)('void', (0, animations_1.style)({
        opacity: 0,
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
exports.fadeOutBottom = fadeOutBottom;
// -----------------------------------------------------------------------------------------------------
// @ Fade out left
// -----------------------------------------------------------------------------------------------------
var fadeOutLeft = (0, animations_1.trigger)('fadeOutLeft', [
    (0, animations_1.state)('*', (0, animations_1.style)({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
    })),
    (0, animations_1.state)('void', (0, animations_1.style)({
        opacity: 0,
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
exports.fadeOutLeft = fadeOutLeft;
// -----------------------------------------------------------------------------------------------------
// @ Fade out right
// -----------------------------------------------------------------------------------------------------
var fadeOutRight = (0, animations_1.trigger)('fadeOutRight', [
    (0, animations_1.state)('*', (0, animations_1.style)({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
    })),
    (0, animations_1.state)('void', (0, animations_1.style)({
        opacity: 0,
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
exports.fadeOutRight = fadeOutRight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0RBQWlGO0FBQ2pGLHNEQUF3RjtBQUV4Rix3R0FBd0c7QUFDeEcsWUFBWTtBQUNaLHdHQUF3RztBQUN4RyxJQUFNLE1BQU0sR0FBRyxJQUFBLG9CQUFPLEVBQUMsUUFBUSxFQUMzQjtJQUNJLElBQUEsa0JBQUssRUFBQyxNQUFNLEVBQ1IsSUFBQSxrQkFBSyxFQUFDO1FBQ0YsT0FBTyxFQUFFLENBQUM7S0FDYixDQUFDLENBQ0w7SUFFRCxJQUFBLGtCQUFLLEVBQUMsR0FBRyxFQUNMLElBQUEsa0JBQUssRUFBQztRQUNGLE9BQU8sRUFBRSxDQUFDO0tBQ2IsQ0FBQyxDQUNMO0lBRUQsK0NBQStDO0lBQy9DLElBQUEsdUJBQVUsRUFBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO0lBRS9CLGFBQWE7SUFDYixJQUFBLHVCQUFVLEVBQUMsV0FBVyxFQUFFLElBQUEsb0JBQU8sRUFBQyxhQUFhLENBQUMsRUFDMUM7UUFDSSxNQUFNLEVBQUU7WUFDSixPQUFPLEVBQUUsVUFBRyxpQ0FBc0IsQ0FBQyxRQUFRLGNBQUksOEJBQW1CLENBQUMsWUFBWSxDQUFFO1NBQ3BGO0tBQ0osQ0FDSjtDQUNKLENBQ0osQ0FBQztBQXlTTyx3QkFBTTtBQXZTZix3R0FBd0c7QUFDeEcsZ0JBQWdCO0FBQ2hCLHdHQUF3RztBQUN4RyxJQUFNLFNBQVMsR0FBRyxJQUFBLG9CQUFPLEVBQUMsV0FBVyxFQUNqQztJQUNJLElBQUEsa0JBQUssRUFBQyxNQUFNLEVBQ1IsSUFBQSxrQkFBSyxFQUFDO1FBQ0YsT0FBTyxFQUFJLENBQUM7UUFDWixTQUFTLEVBQUUsMEJBQTBCO0tBQ3hDLENBQUMsQ0FDTDtJQUVELElBQUEsa0JBQUssRUFBQyxHQUFHLEVBQ0wsSUFBQSxrQkFBSyxFQUFDO1FBQ0YsT0FBTyxFQUFJLENBQUM7UUFDWixTQUFTLEVBQUUsc0JBQXNCO0tB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