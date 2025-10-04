import { test, expect } from '@playwright/test';
// flight module added by vadamalai
test('Test description', async ({ page }) => {
  // Navigate to the desired URL
  await page.goto('https://example.com');

  // Perform actions on the page
  await page.fill('input[name="username"]', 'myuser');
  await page.click('button[type="submit"]');
})