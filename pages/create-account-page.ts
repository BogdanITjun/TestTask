import {Page, Locator, expect} from '@playwright/test';

export class AccountPage {
    readonly payDoLogo: Locator;
    readonly backToHomePage: Locator
    readonly logIn: Locator;
    readonly switchAccount: Locator;
    readonly enterEmail: Locator
    readonly enterPassword: Locator
    readonly confirmPassword: Locator
    readonly passwordConfirmContainer: Locator

    constructor(readonly page: Page) {
        this.passwordConfirmContainer = this.page.locator('[datatestname="passwordConfirm"]');
        this.enterEmail = this.page.getByRole('textbox', {name: 'Enter email'})
        this.enterPassword = this.page.getByRole('textbox', {name: 'Enter password'})
        this.confirmPassword = this.passwordConfirmContainer.getByRole('textbox', {name: 'Enter password'})
        this.logIn = this.page.getByRole('link', {name: 'Log In'})
        this.backToHomePage = this.page.getByRole('link', {name: 'Back to Homepage'})
        this.payDoLogo = this.page.getByRole('link', {name: 'Paydo logo'})
        this.switchAccount = this.page.getByRole('link', {name: 'Switch to create Business account'})

    }

    async expectAllUIElements() {
        await expect(this.logIn).toBeVisible();
        await expect(this.backToHomePage).toBeVisible();
        await expect(this.payDoLogo).toBeVisible();
        await expect(this.switchAccount).toBeVisible();
        await expect(this.enterEmail).toBeVisible();
        await expect(this.enterPassword.first()).toBeVisible();
        await expect(this.confirmPassword).toBeVisible();

    }
}