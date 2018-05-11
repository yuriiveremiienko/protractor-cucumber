import { browser } from 'protractor';
import { Before, After, Status } from "cucumber";
import * as fs from 'fs';

Before(() => {
    return browser.get('/');
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, 'image/png');
    }
});