import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const TD_URL = 'https://fe-delivery.tallinn-learning.ee/'

test.beforeEach(async ({ page }) => {
    await page.goto(TD_URL);
    await page.waitForLoadState('networkidle');
});

test('TD negative auth test1', async ({ page }) => {
    //await page.waitForTimeout(5000);
    const username = page.locator('#username');
    const password =  page.locator('#password');
    const signInBtn = page.locator('[data-name="signIn-button"]');
    const errorPopup = page.locator('[data-name="authorizationError-popup"]');

    const randomUsername = faker.internet.username();
    const randomPassword = faker.internet.password();

    await username.fill(randomUsername);
    await password.fill(randomPassword);
    await signInBtn.click();
    await expect(errorPopup).toBeVisible();
});

test('TD negative auth if password less than 8 initials', async ({ page }) => {
    //await page.waitForTimeout(5000);
    const username = page.locator('#username');
    const password =  page.locator('#password');
    const signInBtn = page.locator('[data-name="signIn-button"]');
    const errorPopup = page.locator('[data-name="authorizationError-popup"]');

    const randomUsername = faker.internet.username();

    for(let i = 0; i < 8; i++) {
        const negativePassword = "a".repeat(i);
        await password.fill(negativePassword);
        await username.fill(randomUsername);
        await expect(signInBtn).toBeDisabled();
    }

});

