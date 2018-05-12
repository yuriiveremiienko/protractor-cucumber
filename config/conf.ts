import { Config } from 'protractor';

export let config: Config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        format: './utilities/reporter.ts',
        require: ['../stepdefinitions/*.step.ts', '../utilities/*.ts'],
        strict: true
    },
    capabilities: {
        browserName: 'chrome',
        maxInstances: 1,
        shardTestFiles: true,
    },
    specs: [ '../features/*.feature' ],
    baseUrl: 'https://www.booking.com/',

    directConnect: true,
    allScriptsTimeout: 300000,
    SELENIUM_PROMISE_MANAGER: false,
    noGlobals: true,

    beforeLaunch() {
        require('rmdir')('./reports');
    },
    onComplete() {
        const allureResultsPath = './reports/allure-results';
        const allureReportPath = './reports/allure-report';

        return require('child_process')
            .exec(`allure generate ${allureResultsPath} -o ${allureReportPath} --clean`);
    },
};