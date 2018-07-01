import { CucumberJSAllureFormatter, AllureRuntime, AllureConfig } from 'cucumberjs-allure2-reporter';

export default class Reporter extends CucumberJSAllureFormatter {
	constructor(options: any) {
		super(
			options,
			new AllureRuntime(new AllureConfig( './reports/allure-results')),
			{
				labels: {
					issue: [/@bug_(.*)/],
					epic: [/@feature:(.*)/]
				}
			}
		);
	}
}