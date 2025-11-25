import {test} from '../fixtures/base-fixtures';
import {users} from '../config/users';

test.describe('UI Tests PayDo', () => {

    test('Should open Account page and verify UI elements', async ({homePage}) => {
        const accountPage = await homePage.openAccountPage();
        await accountPage.expectAllUIElements();
    });

    test('Should show an error message when logging in with invalid credentials', async ({homePage}) => {
            const loginPage = await homePage.openLoginPage();
            await loginPage.enterInvalidCredentials(users.wrongUserData.email, users.wrongUserData.password);
            await loginPage.expectErrorMessage();
        }
    )
});