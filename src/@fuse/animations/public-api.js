"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fuseAnimations = void 0;
var expand_collapse_1 = require("@fuse/animations/expand-collapse");
var fade_1 = require("@fuse/animations/fade");
var shake_1 = require("@fuse/animations/shake");
var slide_1 = require("@fuse/animations/slide");
var zoom_1 = require("@fuse/animations/zoom");
exports.fuseAnimations = [
    expand_collapse_1.expandCollapse,
    fade_1.fadeIn, fade_1.fadeInTop, fade_1.fadeInBottom, fade_1.fadeInLeft, fade_1.fadeInRight,
    fade_1.fadeOut, fade_1.fadeOutTop, fade_1.fadeOutBottom, fade_1.fadeOutLeft, fade_1.fadeOutRight,
    shake_1.shake,
    slide_1.slideInTop, slide_1.slideInBottom, slide_1.slideInLeft, slide_1.slideInRight,
    slide_1.slideOutTop, slide_1.slideOutBottom, slide_1.slideOutLeft, slide_1.slideOutRight,
    zoom_1.zoomIn, zoom_1.zoomOut
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB1YmxpYy1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0VBQWtFO0FBQ2xFLDhDQUFnSztBQUNoSyxnREFBK0M7QUFDL0MsZ0RBQXdKO0FBQ3hKLDhDQUF3RDtBQUUzQyxRQUFBLGNBQWMsR0FBRztJQUMxQixnQ0FBYztJQUNkLGFBQU0sRUFBRSxnQkFBUyxFQUFFLG1CQUFZLEVBQUUsaUJBQVUsRUFBRSxrQkFBVztJQUN4RCxjQUFPLEVBQUUsaUJBQVUsRUFBRSxvQkFBYSxFQUFFLGtCQUFXLEVBQUUsbUJBQVk7SUFDN0QsYUFBSztJQUNMLGtCQUFVLEVBQUUscUJBQWEsRUFBRSxtQkFBVyxFQUFFLG9CQUFZO0lBQ3BELG1CQUFXLEVBQUUsc0JBQWMsRUFBRSxvQkFBWSxFQUFFLHFCQUFhO0lBQ3hELGFBQU0sRUFBRSxjQUFPO0NBQ2xCLENBQUMifQ==