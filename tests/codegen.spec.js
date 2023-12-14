import { test, expect } from '@playwright/test';

test('Тест написанный codegen', async ({ page }) => {
  await page.goto('https://yc.erp.wand.am/auth/login');
  await page.getByLabel('Телефон').click();
  await page.getByLabel('Телефон').fill('79185434885');
  await page.getByLabel('Пароль').click();
  await page.getByLabel('Пароль').fill('BhrWfmhDNf');
  await page.getByRole('button', { name: 'Войти' }).click();
  await page.getByText('А', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Выйти' }).click();
});