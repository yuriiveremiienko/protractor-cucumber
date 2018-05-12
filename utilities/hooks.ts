import { browser } from 'protractor';
import { Before, After } from 'cucumber';
import {  } from 'cucumber-expressions';

Before(() => {
    return browser.get('/');
});

After(async function(scenario) {
    if (scenario.result.status === 'failed') {

        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, 'image/png');
    }
});