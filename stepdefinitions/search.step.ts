import pages from '../page-objects';
import actions from '../actions';
import { Given, When, Then, setDefaultTimeout } from 'cucumber';
import { browser } from 'protractor';

setDefaultTimeout(20 * 1000);
browser.waitForAngularEnabled(false);

Given('I am on booking start page', (): Promise<void> => {
    return pages.MainPage.checkIsOnMainPage();
});

When('I search "{city}" on main page', (city: string) => {
    return actions.Search.mainPageSearch(city);
});

Then('Search results should be displayed', () => {
    return actions.SearchAssertions.checkSearchResultsDisplayed();
});

Then('"{city}" should be in search results', (city: string) => {
    return actions.SearchAssertions.checkSearchResultsContainsAddress(city);
});
