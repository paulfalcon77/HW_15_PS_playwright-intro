import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  //const testLocator = page.locator('').locator('');
  const username = page.locator('[role=textbox][placeholder="Enter your name"]');
  const email = page.locator('[role=textbox][placeholder="Enter your email"]');
  const  btn = page.locator('[id="submit-order"]');

  await username.fill('1234');
  await email.fill('pav@gmail.com');
  await expect(btn).toBeEnabled()
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
