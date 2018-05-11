import { Config } from 'protractor';
import { Reporter } from '../utilities/reporter';
const jsonReports = process.cwd() + '/reports/json';

export let config: Config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        format: 'json:./reports/json/cucumber_report.json',
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
    onPrepare: () => {
        Reporter.createDirectory(jsonReports);
    },
    onComplete: () => {
        Reporter.createHTMLReport();
    },
};