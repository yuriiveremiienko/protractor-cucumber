import pages from '../page-objects';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

export class SearchAssertions {

    public async checkSearchResultsDisplayed(): Promise<void> {
        expect(await pages.SearchPage.getSearchResultBlockCount()).greaterThan(0,
            'Search results should be displayed on searchPage',
        );
    }
    public async checkSearchResultsContainsAddress(address: string): Promise<void> {
        const addresses = await pages.SearchPage.getSearchItemsAddresses();

        addresses.forEach((item: string) => {
            expect(item).contain(address,
                'Search results should contain destination city',
            );
        });
    }
}