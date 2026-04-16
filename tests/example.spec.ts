import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  //const testLocator = page.locator('').locator('');
  // const username = page.locator('#username');
  // const email = page.getByPlaceholder('Enter your email"');
  // const  btn = page.locator('#submit-order');
  //
  // await username.fill('1234');
  // await email.fill('pav@gmail.com');
  // await expect(btn).toBeEnabled()
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    'Fast and reliable end-to-end testing for modern web apps | Playwright',
  );
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  const link = page.getByRole('link', { name: 'Get started' });
  await link.click();

  await page.waitForTimeout(5000);
  // Expects page to have a heading with the name of Installation.
  const heading = page.getByRole('heading', { name: 'Installation' });
  await expect(heading).toBeVisible();
});

test('Github link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const github = page.getByRole('link', { name: 'GitHub repository' });
  await expect(github).toBeVisible();
});

test('Discord link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const discord = page.getByRole('link', { name: 'Discord server' });
  await expect(discord).toBeVisible();
});

test('Black and white schema switch', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const schema = page.getByLabel('Switch between dark and light mode');
  await expect(schema).toBeVisible();
});

test('TypeScript link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  //const typeScript = page.getByRole('link', { name: 'TypeScript' });
  const typeScript = page.locator('text=TypeScript');
  await expect(typeScript).toBeVisible();
});
