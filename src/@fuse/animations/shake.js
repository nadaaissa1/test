"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shake = void 0;
var animations_1 = require("@angular/animations");
// -----------------------------------------------------------------------------------------------------
// @ Shake
// -----------------------------------------------------------------------------------------------------
var shake = (0, animations_1.trigger)('shake', [
    // Prevent the transition if the state is false
    (0, animations_1.transition)('void => false', []),
    // Transition
    (0, animations_1.transition)('void => *, * => true', [
        (0, animations_1.animate)('{{timings}}', (0, animations_1.keyframes)([
            (0, animations_1.style)({
                transform: 'translate3d(0, 0, 0)',
                offset: 0
            }),
            (0, animations_1.style)({
                transform: 'translate3d(-10px, 0, 0)',
                offset: 0.1
            }),
            (0, animations_1.style)({
                transform: 'translate3d(10px, 0, 0)',
                offset: 0.2
            }),
            (0, animations_1.style)({
                transform: 'translate3d(-10px, 0, 0)',
                offset: 0.3
            }),
            (0, animations_1.style)({
                transform: 'translate3d(10px, 0, 0)',
                offset: 0.4
            }),
            (0, animations_1.style)({
                transform: 'translate3d(-10px, 0, 0)',
                offset: 0.5
            }),
            (0, animations_1.style)({
                transform: 'translate3d(10px, 0, 0)',
                offset: 0.6
            }),
            (0, animations_1.style)({
                transform: 'translate3d(-10px, 0, 0)',
                offset: 0.7
            }),
            (0, animations_1.style)({
                transform: 'translate3d(10px, 0, 0)',
                offset: 0.8
            }),
            (0, animations_1.style)({
                transform: 'translate3d(-10px, 0, 0)',
                offset: 0.9
            }),
            (0, animations_1.style)({
                transform: 'translate3d(0, 0, 0)',
                offset: 1
            })
        ]))
    ], {
        params: {
            timings: '0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)'
        }
    })
]);
exports.shake = shake;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hha2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaGFrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBcUY7QUFFckYsd0dBQXdHO0FBQ3hHLFVBQVU7QUFDVix3R0FBd0c7QUFDeEcsSUFBTSxLQUFLLEdBQUcsSUFBQSxvQkFBTyxFQUFDLE9BQU8sRUFDekI7SUFFSSwrQ0FBK0M7SUFDL0MsSUFBQSx1QkFBVSxFQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7SUFFL0IsYUFBYTtJQUNiLElBQUEsdUJBQVUsRUFBQyxzQkFBc0IsRUFDN0I7UUFDSSxJQUFBLG9CQUFPLEVBQUMsYUFBYSxFQUNqQixJQUFBLHNCQUFTLEVBQUM7WUFDTixJQUFBLGtCQUFLLEVBQUM7Z0JBQ0YsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsTUFBTSxFQUFLLENBQUM7YUFDZixDQUFDO1lBQ0YsSUFBQSxrQkFBSyxFQUFDO2dCQUNGLFNBQVMsRUFBRSwwQkFBMEI7Z0JBQ3JDLE1BQU0sRUFBSyxHQUFHO2FBQ2pCLENBQUM7WUFDRixJQUFBLGtCQUFLLEVBQUM7Z0JBQ0YsU0FBUyxFQUFFLHlCQUF5QjtnQkFDcEMsTUFBTSxFQUFLLEdBQUc7YUFDakIsQ0FBQztZQUNGLElBQUEsa0JBQUssRUFBQztnQkFDRixTQUFTLEVBQUUsMEJBQTBCO2dCQUNyQyxNQUFNLEVBQUssR0FBRzthQUNqQixDQUFDO1lBQ0YsSUFBQSxrQkFBSyxFQUFDO2dCQUNGLFNBQVMsRUFBRSx5QkFBeUI7Z0JBQ3BDLE1BQU0sRUFBSyxHQUFHO2FBQ2pCLENBQUM7WUFDRixJQUFBLGtCQUFLLEVBQUM7Z0JBQ0YsU0FBUyxFQUFFLDBCQUEwQjtnQkFDckMsTUFBTSxFQUFLLEdBQUc7YUFDakIsQ0FBQztZQUNGLElBQUEsa0JBQUssRUFBQztnQkFDRixTQUFTLEVBQUUseUJBQXlCO2dCQUNwQyxNQUFNLEVBQUssR0FBRzthQUNqQixDQUFDO1lBQ0YsSUFBQSxrQkFBSyxFQUFDO2dCQUNGLFNBQVMsRUFBRSwwQkFBMEI7Z0JBQ3JDLE1BQU0sRUFBSyxHQUFHO2FBQ2pCLENBQUM7WUFDRixJQUFBLGtCQUFLLEVBQUM7Z0JBQ0YsU0FBUyxFQUFFLHlCQUF5QjtnQkFDcEMsTUFBTSxFQUFLLEdBQUc7YUFDakIsQ0FBQztZQUNGLElBQUEsa0JBQUssRUFBQztnQkFDRixTQUFTLEVBQUUsMEJBQTBCO2dCQUNyQyxNQUFNLEVBQUssR0FBRzthQUNqQixDQUFDO1lBQ0YsSUFBQSxrQkFBSyxFQUFDO2dCQUNGLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLE1BQU0sRUFBSyxDQUFDO2FBQ2YsQ0FBQztTQUNMLENBQUMsQ0FDTDtLQUNKLEVBQ0Q7UUFDSSxNQUFNLEVBQUU7WUFDSixPQUFPLEVBQUUsOENBQThDO1NBQzFEO0tBQ0osQ0FDSjtDQUNKLENBQ0osQ0FBQztBQUVPLHNCQUFLIn0=