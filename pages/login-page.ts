import {Locator, Page, expect} from "@playwright/test";

export class LoginPage {
    readonly enterEmail: Locator
    readonly enterPassword: Locator
    readonly logIn: Locator;
    readonly authContainer: Locator;
    readonly errorMessage: Locator;

    constructor(readonly page: Page) {
        this.authContainer = this.page.locator('.auth-container');
        this.logIn = this.page.getByRole('button', {name: 'Log in'})
        this.enterEmail = this.authContainer.getByRole('textbox', {name: 'Enter email'})
        this.enterPassword = this.authContainer.getByRole('textbox', {name: 'Enter password'})
        this.errorMessage = this.authContainer.locator('.ngp-info-block:has-text("The email address or password you entered is incorrect")')
    }

    async enterInvalidCredentials(email: string, password: string) {
        await this.enterEmail.fill(email)
        await this.enterPassword.fill(password)
        await this.logIn.click()
    }

    async expectErrorMessage() {
        await expect(this.errorMessage).toBeVisible();
    }
}
