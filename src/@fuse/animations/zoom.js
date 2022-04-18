"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zoomOut = exports.zoomIn = void 0;
var animations_1 = require("@angular/animations");
var defaults_1 = require("@fuse/animations/defaults");
// -----------------------------------------------------------------------------------------------------
// @ Zoom in
// -----------------------------------------------------------------------------------------------------
var zoomIn = (0, animations_1.trigger)('zoomIn', [
    (0, animations_1.state)('void', (0, animations_1.style)({
        opacity: 0,
        transform: 'scale(0.5)'
    })),
    (0, animations_1.state)('*', (0, animations_1.style)({
        opacity: 1,
        transform: 'scale(1)'
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
exports.zoomIn = zoomIn;
// -----------------------------------------------------------------------------------------------------
// @ Zoom out
// -----------------------------------------------------------------------------------------------------
var zoomOut = (0, animations_1.trigger)('zoomOut', [
    (0, animations_1.state)('*', (0, animations_1.style)({
        opacity: 1,
        transform: 'scale(1)'
    })),
    (0, animations_1.state)('void', (0, animations_1.style)({
        opacity: 0,
        transform: 'scale(0.5)'
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
exports.zoomOut = zoomOut;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInpvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0RBQWlGO0FBQ2pGLHNEQUF3RjtBQUV4Rix3R0FBd0c7QUFDeEcsWUFBWTtBQUNaLHdHQUF3RztBQUN4RyxJQUFNLE1BQU0sR0FBRyxJQUFBLG9CQUFPLEVBQUMsUUFBUSxFQUMzQjtJQUVJLElBQUEsa0JBQUssRUFBQyxNQUFNLEVBQ1IsSUFBQSxrQkFBSyxFQUFDO1FBQ0YsT0FBTyxFQUFJLENBQUM7UUFDWixTQUFTLEVBQUUsWUFBWTtLQUMxQixDQUFDLENBQ0w7SUFFRCxJQUFBLGtCQUFLLEVBQUMsR0FBRyxFQUNMLElBQUEsa0JBQUssRUFBQztRQUNGLE9BQU8sRUFBSSxDQUFDO1FBQ1osU0FBUyxFQUFFLFVBQVU7S0FDeEIsQ0FBQyxDQUNMO0lBRUQsK0NBQStDO0lBQy9DLElBQUEsdUJBQVUsRUFBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO0lBRS9CLGFBQWE7SUFDYixJQUFBLHVCQUFVLEVBQUMsV0FBVyxFQUFFLElBQUEsb0JBQU8sRUFBQyxhQUFhLENBQUMsRUFDMUM7UUFDSSxNQUFNLEVBQUU7WUFDSixPQUFPLEVBQUUsVUFBRyxpQ0FBc0IsQ0FBQyxRQUFRLGNBQUksOEJBQW1CLENBQUMsWUFBWSxDQUFFO1NBQ3BGO0tBQ0osQ0FDSjtDQUNKLENBQ0osQ0FBQztBQW9DTyx3QkFBTTtBQWxDZix3R0FBd0c7QUFDeEcsYUFBYTtBQUNiLHdHQUF3RztBQUN4RyxJQUFNLE9BQU8sR0FBRyxJQUFBLG9CQUFPLEVBQUMsU0FBUyxFQUM3QjtJQUVJLElBQUEsa0JBQUssRUFBQyxHQUFHLEVBQ0wsSUFBQSxrQkFBSyxFQUFDO1FBQ0YsT0FBTyxFQUFJLENBQUM7UUFDWixTQUFTLEVBQUUsVUFBVTtLQUN4QixDQUFDLENBQ0w7SUFFRCxJQUFBLGtCQUFLLEVBQUMsTUFBTSxFQUNSLElBQUEsa0JBQUssRUFBQztRQUNGLE9BQU8sRUFBSSxDQUFDO1FBQ1osU0FBUyxFQUFFLFlBQVk7S0FDMUIsQ0FBQyxDQUNMO0lBRUQsK0NBQStDO0lBQy9DLElBQUEsdUJBQVUsRUFBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO0lBRS9CLGFBQWE7SUFDYixJQUFBLHVCQUFVLEVBQUMsV0FBVyxFQUFFLElBQUEsb0JBQU8sRUFBQyxhQUFhLENBQUMsRUFDMUM7UUFDSSxNQUFNLEVBQUU7WUFDSixPQUFPLEVBQUUsVUFBRyxpQ0FBc0IsQ0FBQyxPQUFPLGNBQUksOEJBQW1CLENBQUMsWUFBWSxDQUFFO1NBQ25GO0tBQ0osQ0FDSjtDQUNKLENBQ0osQ0FBQztBQUVlLDBCQUFPIn0=