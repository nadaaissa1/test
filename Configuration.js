"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    Capabilities: {
        browserName: 'chrome'
    },
    specs: ['./Features/Login.feature'],
    cucumberOpts: {
        require: 'Features/Step_Definitions/StepDef.js',
        format: 'json:.tmp/results.json'
    },
    plugins: [{
            package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
            options: {
                // read the options part for more options
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true
            }
        }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR1csUUFBQSxNQUFNLEdBQVc7SUFDeEIsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFFRCxLQUFLLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztJQUVuQyxZQUFZLEVBQUU7UUFDVixPQUFPLEVBQUUsc0NBQXNDO1FBQy9DLE1BQU0sRUFBRSx3QkFBd0I7S0FDbkM7SUFFRCxPQUFPLEVBQUUsQ0FBQztZQUNOLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLG1EQUFtRCxDQUFDO1lBQzdFLE9BQU8sRUFBQztnQkFDSix5Q0FBeUM7Z0JBQ3pDLDJCQUEyQixFQUFFLElBQUk7Z0JBQ2pDLDRCQUE0QixFQUFFLElBQUk7YUFDckM7U0FDSixDQUFDO0NBQ0wsQ0FBQyJ9