import { test, expect } from "@playwright/test"

// season 3
test("google first test", async ({ browser }) => {
  // create new page ==============================
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://google.com")
  await expect(page).toHaveTitle("Google")
  console.log(await page.title())
})


// season 4
test.only("rahulshettyacademy first test", async ({ page }) => {
  const userName = page.locator("#username");
  const signinBtn = page.locator("#signInBtn");
  const cardTitles = page.locator(".card-body .card-title a")

  await page.goto("https://rahulshettyacademy.com/loginpagePractise")
  console.log(await page.title());

  // selectors [css , xpath] ========================================
  // filling
  await userName.fill("rahulshettyacademy ");
  await page.locator("[type='password']").fill("learning");

  // clicking =======================================================
  await signinBtn.click();

  // wait until this locator shown up page ==========================
  console.log(await page.locator("[style*='block']").textContent())

  // check text content =============================================
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");

  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signinBtn.click();

  // both of them are same
  // console.log(await cardTitles.first().textContent());
  // console.log(await cardTitles.nth(0).textContent());

  const allTitles = await cardTitles.allTextContents()
  console.log(allTitles)
})