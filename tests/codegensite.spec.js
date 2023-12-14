import { test, expect } from '@playwright/test';
import { error } from 'console';

test('test', async ({ page }) => {
  await page.goto('https://hvalwaters.ru/');
  await page.getByRole('link', { name: ' Личный кабинет' }).click();
  await page.getByPlaceholder('Email или телефон').click();
  await page.getByPlaceholder('Email или телефон').fill('75559876543');
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill('123qwe');
  await page.getByRole('button', { name: 'Войти' }).click();
  await page.getByRole('link', { name: 'Выход' }).click();
});