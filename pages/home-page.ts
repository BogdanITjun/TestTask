import {Page, Locator, expect} from '@playwright/test';
import {AccountPage} from './create-account-page';
import {LoginPage} from './login-page';

export class HomePage {
    readonly headerLogo: Locator;
    readonly openAccountButton: Locator;
    readonly bannerContainer: Locator;
    readonly logIn: Locator;

    constructor(readonly page: Page) {
        this.bannerContainer = this.page.locator('.banner-section__header');
        this.headerLogo = this.page.getByRole('heading', {name: 'Online Payment Solutions in One Platform'});
        this.openAccountButton = this.bannerContainer.getByRole('link', {name: 'Open account'});
        this.logIn = this.page.getByRole('link', {name: 'Log In'})
    }

    async expectHeaderLogo() {
        await expect(this.headerLogo).toBeVisible();
    }

    async openAccountPage() {
        await this.openAccountButton.click();
        return new AccountPage(this.page);
    }

    async openLoginPage() {
        await this.logIn.click();
        return new LoginPage(this.page);
    }
}
