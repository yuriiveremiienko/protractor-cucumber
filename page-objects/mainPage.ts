import {$$, browser, ElementFinder, Key} from 'protractor';
import { promise as wdpromise } from 'selenium-webdriver';

export class MainPage {
    protected destinationField: ElementFinder;
    protected searchButton: ElementFinder;

    public constructor() {
        this.destinationField = $$('#ss').first();
        this.searchButton = $$('.sb-searchbox__button').first();
    }

    public navigate(): wdpromise.Promise<void> {
        return browser.get('/');
    }

    public async checkIsOnMainPage(): Promise<void> {
        const onPage: boolean = await this.destinationField.isPresent();

        if(!onPage) throw 'Not on Main page!';
    }

    public async setDestination(destination: string): Promise<void> {
        await this.destinationField.clear();
        await this.destinationField.sendKeys(destination, Key.TAB);
    }

    public submitSearch(): wdpromise.Promise<any> {
        return this.searchButton.click();
    }
}