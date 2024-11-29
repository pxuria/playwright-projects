import { test, expect } from "@playwright/test"

// season 3
test("google first test", async ({ page }) => {
  await page.goto("https://google.com")
  await expect(page).toHaveTitle("Google")
  console.log(await page.title())
})


// season 4
test.only("rahulshettyacademy first test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise")
  console.log(await page.title());

  // selectors [css , xpath]
  // filling
  await page.locator("#username").fill("rahulshettyacademy ");
  await page.locator("[type='password']").fill("learning");

  // clicking
  await page.locator("#signInBtn").click();
})