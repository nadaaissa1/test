import { Config, Capabilities } from "protractor";


export let config: Config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    Capabilities: {
        browserName: 'chrome'
    },

    specs: ['./Features/Login.feature'],

    cucumberOpts: {
        require: 'Features/Step_Definitions/StepDef.js',
        format: 'json:./results/results.json'
    },

    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
            // read the options part for more options
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }]
};