import pages from '../page-objects';
import { ISearchPage } from '../utilities/types';

export class Search implements ISearchPage {

    public async mainPageSearch(destination: string): Promise<void> {
        await pages.MainPage.navigate();
        await pages.MainPage.setDestination(destination);
        await pages.MainPage.submitSearch();
    }
}
