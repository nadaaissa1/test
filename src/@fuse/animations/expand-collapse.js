"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandCollapse = void 0;
var animations_1 = require("@angular/animations");
var defaults_1 = require("@fuse/animations/defaults");
// -----------------------------------------------------------------------------------------------------
// @ Expand / collapse
// -----------------------------------------------------------------------------------------------------
var expandCollapse = (0, animations_1.trigger)('expandCollapse', [
    (0, animations_1.state)('void, collapsed', (0, animations_1.style)({
        height: '0'
    })),
    (0, animations_1.state)('*, expanded', (0, animations_1.style)('*')),
    // Prevent the transition if the state is false
    (0, animations_1.transition)('void <=> false, collapsed <=> false, expanded <=> false', []),
    // Transition
    (0, animations_1.transition)('void <=> *, collapsed <=> expanded', (0, animations_1.animate)('{{timings}}'), {
        params: {
            timings: "".concat(defaults_1.FuseAnimationDurations.entering, " ").concat(defaults_1.FuseAnimationCurves.deceleration)
        }
    })
]);
exports.expandCollapse = expandCollapse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kLWNvbGxhcHNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwYW5kLWNvbGxhcHNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtEQUFpRjtBQUNqRixzREFBd0Y7QUFFeEYsd0dBQXdHO0FBQ3hHLHNCQUFzQjtBQUN0Qix3R0FBd0c7QUFDeEcsSUFBTSxjQUFjLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGdCQUFnQixFQUMzQztJQUNJLElBQUEsa0JBQUssRUFBQyxpQkFBaUIsRUFDbkIsSUFBQSxrQkFBSyxFQUFDO1FBQ0YsTUFBTSxFQUFFLEdBQUc7S0FDZCxDQUFDLENBQ0w7SUFFRCxJQUFBLGtCQUFLLEVBQUMsYUFBYSxFQUNmLElBQUEsa0JBQUssRUFBQyxHQUFHLENBQUMsQ0FDYjtJQUVELCtDQUErQztJQUMvQyxJQUFBLHVCQUFVLEVBQUMseURBQXlELEVBQUUsRUFBRSxDQUFDO0lBRXpFLGFBQWE7SUFDYixJQUFBLHVCQUFVLEVBQUMsb0NBQW9DLEVBQzNDLElBQUEsb0JBQU8sRUFBQyxhQUFhLENBQUMsRUFDdEI7UUFDSSxNQUFNLEVBQUU7WUFDSixPQUFPLEVBQUUsVUFBRyxpQ0FBc0IsQ0FBQyxRQUFRLGNBQUksOEJBQW1CLENBQUMsWUFBWSxDQUFFO1NBQ3BGO0tBQ0osQ0FDSjtDQUNKLENBQ0osQ0FBQztBQUVPLHdDQUFjIn0=