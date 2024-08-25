import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';
import { PageManager } from "../globalPagesSetup.js";

// WRITE YOUR STEP DEFINITIONS HERE...
When('user clicks Books link', async function () {
  await PageManager.dashboardPage.bookLink.click();
});

When('user clicks the Book categories drop down', async function () {  
  
  await PageManager.booksPage.bookCategoriesDropDown.click();
});

Then('user should see {int} book categories', async function (int) {
  /* 
  await BrowserUtility.sleep(2);
  const total = await PageManager.booksPage.bookCategoriesOption.count();
  console.log(total);
  expect(total).toBe(int);
  */

  await BrowserUtility.sleep(2);
  const totalOption = await PageManager.booksPage.bookCategoriesDropDown.locator("option").count();
  console.log(totalOption);
  expect(totalOption).toBe(int);

});

Then('book category name {string} should be included in the list of book categories', async function (string) {
  await BrowserUtility.sleep(2);
  const options = await PageManager.booksPage.bookCategoriesDropDown.locator("option").allInnerTexts();
  expect(options).toContain(string);
});