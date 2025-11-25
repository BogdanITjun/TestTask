import { test as base } from '@playwright/test';
import { UserApi } from '../api/user-api';
import { HomePage } from '../pages/home-page';
export { expect } from '@playwright/test';

type Fixtures = {
    homePage: HomePage;
    userApi: UserApi;
};

export const test = base.extend<Fixtures>({
    homePage: async ({ page }, use) => {
        await page.goto('https://paydo.com/');
        const homePage = new HomePage(page);
        await homePage.expectHeaderLogo();
        await use(homePage);
    },

    userApi: async ({ request }, use) => {
        const api = new UserApi(request);
        await use(api);
    }
});
