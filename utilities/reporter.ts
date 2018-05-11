import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as path from 'path';

const reporter = require('cucumber-html-reporter');
const jsonReports = path.join(process.cwd(), '/reports/json');
const htmlReports = path.join(process.cwd(), '/reports/html');
const cucumberReporterOptions = {
	jsonDir: jsonReports,
    output: htmlReports + '/cucumber_reporter.html',
    reportSuiteAsScenarios: true,
    theme: 'bootstrap',
};

export class Reporter {

    static createDirectory(dir: string): void {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }

    static createHTMLReport(): void {
        try {
            reporter.generate(cucumberReporterOptions);
        } catch (err) {
            if (err) {
                throw new Error('Failed to save cucumber test results to json file.');
            }
        }
    }
}